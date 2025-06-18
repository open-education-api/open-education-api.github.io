# Data Minimization and Security
The API follows the principle of data minimization, a key privacy requirement, ensuring that only the minimum necessary (personal) data is shared with each API consumer. This approach protects sensitive information.

# Server-Controlled Access Enforcement
All data access is centrally controlled and enforced by the server. This means:
•	The server always retains full authority over what data is exposed.
•	Access to data is explicitly authorized and scoped per consumer (i.e., per client or integration).
•	Clients cannot bypass security policies or fetch unauthorized data, even if they attempt to manipulate query parameters or headers.

Most of the education offering data that is available via the API is public data, but the server is responsible for a correct implementation of the required security levels, that can support differentiated access for various types of consumers. It is advisable to standardise this based on the confidentiality and integrity levels of the specific data. The differentiation can for example be made between:
•	Internal services may have access to the most complete data sets (but even with internal services the privacy aspect needs to be taken into account).
•	Third-party applications may receive only a minimal required subset.
•	Public consumers may access only data that is classified as public.

# Data minimisation via Field Selection
Data minimization is a key principle where the API provides only the necessary data requested by the client. This reduces the risk of exposing sensitive information and aligns with privacy best practices.
To support both data minimization and performance optimization, the API can optionally allow clients to indicate which fields they are interested in. This mechanism can help reduce payload sizes and unnecessary data transmission.
This can be implemented and supported using the fields query parameter. Via this approach a client can express field preferences that the client wants the server to return in the response.

*Important:* This is a request hint, not a security feature. 
The server always determines the final response shape based on the client’s access rights. If a client requests unauthorized fields, they are silently omitted or replaced with appropriate redaction placeholders.