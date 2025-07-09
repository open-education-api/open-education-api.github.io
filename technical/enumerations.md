# Enumerations
Enumerations are used extensively in the standard as they provide a controlled set of values that enable consistency, clarity, and reusability in the use of the standard. All enumerations in the standard are defined as extensible, although this seems contradictory to the goal of standardisation, this has been done for a specific reason:  

## Extensible enumerations disclaimer
While we prefer to use clearly defined enumerations in the specification for standardization purposes, we do support extensible enumerations to minimize the need for major releases when enumeration changes are required. This support provides flexibility to users of the specification but does require additional agreements between parties when using such extensions. This in turn reduces the OOAPI out-of-the-box usage. Therefore, the use of extensible enumerations should be limited. We strongly recommend using the predefined enumeration list by default.
 
## Extensible enumerations based on external vocabulary disclaimer
For enumerations that use an external vocabulary, we strongly discourage extending the enumeration and recommend using only the values defined by the referenced external vocabulary. The rationale for this recommendation: the use of extensible enumerations would be conflicting with adherence to the original vocabulary and reduce interoperability. However, support for extensible enumerations is supported in those cases where an addition is based on planned extensions to the external vocabulary that are not yet officially supported.
