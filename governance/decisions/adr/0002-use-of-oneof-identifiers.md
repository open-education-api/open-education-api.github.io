---
title: oneOf Identifier vs Object pattern
adr: 0002
status: Accepted
date: 2025-11-13
decision-makers:
  - Technical Working Group
consulted:
informed:
  - Community
---

# oneOf Identifier vs Object pattern

## Status: Accepted

## Context

The OOAPI specification currently uses oneOf in several places to model
properties that can hold either an identifier or a fully expanded object. A
typical example is a property such as `offering`, which is defined as a oneOf
between an `Identifier` schema and the corresponding `CourseOffering` schema.

This pattern causes issues for code generation in the Microsoft / Azure DevOps
C# stack. The generated client code cannot easily expose this union in a
strongly typed manner. As a result, consumers may end up with confusing models
(for example, a `person` property that sometimes only contains a UUID instead
of a complete `Person` object). This increases the barrier to low-effort
adoption of the specification for tool builders and client implementers.

Considered options

1. Keep the current use of oneOf for identifier-or-object properties and
   document specific code generation workarounds for certain stacks such as C#.
   This preserves the formal union semantics in the schema, but code generators
   generally model such unions as weakly typed properties (for example
   `object`) or as classes that do not clearly distinguish between the
   identifier and the full object.

2. Move oneOf to a higher, object level. In this pattern one variant of the
   object contains `<name>Id` while the other contains `<name>`. This makes the
   union explicit at object level instead of on a single property, but most C#
   generators still map this to a single class with both properties nullable,
   effectively ignoring the mutual exclusivity.

3. Remove oneOf for identifier-or-object unions and use two independent
   properties instead: one for the identifier and one for the expanded object.
   Both properties are optional and their intended usage is described in prose.
   This avoids union types in the schema and produces straightforward, strongly
   typed models in generated clients.

   ```yaml
   xxxId:
     $ref: ./XxxId.yaml
   xxx:
     $ref: ./Xxx.yaml
   ```

   In the third option, the schema no longer expresses "just one of the two".
   Instead, the contract is that servers and clients agree on how to use
   `<name>Id` and `<name>` (for example in expandable patterns), while code
   generation remains simple and predictable.

4. Exclude both without requiring either. This option introduces a pattern
   where both the identifier and the full object are defined as optional
   properties, but validation logic ensures that both cannot be present
   simultaneously. A possible schema representation is:

   ```yaml
   properties:
     courseId:
       $ref: './CourseId.yaml'
     course:
       $ref: './Course.yaml'
   allOf:
     - not:
         required:
           - courseId
           - course
   ```

   This approach expresses the rule “zero or one of the two” in a
   machine-readable way

## Consideration

In option 1, the property may contain either the identifier, the full object,
or be null. This keeps the schema compact, but it pushes complexity to clients:
code generators typically model such unions as weakly typed properties (for
example object), and consumers need to inspect the runtime form of a single
field. For this reason, option 1 is not preferred for strongly typed client
implementations.

Option 2 makes the union explicit at object level and formally expresses that
exactly one of the two variants must be present. This is attractive from a
schema semantics perspective, but current C# generators usually still produce
a single class with both properties nullable and ignore the exclusivity rule.
Option 2 is therefore mainly useful when formal validation by JSON Schema
tooling is important and the limitations of generated clients are acceptable.

Option 3 removes oneOf altogether and models the identifier and the full
object as two independent, optional properties. In this case the schema does
not express “just one of the two”; instead, the intended usage of `<name>Id`
and `<name>` is defined in documentation and profiles. This pattern is very
predictable for code generation and works well in strongly typed languages,
which makes it the preferred option where strict mutual exclusivity is not
required.

Option 4 adds an explicit “zero or one of the two” rule on top of the
dual-property approach. Both fields remain optional, but additional validation
ensures that they are never present at the same time. This provides the most
precise schema-level constraint, but many OpenAPI-to-C# generators ignore this
rule and still generate a class with two nullable properties. Option 4 is
therefore mainly beneficial in environments that rely on dedicated JSON Schema
validation, and less so when the primary concern is clean, strongly typed
client code.

## Decision

Based on the analysis of the four options, the property-level `oneOf` pattern
(option 1) is not suitable for strongly typed implementations, as it results
in weakly typed properties and runtime ambiguity.

Option 2 expresses the exclusivity more clearly at object level but still
leads to incomplete support in current code-generation tools, which typically
flatten the model into a single class with both nullable properties.

Options 3 and 4 provide the most practical and maintainable solutions.

Option 3, defining two independent optional properties without `oneOf`,
offers a simple and predictable structure that generates clean, strongly typed
client models and is easy to implement.

Option 4 extends this approach by expressing the rule “zero or one of the two”
directly in the schema through additional validation keywords such as `not` or
`dependentRequired`.

While tooling support for option 4 remains limited, it provides a clearer
formal constraint when schema validation is a priority.

Therefore, option 3 is generally preferred for compatibility and ease of
implementation, while option 4 may be adopted where formal validation of
exclusivity is desired and supported by the technical environment.

## Consequences

* Improved code generation and type safety

  Option 3: Generated C# (and other strongly typed) clients can represent both
  the identifier and the object as fixed, well-defined properties. This avoids
  weakly typed object fields and enables clearer, more maintainable client
  code.

  Option 4: Similar improvements apply, but tooling may not correctly
  interpret the validation rules.

* Formal schema enforcement of exclusivity

  Option 4: Adds a machine-readable rule to prevent both fields from being
  populated simultaneously, ensuring consistency in data exchange. However,
  most OpenAPI-to-C# generators currently ignore this rule, so enforcement
  depends on external JSON Schema validation.

* Backward compatibility and migration effort

  Both options: Represent a breaking change for existing implementations that
  rely on property-level oneOf. Clients and providers will need to update
  their models, documentation, and examples to align with the new pattern.

* Clarity for API consumers

  Both options: The meaning of each field (`<name>Id` and `<name>`) becomes
  explicit, removing ambiguity about whether a field contains an identifier or
  a full object. This improves usability for consumers and reduces
  implementation errors.

* Increased schema verbosity

  Both options: Add an extra property (`<name>Id` in addition to `<name>`),
  making schemas more verbose but significantly improving readability and
  predictability.

* Validation consistency across environments

  Option 3: Validation relies mainly on conventions and documentation.

  Option 4: Formal validation is possible but only effective if schema
  validation tooling is actively used in the environment.
