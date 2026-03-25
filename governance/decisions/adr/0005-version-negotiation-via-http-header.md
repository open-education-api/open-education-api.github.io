---
title: OEAPI versioning exchange
adr: 0005
status: Proposed
date: 2026-03-19
decision-makers:
  - Technical Working Group
consulted: 
informed:
  - Community
---

# OEAPI versioning exchange

## Status: Proposed

## Context

Within OEAPI v6 and the MBO OKE project, both the server (provider) and the
client (consumer) may support multiple versions of the OEAPI specification
(major and minor) and multiple versions of consumer-specific extensions.

The working group has agreed that version communication will occur via HTTP
headers, ensuring clarity, simplicity and alignment with widely adopted web
standards.

Clients request a specific OEAPI version in the request. When processing the
request, the server may return the requested version or any compatible minor
version within the same major version. This may include both lower and higher
minor versions, provided that newer minor versions do not break compatibility
with earlier minor versions.

One design decision remains open: whether the requested OEAPI version should be
communicated via the standard HTTP `Accept` header together with the
`Content-Type`, or via dedicated custom version headers such as `OEAPI-Version`.

## Considered options

1. Versioning via body attributes (e.g. `consumer.version` inside the consumer object)

2. Versioning via query parameters (e.g. `?consumer-version=1.0`)

3. Versioning via dedicated custom request headers
   (e.g. `OEAPI-Version`, `OEAPI-Consumer-Version`)

4. Versioning via the HTTP `Accept` header with standard HTTP negotiation
   (multiple media types and q-values)

5. Versioning via the HTTP `Accept` header without standard HTTP negotiation
   (the client sends exactly one requested OEAPI version in the `Accept`
   header, without consumer-specific parameters, and the server determines
   whether a compatible representation can be returned)

6. Versioning via the HTTP `Accept` header without standard HTTP negotiation
   (the client sends exactly one requested OEAPI version in the `Accept`
   header, optionally including zero or one consumer type and version, and
   the server determines whether a compatible representation can be returned)

For use of the `Accept` header, see
[RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html).

## Considerations

Several approaches for communicating version information were considered.

Options 1, 2 and 4 do not sufficiently meet the requirements for OEAPI.

- Option 1. Versioning via body attributes places protocol negotiation inside
  the payload (for example `consumer.version` inside the consumer object).
  This requires the server to parse the body before determining the protocol
  version and prevents infrastructure components such as gateways, proxies or
  logging systems from inspecting the version at the HTTP layer.

- Option 2. Versioning via query parameters exposes protocol negotiation in
  the resource identifier (for example `?consumer-version=1.0`). This mixes
  protocol concerns with resource addressing and may lead to caching
  inconsistencies, URL proliferation and ambiguous resource identity.

- Option 4. Versioning via the HTTP `Accept` header with standard HTTP
  negotiation relies on full content negotiation semantics, where the client
  may send multiple media types and quality (`q`) values. This introduces
  additional complexity for both clients and servers and requires negotiation
  behaviour that is unnecessary for OEAPI version selection.

Options 3, 5 and 6 better satisfy the requirements because version negotiation
remains explicit and takes place at the HTTP header level while avoiding the
complexity of full HTTP negotiation.

- Option 3. Versioning via dedicated custom request headers uses explicit,
  non-standard HTTP header fields (for example `OEAPI-Version` and
  `OEAPI-Consumer-Version`) to communicate protocol versions. This keeps
  version information in the HTTP layer and avoids mixing protocol concerns
  with resource identifiers or message payloads. However, it introduces
  custom header semantics outside the standard content negotiation model,
  which may reduce interoperability, require additional documentation and
  make generic HTTP tooling less aware of the versioning scheme.

- Option 5. Versioning via the HTTP `Accept` header without standard HTTP
  negotiation keeps version information in the HTTP layer and aligns it with
  representation metadata, while avoiding the complexity of full content
  negotiation. The client sends exactly one requested OEAPI version in the
  `Accept` header, while consumer-specific information is provided via
  dedicated request headers. The server determines whether a compatible
  representation can be returned, resulting in a clear separation of concerns
  and a simple, predictable model.

- Option 6. Versioning via the HTTP `Accept` header without standard HTTP
  negotiation keeps both OEAPI version information and optional consumer
  information in the HTTP layer and allows them to be expressed together as
  part of representation metadata. The client sends exactly one requested
  OEAPI version and optionally one consumer type and version in the
  `Accept` header, enabling a single, consistent mechanism for versioning
  while maintaining clarity and alignment with HTTP semantics.

