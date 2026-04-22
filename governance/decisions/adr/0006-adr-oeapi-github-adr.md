---
title: Use GitHub for OEAPI Architecture Decision Records
adr: 0006
status: Accepted
date: 2026-03-19
decision-makers:
  - Technical Working Group
consulted:
informed:
---

# Use GitHub for OEAPI Architecture Decision Records

## Status: Accepted

## Context

Within the Open Education API (OEAPI) community, Architecture Decision Records (ADRs) are used to capture and document architectural and design decisions over time. These records form an important source of shared understanding, providing insight into why certain choices were made and how the architecture has evolved. As the number of ADRs grows, there is a need for a clear and logical way to store and maintain them so that they are easy to find, accessible to the wider community, and can be managed over time. An important consideration is how ADRs can be versioned or evolved in a transparent manner, allowing new decisions to be added while preserving the history and context of earlier ones.

## Considered options

### Option 1: ADRs stored in the specification repository

ADRs are stored as documents in the OEAPI specification repository. The repository is versioned using Git tags; the structure itself is not organised per version.

**Advantages:**

- Close to the normative source of OEAPI architectural decisions.
- Architectural decisions remain closely aligned with specification changes.
- Uses existing governance structures and contribution processes.
- Clear ownership by the specification maintainers.

**Disadvantages:**

- Architectural rationale may be obscured by the focus on normative specification changes.
- Decision history may be fragmented across commits without a clear narrative.
- Less suitable for readers primarily interested in explanatory or contextual material.

### Option 2: ADRs stored in the documentation repository

ADRs are stored in the OEAPI documentation repository. The documentation repository follows the same tagging approach as the specification repository, but is primarily aimed at explanation and guidance rather than normative definition.

**Advantages:**

- Architectural decisions are separated from normative specification content.
- Supports a more explanatory presentation of architectural decisions.
- Architectural rationale can be read independently from specification changes.
- Uses existing governance structures and contribution processes.
- Clear ownership by the documentation maintainers.

**Disadvantages:**

- Architectural decisions may be perceived as explanatory rather than normative.
- Decision history may be fragmented across documentation updates without a clear narrative.
- Less direct proximity to specification changes and implementation work.

### Option 3: ADRs stored in the publication repository

ADRs are stored in the publication repository that contains generated copies of the specification and documentation for published OEAPI versions.

**Advantages:**

- Separation between architectural decisions and other OEAPI artefacts.
- Provides a stable context for reading and referencing architectural decisions.
- Architectural decisions can be consumed independently from day-to-day development and documentation activities.

**Disadvantages:**

- The publication repository is a derived artefact and not a natural place for architectural governance.
- Decision evolution and intermediate reasoning are less naturally captured in a release-oriented publication context.
- Architectural governance and review processes are not naturally expressed in the publication repository.
- Architectural decisions may feel detached from day-to-day specification work.

### Option 4: ADRs stored in a dedicated ADR repository

ADRs are stored as documents in a separate repository dedicated solely to OEAPI architectural decisions and independent of specification and documentation sources.

**Advantages:**

- Separation between architectural decisions and other OEAPI artefacts.
- Provides a stable context for reading and referencing architectural decisions.
- Architectural decisions can be consumed independently from day-to-day development and documentation activities.

**Disadvantages:**

- Introduces an additional repository to maintain.
- Decision evolution and intermediate reasoning require explicit governance and maintenance to remain visible over time.
- Architectural governance and review processes are not inherently embedded in existing specification workflows.
- Architectural decisions may feel detached from day-to-day specification work.

### Option 5: ADRs documented using GitHub Discussions

ADRs are documented as structured GitHub Discussions. This option requires a further choice regarding the repository in which these discussions are hosted.

**Advantages:**

- Preserves discussion, rationale, and context alongside each decision.
- Makes the evolution of decisions visible to the community.
- No additional repository for ADR files is required.
- ADR discussions can be surfaced in the published documentation, if publication of decision summaries or references is explicitly configured.

**Disadvantages:**

- Clear conventions are required for status management and superseding decisions.
- ADRs are not stored as versioned files under Git.
- Extracting a stable, authoritative decision outcome requires additional effort.
- Long-term consistency and traceability depend on active moderation and agreed discussion structure.

### Option 5a: GitHub Discussions in the specification repository

ADRs are documented as discussions in a dedicated Architecture Decisions category within the OEAPI specification repository.

**Advantages:**

- Specification repository is the authoritative source for OEAPI design.
- Used by a broader part of the OEAPI community than the documentation repository.
- Decision discussions remain close to implementation work.
- Strong linkage between architectural decisions and technical changes.
- Clear ownership by the specification maintainers.

**Disadvantages:**

- Discussions may become highly technical in nature.
- Architectural rationale may be less accessible for readers primarily interested in explanatory or narrative context.

### Option 5b: GitHub Discussions in the documentation repository

ADRs are documented as discussions in a dedicated Architecture Decisions category within the OEAPI documentation repository.

**Advantages:**

- Fits naturally with explanatory context and rationale.
- Allows architectural decisions to be documented and read independently from specification change workflows.

**Disadvantages:**

- Lower level of community interaction in practice, as the documentation repository is maintained by a relatively small, select group.
- Less visible to the wider OEAPI community than the specification repository.
- Decision discussions are further removed from implementation work.
- Weaker linkage between architectural decisions and technical changes.
- Architectural authority may be perceived as weaker than in the specification repository.

### Option 5c: GitHub Discussions in the publication repository

ADRs are documented as discussions in the publication repository that hosts generated copies of the OEAPI specification and documentation.

**Advantages:**

- Separation between architectural discussions and day-to-day specification and documentation work.
- Provides a stable context, as the publication repository changes infrequently outside release cycles.

**Disadvantages:**

- The publication repository is a derived, non-authoritative context and is not designed for architectural governance or long-term decision maintenance.
- Architectural discussions are less discoverable as active work items for the wider OEAPI community.
- Decision discussions are further removed from implementation and day-to-day specification work.

## Decision

### Option 1-4

When comparing Options 1 to 4, Option 4 emerges as the most reasonable choice. Options 1 and 2 place ADRs within repositories that primarily serve other purposes, creating a risk that architectural decisions become subordinate to specification changes or documentation maintenance, which reduces their clarity and long term visibility. Option 3 relies on the publication stream, which is a derived and regenerated context and therefore unsuitable for maintaining an authoritative and evolving decision record. Option 4, by contrast, provides a clear and dedicated location for architectural decisions, making their scope and intent explicit and preserving decision history over time. Although it introduces an additional repository, this trade off is outweighed by the clarity, neutrality, and architectural focus it provides.

### Option 5

Within Option 5, which uses GitHub Discussions for capturing architectural decisions, Option 5a is the most natural choice. Locating ADR discussions in the specification repository aligns with current community practice, as this repository is already the primary place where a broad part of the OEAPI community collaborates and discusses change. This placement keeps architectural decisions close to technical change, reinforces their perceived authority through established governance, and situates them where engagement already occurs. While discussions may be more technical and less narrative in nature, these drawbacks are manageable and do not outweigh the benefits of visibility, ownership, and proximity to implementation.

## Consequences
