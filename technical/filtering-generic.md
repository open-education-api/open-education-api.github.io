# Generic filtering

## Implementation note

- The availability and behaviour of this query functionality are entirely determined by
  the organisation hosting the API implementation. It is **not mandatory** for implementers
  to support this functionality, and it **cannot be enforced** upon organisations that
  provide or consume OOAPI endpoints.  
- It is up to each implementer to decide whether to support this feature. It is **not** a
  requirement of the OOAPI standard itself.  
- Consumers or working groups that wish to apply specific filtering mechanisms are
  encouraged to do so using this approach for the sake of consistency across
  implementations.

---

When requesting collections of resources, a client can optionally request that items be
filtered using the query parameter `filter_query`.

This mechanism is a **generic structure** that enables flexible filtering on any exposed
field of a resource. It is **not required** and **may not be implemented** by every
organisation. When unsupported, the parameter is simply ignored.

---

## Generic filter structure using `filter_query`

The `filter_query` parameter allows clients to express conditions on fields in a
structured way using *deepObject* serialisation.

### Example pattern

```http
filter_query[field][operation]=value
```

Each condition defines one filter on a specific field. When multiple filters are present,
they are combined using logical **AND**.

### Example request

```http
GET /course-offerings?filter_query[start_date][gt_date]=2025-09-01T00:00:00Z&filter_query[programme.code][in]=B-IT-2025
```

This example returns all course offerings that start after 1 September 2025 and have the
programme code `B-IT-2025`.

---

## Combining filters with OR blocks

To combine conditions with logical OR, filters can be grouped in a special array called
`__or`. Each array element represents one filter condition. All elements inside the same
`__or` block are combined using OR.

### Example

```http
filter_query[__or][][name][like]=bio*
filter_query[__or][][name][like]=chem*
```

This query returns items whose `name` starts with either “bio” or “chem”. Outside the
`__or` block, all filters continue to be combined with logical AND.

---

## Using wildcards

Partial matches can be expressed using wildcards. Implementers **SHOULD** use only the
asterisk `*` as a wildcard. Other characters such as `%` **must be escaped** and **may not
be supported** consistently.

### Example

```http
filter_query[name][like]=bio*
```

This matches all items whose name begins with “bio”.

---

## Implementation notes

- Filtering is **optional**. Implementers **MAY** support it fully, partially, or not at
  all.  
- The presence of a `filter_query` parameter does **not** guarantee that filtering will be
  applied.  
- The behaviour (for example case sensitivity or data type comparisons) **may vary**
  between implementations.  
- The structure is **extensible**. New operations or fields can be added if they follow the
  same serialisation pattern.  
- Filters are a convenience feature and **not** part of the formal API contract.

---

## Design inspiration

The design of `filter_query` is inspired by
[Storyblok’s Content Delivery API filter
queries](https://www.storyblok.com/docs/api/content-delivery/v2/filter-queries). It adopts
a similar principle: a clear, extensible structure for flexible querying without defining
new endpoint-specific parameters.

---

## Summary

`filter_query` provides a consistent and extensible way for clients to filter API
responses. It improves flexibility and reduces the need for endpoint-specific query
parameters. However, its support is **optional**, and behaviour may differ per
implementation. Implementers are encouraged to document which fields and operators are
available, but support for this feature can **never be required** by the specification or
by any organisation.
