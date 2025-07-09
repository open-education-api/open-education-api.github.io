# Data minimization and security
The API follows the principle of data minimization, a key privacy requirement, ensuring that only the minimum necessary (personal) data is shared with each API client. This approach protects sensitive information. This provides users of the specification to retain control on what information they want to share with the API clients. Within the standard there are two incentives to do data minimization:  
A. Security & privacy reasons: In this case the client of the API should not have access to all or specific data within the API. This is API security and requires 'server-controlled access enforcement'.  
B. Data-usage-optimization: In this case the client of the API does have access to all data within the API, but is not interested in all information with every API call and it is not necessary to transmit all the data. This can be solved via Field selection.  

# A. Server-controlled access enforcement
All data access is centrally controlled and enforced by the server. This means:  
•	The server always retains full authority over what data is exposed to which clients.
•	Access to data is explicitly authorized and scoped per client.  
•	Clients cannot bypass security policies or fetch unauthorized data, even if they attempt to manipulate query parameters or headers.  

Most of the education offering data that is available via the API is public data, but the server is responsible for a correct implementation of the required security levels, that can support differentiated access for various types of clients. It is advisable to standardise this based on the confidentiality and integrity levels of the specific data. The differentiation can for example be made between:  
•	Internal clients may have access to the most complete data sets (but even with internal services the privacy aspect needs to be taken into account).  
•	Third-party or external clients may receive only a minimal required subset.  
•	Clients that request data to become publicly available may access only data that is classified as public.  

# B. Data minimization (/data-usage-optimization) via fields selection
Data minimization is a key principle where the API provides only the necessary data requested by the client. This reduces the risk of exposing sensitive information and aligns with privacy best practices.  
To support both data minimization and performance optimization, the API can optionally allow clients to indicate which fields they are interested in. This mechanism can help reduce payload sizes and unnecessary data transmission.
This can be implemented and supported using the fields query parameter. Via this approach a client can express fields preferences that the client wants the server to return in the response.  

*Important:* This is a request hint, not a security feature. 
The server always determines the final response shape based on the client’s access rights. If a client requests unauthorized fields, they are silently omitted or replaced with appropriate redaction placeholders.


If fields selection is implemented on the server side, the client can explicitly determine the subset of fields he wants to receive via the fields query parameter. In case there is no fields query parameter used by the client, the server will return all the fields that the user has access to. If the client makes a selection on the fields it wants to receive via the query parameter the server will only return the mandatory fields and if applicable the addtional indicated fields. 

*Please note:* This approach also applies to consumer objects, ext objects and expands: if the client wants to limit the returned payload on these object, the fields parameter can be used to indicate which fields it expects to be returned.

## Example of the use of fields query parameter

`GET persons/me` will provide:

```
{
    "personId": "123e4567-e89b-12d3-a456-426614174000",
    "primaryCode": 
{
    "codeType": "identifier",
    "code": "1234qwe12"
},
"givenName": "Martina",
"alternateName": "Marieke",
"preferredName": "Maartje",
"surnamePrefix": "van",
"surname": "Damme",
"displayName": "Maartje van Damme",
"initials": "MCW",
"idCheckName": "string",
"activeEnrollment": false,
"dateOfBirth": "2003-09-30",
"cityOfBirth": "Utrecht",
"countryOfBirth": 
{
    "iso3166-1-alpha2": "NL",
    "iso3166-1-alpha3": "NLD",
    "iso3166-2": "BQ-BO",
    "iso3166-3": "ANHH"
},
"nationality": 
{
    "iso3166-1-alpha2": "NL",
    "iso3166-1-alpha3": "NLD",
    "iso3166-3": "ANHH"
},
"dateOfNationality": "2003-09-30",
"affiliations": 
[
    "student"
],
"mail": "vandamme.mcw@universiteitvanharderwijk.nl",
"secondaryMail": "poekie@xyz.nl",
"telephoneNumber": "+31 123 456 789",
"mobileNumber": "+31 612 345 678",
"photoSocial": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Placeholder_female_superhero_c.png/203px-Placeholder_female_superhero_c.png",
"photoOfficial": "https://upload.wikimedia.org/wikipedia/commons/6/66/Johannes_Vermeer_%281632-1675%29_-_The_Girl_With_The_Pearl_Earring_%281665%29.jpg",
"gender": "f",
"titlePrefix": "drs",
"titleSuffix": "BSc",
"office": "string",
"address": 
{
    "addressType": "string",
    "street": "Moreelsepark",
    "streetNumber": "48",
    "additional": 
[
    {
        "language": "en-GB",
        "value": "On the other side of the road"
    }
],
"postalCode": "3511 EP",
"city": "Utrecht",
"countryCode": 
{
    "iso3166-1-alpha2": "NL",
    "iso3166-1-alpha3": "NLD",
    "iso3166-2": "BQ-BO",
    "iso3166-3": "ANHH"
},
"geolocation": 
    {
        "latitude": 52.089123,
        "longitude": 5.113337
    },
    "ext": { }
},
"ICEName": "Janne",
"ICEPhoneNumber": "+31 623 456 789",
"ICERelation": "partner",
"languageOfChoice": 
[
    "nl-NL"
],
"otherCodes": 
[
    {
        "codeType": "nationalIdentityNumber",
        "code": "00000"
    }
],
"assignedNeeds": 
[
{
    "code": "string",
    "description": 
[
            {
                "language": "en-GB",
                "value": "Extra time for Math tests shown in a percentile of the overall time of a test"
            }
        ],
        "startDateTime": "2025-05-30T20:00:00+01:00",
        "endDateTime": "2025-07-30T20:00:00+01:00"
    }
],
"consumers": 
[
        {
            "consumerKey": "x-test-consumer",
            "additional": "custom",
            "attributes": "here"
        }
    ],
    "ext": { }
}
```

If not all returned information is required or desired by the client. the fields query parameter can be used to reduce the information returned by the server:  
`GET persons/me?fields=(personId,affiliations,assignedNeeds(code))` will return all required fields, the affiliations and the assignedNeeds object with its code field. This limits the amount of data being shared:

```
{
    "personId": "123e4567-e89b-12d3-a456-426614174000",
    "primaryCode": 
{
    "codeType": "identifier",
    "code": "1234qwe12"
},
"givenName": "Martina",
"surname": "Damme",
"displayName": "Maartje van Damme",
"activeEnrollment": false,
"affiliations": 
[
    "student"
],
"mail": "vandamme.mcw@universiteitvanharderwijk.nl",
"assignedNeeds": 
[ {
    "code": "string"
} ],
"consumers": 
[ {
    "consumerKey": "x-test-consumer",
    "additional": "custom",
    "attributes": "here"
} ],
    "ext": { }
}
```