Versioning via dedicated custom headers (option 3) keeps version information
in the HTTP layer, but introduces non-standard header fields such as
`OEAPI-Version` and `OEAPI-Consumer-Version`. This moves versioning outside
the established HTTP representation model and reduces alignment with generic
HTTP tooling, intermediaries and widely adopted Internet conventions.

Versioning via the HTTP `Accept` header without consumer information
(option 5) aligns OEAPI versioning with representation metadata, but requires
consumer versioning to be handled through separate headers. This splits
related concerns across multiple mechanisms and reduces consistency and
clarity in how versioning is expressed.

The preferred approach is to express both OEAPI and consumer versioning in the
standard HTTP `Accept` and `Content-Type` headers. This corresponds to option
6, where the client sends exactly one requested OEAPI version and optionally
one consumer type and version as part of the media type parameters.

This approach keeps all versioning concerns within the standard HTTP
representation model, provides a single consistent mechanism for both OEAPI
and consumer profiles, and avoids the complexity of full HTTP content
negotiation.

## Decision

Option 6 best aligns with established Internet standards while also fulfilling
all functional requirements for OEAPI version negotiation. It provides a
clear, consistent and extensible solution and is therefore the recommended
approach.

The client specifies exactly one requested OEAPI version in the request. When
processing a request, the server may return the requested version or any
compatible minor version within the same major version. This may include both
lower and higher minor versions, provided that the representation remains
compatible with the requested version.

If the server cannot provide a compatible version within the same major
version, it MUST return **406 Not Acceptable**. In this context, 406 indicates
that the server cannot produce an acceptable representation in any supported
version. This MAY concern either the OEAPI version or the consumer version.

The error body MUST include the requested version and the list of supported
versions. If the error concerns a consumer version, the consumer key MUST also
be included.

## Example

### GET request (client → server)

Standard request.

```http
GET /courses HTTP/1.1
Accept: application/vnd.oeapi+json; version=6.1; consumer=mbo-oke-roster-service; consumer-version=1.0
```

### GET response (server → client)

Any minor version is always allowed and considered compatible.

```http
HTTP/1.1 200 OK
Content-Type: application/vnd.oeapi+json; version=6.0; consumer=mbo-oke-roster-service; consumer-version=1.0
```

### POST request (client → server)

Standard request.

```http
POST /enrolments HTTP/1.1
Content-Type: application/vnd.oeapi+json; version=6.1; consumer=mbo-oke-roster-service; consumer-version=1.0
Accept: application/vnd.oeapi+json; version=6.1; consumer=mbo-oke-roster-service; consumer-version=1.0

{ ...payload in OEAPI 6.1 format... }
```

### Error: unsupported version

No compatible version can be provided. This may concern either the OEAPI
version or the consumer version.

#### Error: unsupported OEAPI version

```http
HTTP/1.1 406 Not Acceptable
Content-Type: application/problem+json

{
  "type": "https://api.example.org/problems/version-not-acceptable",
  "title": "Version not acceptable",
  "status": 406,
  "detail": "The OEAPI version '2.0' is not supported.",
  "requestedVersion": "2.0",
  "supportedVersions": ["6.0", "5.0"]
}
```

#### Error: unsupported consumer version

```http
HTTP/1.1 406 Not Acceptable
Content-Type: application/problem+json

{
  "type": "https://api.example.org/problems/version-not-acceptable",
  "title": "Version not acceptable",
  "status": 406,
  "detail": "The consumer version '2.0' is not supported.",
  "requestedVersion": "2.0",
  "supportedVersions": ["0.94", "1.0"],
  "consumer": {
    "consumerKey": "mbo-oke-roster-service"
  }
}
```

## Consequences

### Positive

- Clear and explicit version negotiation at the HTTP layer using standard
  HTTP `Accept` and `Content-Type` headers
- Backwards and forwards compatibility within major versions
- OEAPI and consumer profiles evolve independently
- Simplifies client implementation by requiring only one explicit OEAPI
  version and optionally one consumer version
- Easier debugging through explicit requested and supported version reporting
- Consistent behaviour across implementations
- Predictable server logic using a simple minor compatibility mechanism
- Improved observability because version mismatches are first-class 406 errors
- Alignment with established Internet standards by using media type parameters

### Negative

- Requires consistent header forwarding across gateways and intermediaries
- Requires server-side validation of both OEAPI and optional consumer version
  parameters
- Standard HTTP content negotiation mechanisms such as multiple media types
  and q-values are intentionally not used
