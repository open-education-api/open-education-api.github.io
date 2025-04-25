# Datamodel

![OOAPI objects and their relationships in a schema](https://open-education-api.github.io/specification/v5/OOAPIv5_model.png)


## Entity definitions

### Service
The service entity describes metadata relating to the OOAPI endpoint, such as who to contact about questions regarding this endpoint, links to documentation, etc.

### EducationSpecification
An EducationSpecification provides information about what a learner can learn from Educations derived from the EducationSpecification. It is also used to aggregate Educations from the supplying institution.

### Educations
Educations are templates for educational activities that can be offered. Educations come in three forms:
* Programs
* Courses
* Components

#### Program
A Program describes a coherent collection of courses leading to a certain outcome. Programs can be repeatedly offered to learners through ProgramOfferings.

#### Course
A Course describes an educational activity that can result in credits being awarded to the learning once the learner successfully completes an Offering of said Course. A Course is the smallest educational unit that a learner can pass or fail.

#### Component
A Component is a template for the most concrete learning activities the OOAPI describes. Examples include workgroups, lectures and tests.

### AcademicSession
An AcademicSession is a named period in time. AcademicSessions can be nested in multiple hierarchical trees. The highest possible level of such a tree should be an AcademicSession describing an (academic) year. AcademicSessions can have relations to Offerings to indicate that those Offerings take place within the period described by the AcademicSession.

### Offerings
Offerings are concrete instances of Educations, taking place at a certain time. Offerings come in three forms:
* ProgramOfferings
* CourseOfferings
* ComponentOfferings

#### ProgramOffering
A ProgramOffering is the concrete offering of a Program in time. Persons can be associated with a ProgramOffering through a ProgramOfferingAssociation.

#### CourseOffering
A CourseOffering is the concrete offering of a Course in time. Persons can be associated with a CourseOffering through a CourseOfferingAssociation.

#### ComponentOffering
A ComponentOffering is the concrete offering of a Component in time. Persons can be associated with a ComponentOffering through a ComponentOfferingAssociation.

### Associations
Associations are used to associate a person to an offering. The association data model contains information about the type of association. Associations come in three forms:
* ProgramOfferingAssociation
* CourseOfferingAssociation
* ComponentOfferingAssociation

#### ProgramOfferingAssociation
Signifies an association to a program offering. Can be used to associate a person.

#### CourseOfferingAssociation
Signifies an association to a course offering. Can be used to associate a person.

#### ComponentOfferingAssociation
Signifies an association to a component offering. Can be used to associate a person.

### Person
Describes a person, additionally emergency contact information can be provided.

### Organization
Describes an organization. An organization must be one of these types:
* root
* institute
* department
* faculty
* branch
* academy
* school

!> Note: root describes the educational institution itself

### Group
A group must be one of these types:
* learning group
* class
* team

Groups are related to organizations, persons and offerings. Groups of students that are related to an offering are typically used for rostering. The rostering application assigns students based on these groups. For example, class 1b will be assigned to the course offering on monday morning. Not all groups are related to an offering. A group of people can also be a team that is working on a task outside the OOAPI scope. These can be teams of students, but also teams of employees.

### Building
Describes a physical location that is currently used by an organization. 

### Room
The rooms API provides the part of a building where an activity can take place. Including detail information on the resources available, number of seats, etc. 

### NewsFeed
The news API provides news feeds and items regarding a specific subject.

### NewsItem
A single news item, can be associated to news feeds