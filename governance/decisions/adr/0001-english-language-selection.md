---
title: Language Variant for OEAPI (British English vs. American English)
adr: 0001
status: Accepted
date: 2025-08-22
decision-makers:
  - OEAPI management
consulted:
  - Technical Working Group
informed:
  - Community
---

# Language Variant for OOAPI (British English vs. American English)

## Status

Proposed (22 aug 2025): This decision note is presented to the OOAPI
management for discussion and resolution.
Accepted (27 aug 2025): The decision note has been discussed in the OOAPI
management meeting.

## Context

The Open Education API (OOAPI) uses English as the standard language for
specifications, documentation, and communication. A decision is required on
whether British English (UK) or American English (US) should be applied
consistently. This is not a technical issue but a policy issue, since both
variants are equally valid for machine processing.

The context is as follows:

* Universities in the EU and most EU-level higher education frameworks
  typically adopt British English in communication and policy documents.
* Technical standards and programming conventions (e.g. JSON keys, major
  frameworks) often follow American English spelling.
* European Union institutions explicitly recommend the use of British
  English, as stated in the EU English Style Guide.
* In v6, most usage is American English in technical identifiers and paths
  (e.g. /program rather than /programme), while documentation and
  enumerations are predominantly British English. This means that moving
  everything to British English would have a greater impact than moving
  everything to American English, since changing identifiers and paths is
  more disruptive than adjusting enumerations and documentation.

The technical working group has indicated that now, with the release of v6
(a major version), is the right moment to make a clear choice, as breaking
changes can be justified.

## Technical Working Group Discussion

During recent discussions, the technical working group provided the
following input:

* Vocabulary updates introduced in v6 (e.g. cancelled, organisation_id,
  invoicing, unknown, attended, absent, incomplete) have improved clarity
  and moved closer to British or neutral international usage.
* There is broad agreement that the specification should be standardised
  consistently on one variant.
* Several contributors, including @jelmerderonde and @hamrt, expressed
  personal and institutional preference for British English, acknowledging
  both EU policy norms and current usage in European academia.
* Other contributors, such as @rrutte, raised pragmatic concerns about
  changing deeply embedded terms like /program to /programme, especially
  given developer familiarity and the US English precedent from earlier
  versions (v4).
* The v6 codebase already uses mostly US English spellings, although
  inconsistently.
* Suggested way forward from the group:
  * Adopt British English as the guiding language for documentation,
    enumerations and descriptions, following the EU English Style Guide
    where relevant.
  * Retain technically embedded terms (such as /program, program_id) in US
    English if changing them would break backward compatibility or create
    unnecessary developer confusion.
  * Document the language standard clearly and explicitly in the v6
    specification.

This pragmatic compromise reflects the balance between long-term strategic
alignment with the EU and the short-term reality of existing technical
implementations.

## Considered options

### Option A: Consistent British English (All UK/EU)

Pros:

* OOAPI is fully aligned with EU standards and academic practice.
* OOAPI is consistent with terminology used by European universities.
* Provides a clear long-term benefit: a fully consistent, unambiguous
  language variant across the specification.

Cons:

* OOAPI is less well aligned with US standards and practices.
* Requires changes to existing paths and identifiers, which may be
  disruptive in the short term. However, the advantage of a uniform and
  consistent variant outweighs the temporary inconvenience.

### Option B: Consistent American English (All US)

Pros:

* OOAPI is fully aligned with US and software development conventions.
* Lower immediate impact: v6 already uses mostly US English in identifiers
  and paths.

Cons:

* OOAPI is misaligned with EU institutions, which mandate British English.
* OOAPI is misaligned with European higher education practice, which
  generally follows British English usage.
* Misses the long-term benefit of alignment with the EU and the European
  academic environment.

### Option C: Hybrid (UK/EU English in documentation, US English in technical identifiers)

Pros:

* OOAPI is aligned with EU institutions and higher education in
  documentation and terminology.
* OOAPI is aligned with US practice in technical identifiers.
* Minimises disruption for developers while respecting EU policy norms.

Cons:

* Creates inconsistency within the specification: the same concept can
  appear in both forms (e.g. enum canceled but description cancelled).
* OOAPI risks being perceived as neither fully EU-aligned nor fully
  US-aligned.
* Is highly confusing for developers, as the language is not consistent.
* Provides no long-term clarity, as hybrid use locks OOAPI into a
  compromise state.

### Option D: Transition to full British English (option A, but with a later migration)

Pros:

* OOAPI gains a clear long-term strategy: full alignment with EU
  institutions and higher education.
* Short-term pragmatism: avoids immediate disruption for developers.
* Provides time to plan migration and communicate with all stakeholders.

Cons:

* OOAPI remains inconsistent in the short term.
* Requires significant planning and governance to manage the migration.
* In practice, postpones the decision or shifts the burden to a future
  major release, creating a larger breaking change later.

## Comparison of Options

| Option          | EU Alignment                                              | US Alignment                                   | Consistency                                   | Developer Clarity                               | Implementation Impact                           |
|-----------------|-----------------------------------------------------------|------------------------------------------------|-----------------------------------------------|--------------------------------------------------|--------------------------------------------------|
| A – All UK/EU   | Strong alignment with EU institutions and higher education| Weak                                           | Full consistency across documentation and identifiers | Clear, single variant                            | High (breaking changes in paths/identifiers)      |
| B – All US      | Misaligned with EU institutions and universities          | Strong alignment with US/IT conventions         | Consistent, but not EU-oriented               | Clear, single variant                            | Low (minimal changes needed)                     |
| C – Hybrid      | Partial (documentation and enums)                         | Partial (identifiers)                          | Mixed, inconsistent                          | Confusing (e.g. canceled vs. cancelled)          | Low (retains existing identifiers)              |
| D – Transition  | Eventual full alignment with EU                           | Weak in short term                             | Mixed until migration                        | Inconsistent until future version                | Medium (major changes postponed)                |

## Decision

The technical working group advises that this is the right moment to make a
clear choice between Option A (All UK/EU) and Option B (All US).

As v6 is a major release, it provides the natural opportunity to introduce
changes that ensure consistent usage across the specification.

The OOAPI management is invited to select between:

* Option A (All UK/EU): if immediate EU alignment is prioritised. The
  short-term disruption is outweighed by the long-term benefit of a uniform,
  consistent language variant.
* Option B (All US): if continuity and simplicity are prioritised. This
  avoids short-term disruption but foregoes long-term EU alignment.

Option C and Option D are noted but are not recommended as they provide
neither immediate clarity nor long-term consistency.

## Consequences

* If Option A (All UK/EU) is chosen:
  * Short-term disruption due to changes in identifiers and paths.
  * Clear long-term benefit of consistency, alignment with EU institutions,
    and coherence with European higher education practice.

* If Option B (All US) is chosen:
  * Minimal disruption in the short term, as US English is already dominant
    in v6 technical identifiers.
  * Misalignment with EU institutions and European universities in the long
    term.

* If Option C (Hybrid) is chosen:
  * Minimal disruption in the short term.
  * Long-term inconsistency and confusion for developers, as both variants
    remain present.

* If Option D (Transition) is chosen:
  * Disruption is avoided in the short term.
  * Long-term costs increase as a major breaking change will eventually be
    necessary to move to full British English.
