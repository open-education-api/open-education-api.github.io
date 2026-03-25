---
title: Marketing / Promotion Fields
adr: 0003
status: Proposed
date: 2026-03-19
decision-makers:
  - Technical Working Group
consulted: 
informed:
  - Community
---

# Marketing / Promotion Fields

## Status: Proposed

## Context

EduXchange has requested the addition of fields to support marketing or
promotional information within the API. These elements are currently not part
of the standard but are considered valuable for presenting inspirational or
promotional content alongside educational offerings. During earlier
discussions, it was noted that such fields could improve the visibility and
attractiveness of offerings, though opinions differed on whether they belong
in the core specification.

## Considered options

1. Do not include any marketing fields in the standard. Keep the specification
   strictly focused on educational and informational data without promotional
   elements.

2. Add marketing fields in a separate consumer or profile for marketing
   information.

3. Add marketing fields as optional elements in the standard. Introduce
   optional fields for inspirational text, image(s), and video link to support
   use cases such as EduXchange.

4. Introduce typed additional fields (recommended). Allow text, images, and
   video links to carry a specific `type` attribute, enabling better
   differentiation and more flexibility. For example:

   * type: marketing for inspirational text, promotional images or videos
   * type: badge for visual badges.

## Decision

We propose to include marketing or promotional fields as optional elements
within the API, supporting typed content. The proposed additions are:

* inspirationalTexts (with type, e.g. "marketing")
* inspirationalImages (with type, e.g. "marketing" or "badge", plural allowed)
* inspirationalVideoLinks (with type, e.g. "marketing" or "badge")

These fields will enable platforms such as EduXchange to present educational
offerings in a more engaging and inspirational way, while maintaining a
consistent data model.

## Consequences

### Positive

* Enables richer and more flexible presentation of educational offerings.
* Supports use cases such as EduXchange that combine promotional and
  informational content.
* The type attribute provides clarity and extensibility for future promotional
  media.

### Negative

* Adds minor complexity to schema validation and implementation.
* Requires clear guidance to prevent inconsistent use of the type attribute
  across institutions.
