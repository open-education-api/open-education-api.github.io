
# `supplementaryInformation` – Modelling Supplementary and Promotional Data

The `supplementaryInformation` structure provides a generic and extensible way to include additional, promotional, contextual, or visually rich information within OOAPI resources. This pattern separates the *media form* from the *semantic purpose*, offering a clean and implementation-friendly method to enrich educational offerings without modifying the core schema.

This field enables platforms such as **EduXchange** to present offerings in a more engaging and inspirational manner, while ensuring the data model remains structured, predictable, and interoperable across institutions.

## 1. Overview

`supplementaryInformation` is an array of typed entries.  
Each entry consists of three components:

| Field                   | Purpose                                                     |
|-------------------------|-------------------------------------------------------------|
| `supplementaryBaseType`| Defines the *media form* (text, image, video)               |
| `supplementaryType`    | Defines the *semantic intent* (marketing, badge, promo, announcement)    |
| `supplementaryValue`   | Contains the actual value (text, Markdown, or URI)          |

This model is **generic**: institutions MAY add additional supplementary entries without changing the schema, as long as they use valid `supplementaryBaseType` and `supplementaryType` values (or `x-` prefixed custom ones).

## 2. When to use supplementaryInformation

Use `supplementaryInformation` when you need to include:

- promotional or inspirational text  
- badges and visual markers  
- images used on student-facing portals  
- promotional or informative video links  
- announcement or highlight blocks  
- any future, institution-specific content (via `x-` prefixed types)

Do **not** use this for core academic information, such as learning outcomes, admission requirements, credits, or formal descriptions — these remain in their dedicated fields.

## 3. Structure

```yaml
supplementaryInformation:
  type: array
  items:
    type: object
    properties:
      supplementaryBaseType:
        $ref: '../enumerations/SupplementaryBaseType.yaml'
      supplementaryType:
        $ref: '../enumerations/SupplementaryType.yaml'
      supplementaryValue:
        type: string
        description: |
          Content value (text or URI), depending on baseType.
    required:
      - supplementaryBaseType
      - supplementaryType
      - supplementaryValue
```

### 3.1 Base types

| Code    | Description                                                             |
|---------|-------------------------------------------------------------------------|
| `image` | Visual media referenced as a URI                                        |
| `text`  | Free-form text or Markdown                                              |
| `video` | Video media referenced as a URI                                         |

### 3.2 Supplementary types

| Code          | Description                                         |
|---------------|-----------------------------------------------------|
| `announcement`| General-purpose announcement or notice              |
| `badge`       | Visual label or achievement marker                  |
| `marketing`   | Promotional or marketing-related content            |
| `promo`       | Short promotional highlight or teaser               |

Both enumerations are *extensible* using the `x-` prefix.

## 4. Examples

### 4.1 Marketing text

```yaml
supplementaryInformation:
  - supplementaryBaseType: text
    supplementaryType: marketing
    supplementaryValue: |
      Discover how this programme helps you build real-world skills through engaging, hands-on learning.
```

### 4.2 Promotional image

```yaml
supplementaryInformation:
  - supplementaryBaseType: image
    supplementaryType: promo
    supplementaryValue: "https://example.edu/media/programme-banner.jpg"
```

### 4.3 Badge (achievement label)

```yaml
supplementaryInformation:
  - supplementaryBaseType: image
    supplementaryType: badge
    supplementaryValue: "https://example.edu/badges/excellence.png"
```

### 4.4 Promotional video

```yaml
supplementaryInformation:
  - supplementaryBaseType: video
    supplementaryType: marketing
    supplementaryValue: "https://youtu.be/abcd1234"
```

### 4.5 Announcement block

```yaml
supplementaryInformation:
  - supplementaryBaseType: text
    supplementaryType: announcement
    supplementaryValue: |
      Enrolment for the 2025 cohort opens in January.
```

## 5. Custom types

Institutions may define additional values using the `x-` prefix:

```yaml
supplementaryInformation:
  - supplementaryBaseType: text
    supplementaryType: x-alumniQuote
    supplementaryValue: |
      "This course completely changed the way I think about technology."
```

This allows flexibility while preventing collisions with standardised values.

## 6. Validation considerations

- `supplementaryBaseType` MUST be consistent with `supplementaryValue` (e.g., images/videos MUST be valid URIs).  
- `supplementaryType` MUST NOT replicate the baseType.  
- Consumers SHOULD gracefully handle unknown custom types (`x-*`).  
- Publishers SHOULD document any `x-*` types they use.

## 7. Benefits

- Enables richer, more inspiring presentation of offerings.  
- Keeps the core schema stable, clean, and formal.  
- Allows promotional and informational content without schema proliferation.  
- Provides a **generic mechanism** that can carry any future supplementary information.

## 8. Summary

`supplementaryInformation` offers a single, extensible and technically robust way to attach promotional, contextual, or visually rich content to OOAPI resources. By separating media form and semantic intent, this model introduces clarity, consistency, and flexibility while enabling platforms such as EduXchange to deliver more engaging presentation layers.
