# Consumers and profiles
Since version 5.0, OOAPI has two mechanisms to support specific consumers. Sometimes specific consumers of an OOAPI endpoint should be able to request items just for them, or they need attributes that are not specified in the base specification. In other cases existing fields are being made mandatory for the project to achieve its goals.

Currently the OOAPI is used in several ways. Within institutions as an implementation to provide internal information to students, or as a canonical model to allow for the exchange of information between internal systems within an institution. OOAPI is also used as a specification to allow communication within the broader education sector. Examples of these are RIO, eduXchange and other developments are also on the way. Since the OOAPI is a broad specification, this documentation also provides information about which request and responses should be implemented to make specific consumers (applications) work.

## Filtering responses for specific consumers
The first mechanism is the `consumer` query parameter that allows clients to request items meant for a specific consumer. E.g. `GET /courses?consumer=rio`. When this query parameter is specified, the implementation should only return items needed for this consumer. The allowed values for the query parameter are defined globally in the [consumer registry](#consumer-registry). This query parameter is **only** defined for requests that return a collection of items, e.g. `GET /courses` and `GET /rooms`, **not** for requests returning a single item, e.g. `GET /course/{courseId}`.

## Extending the specification with extra attributes for specific consumers
This mechanism allows (a group of) users implementing and using OOAPI implementations to agree on a set of extra attributes that is necessary to fulfill a specific usecase. Such a mechanism also negates the necessity of providing for each and every use case in the general OOAPI specification.

Each entity described in OOAPI has a `consumers` attribute, which implementers can use to add consumer-specific attributes:

```json
{
    "...": "...",
    "consumers": [
        {
            "consumerKey": "<the consumer key>",
            "additional": "custom",
            "attributes": "here"
        }
    ]
}
```

The value of the `consumers` attribute is an array of objects. Since the value is an array, an entity can have multiple consumer objects. Each object should have at minimum the attribute `consumerKey`, which specifies the consumer for which the extra attributes are defined.

!> Currently there is no mechanism defined to request only consumer objects for a specific consumer (for example for data minimization purposes). There are however, several issues ([#296](https://github.com/open-education-api/specification/issues/296), [#292](https://github.com/open-education-api/specification/issues/292) and [#242](https://github.com/open-education-api/specification/issues/242)) that discuss adding such mechanisms.

!> Note that the consumer query parameter and the consumer objects are related but separate things! It is perfectly valid to use one without the other.

## Consumer registry
The following table lists which consumer keys are in use by which consumers. Implementations that want to use this mechanism without registering a key, should prefix their key with `x-`.

| Key        | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| rio        | RIO is a central registry, maintained by the Dutch Government that lists all educational institutions and the education they offer. |
| eduxchange | eduXchange is a website that allows students to easily enroll in education from other institutions.                                 |

## Profiles
In addition to the `consumer` query parameter and the `consumer` object, it might be necessary for a specific application or usecase to specify which requests should be implemented for it to work. One can also imagine that applications at times need attributes that are not required in the base specification. To specify such requirements we recognize "profiles". Since there is no specific format to specify such a profile yet, for now profiles are simply described using text and lists.
