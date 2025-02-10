# eduXchange

In this documentation of the eduxchange consumer object you will find
- required OOAPI resources and attributes
- agreements per eduxchange instance
- agreements per alliance
- student orientation consumer objects
- student registration consumer objects

## Versions

- last update: 10 Februari, 2025
- current alliances using eduxchange.NL:
  - ewuu
  - lde
- current alliances using eduxchange.EU
  - euroteq

We will use v2.x throughout this document to identify the requirements of consumer attributes for different versions. Below a short history of versions.

### Version 2.2
In 2025 we are, and will be, working on version 2.2 with new features for the dutch and european alliances. We expect to add more alliances and courses for professionals.

### Version 2.1
In 2023 and 2024 we were working on version 2.1 with new features for the dutch alliances. In this version also international alliances will be using eduxchange on eduxchange.eu, starting with EuroTeq. This also required changes.

### Version 2.0
Version 2.0 has been worked on in 2021 and 2022 and is the current live version on eduxchange.nl. This version was build for the dutch alliances EWUU and LDE.

Before version 2.0 we started eduXchange with the EWUU alliance.

# Required OOAPI resources

The subset of OOAPI Resources that is used in eduXchange is described in the picture below.
* The white resources are used in the orientation proces.
  * The dashed lines are resources that are only accessed by another resource through the expand parameter.
* The grey resources are used in the enrolment and grade transmission processes.

![OOAPI Resources used in eduXchange](../../_media/Student%20mobility%202025%20-%20OOAPI%20Resources.jpg "OOAPI Resources used in eduXchange")

To be compatible with eduXchange an institution needs to implement the following OOAPI resources. The endpoints currently in use are highlighted.

Orientation
* `GET /organizations`
* `GET /organizations?organizationType=root`
* GET /organizations/{organizationId}
* GET /organizations/{organizationId}/programs?programType=minor
* GET /organizations/{organizationId}/courses
* `GET /programs?programType=minor`
* `GET /programs/{programId}`
* `GET /programs/{programId}?expand=coordinator`
* `GET /programs/{programId}/courses`
* `GET /programs/{programId}/offerings`
* `GET /courses`
* `GET /courses/{courseId}`
* `GET /courses/{courseId}?expand=coordinator`
* `GET /courses/{courseId}/offerings`
* `GET /offerings/{offeringId}`
* `GET /offerings/{offeringId}?expand=academicSession`
* GET /academic-sessions
* GET /academic-sessions/{academicSessionId}
* GET /academic-sessions/{academicSessionId}/offerings
* GET /persons/{personId}

Enrolment
* `GET /persons/me`
* GET /persons/{personId}
* `POST /associations/external/me`
* `GET /associations/{associationId}`
* `PATCH /associations/{associationId}`

!> For `/organizations` the `organizationType=root` parameter must be supported and for all calls returning programs the `programType=minor` parameter will be set and must be supported.

!> To select educational information meant for eduXchange, eduXchange will always append the query parameter `consumer=eduxchange` to every call. To select information meant for a particular alliance, eduXchange can append an additional parameter `alliances.name=ALLIANCE_NAME` for an alliance.

To be compatible with the [eduXchange catalogue website](https://www.eduxchange.nl), an implementation needs to implement the eduXchange consumer object and query parameter for three different kind of objects.
* programs & courses
* offerings
* persons

## required ooapi attributes

These are the required ooapi attributes per resource.
|resource|required attributes|
|---|---|
|/organizations <br/>/organizations?organizationType=root|organizationId <br/>primaryCode <br/>organizationType <br/>name <br/>shortName <br/>consumers.consumerKey:eduxchange <br/>consumers.alliances[x].name:ALLIANCE_NAME|
|/programs?programType=minor <br/>/programs/{programId} | programId <br/>programType (=minor) <br/>primaryCode <br/>name <br/>abbreviation <br/>description <br/>teachingLanguage <br/>level <br/>studyLoad <br/>consumers.consumerKey:eduxchange <br/>consumers.alliances[x].name:ALLIANCE_NAME |
|/programs/{programId}/courses <br/>/courses <br/>/courses/{courseId} | courseId <br/>primaryCode <br/>name <br/>abbreviation <br/>description <br/>teachingLanguage <br/>level <br/>studyLoad <br/>consumers.consumerKey:eduxchange <br/>consumers.alliances[x].name:ALLIANCE_NAME |
|/programs/{programId}/offerings <br/>/courses/{courseId}/offerings <br/>/offerings/{offeringId} |offeringId <br/>primaryCode <br/>offeringType <br/>name <br/>description <br/>teachinglanguage <br/>resultExpected <br/>startDate <br/>endDate <br/>consumers.consumerKey:eduxchange <br/>consumers.alliances[x].name:ALLIANCE_NAME |

# Agreements per eduxchange instance

An instance is a frontend of eduxchange for a particular region. Currently there is eduxchange.NL for alliances in the Netherlands and eduxchange.EU for alliances in Europe.

It is recommended that alliances within a region agree on certain aspects of eduxchange to give the students the best experience possible.

## eduxchange.NL

This instance is running version 2.1.

### Filters

Below are the filters, those `highlighted` are in use by the instance:

- `Search box`, free text search box
- `First application period`, selection of open courses or programs
- `Education type`, programs or courses selection
- `Academic year`, academic year selection
- `Starts in`, starting month selection
- `Institution`, offering institution selection
- `Location`, location where the offering takes place selection
- `Theme`, theme selection
- Level, level selection
- `Selection minor`, selection minor indication
- `Language`, language of the offering selection
- `Study load (ECTS)`, study load of programs or courses in ects selection
- Mode of study, mode of study selection
- Mode of delivery, mode of delivery selection

## eduxchange.EU

This instance is running version 2.1.

### Filters

Below are the filters, those `highlighted` are in use by the instance:

- `Search box`, free text search box
- `First application period`, selection of open courses or programs
- Education type, programs or courses selection
- `Academic year`, academic year selection
- `Starts in`, starting month selection
- `Institution`, offering institution selection
- Location, location where the offering takes place selection
- `Theme`, theme selection
- `Level`, level selection
- Selection minor, selection minor indication
- Language, language of the offering selection
- `Study load (ECTS)`, study load of programs or courses in ects selection
- Mode of study, mode of study selection
- `Mode of delivery`, mode of delivery selection

# Agreements per alliance

An alliance is a partnership between two or more institutions that agreed to exchange student information using eduxchange.

To refer to partners in an alliance a list of partner codes is specified.

Some attributes in OOAPI can have multiple values. It is recommended that all participants within an alliance agree on the use of these values. This results in an unambiguous list on the frontend for the students.

## EWUU Alliance 

### partner codes
* uu
* wur
* tue

## LDE Alliance 

### partner codes
* 21PE (Erasmus)
* 21PF (Delft)
* 21PB (Leiden)

### themes
Participants agreed to use croho themes in the theme attribute of the consumer object. These themes are specified by a number:
*  10: `"Interdisciplinary"`
*  11: `"Economics"`
*  12: `"Behaviour and society"`
*  13: `"Health care"`
*  14: `"Agriculture and natural environment"`
*  15: `"Nature"`
*  16: `"Educations"`
*  17: `"Law"`
*  18: `"Language and culture"`
*  19: `"Technology"`

## EuroTeq Alliance 
The additional parameter `alliances.name=euroteq` is effective.

### partner codes
* tue
* taltech
* dtu
* lx
* ctu
* tum
* technion
* epfl

### themes
Participants agreed to use these themes in the theme attribute of the consumer object.
* `"Architecture and Construction"`
* `"Business and Economics"`
* `"Chemical Engineering"`
* `"Chemistry and Biology"`
* `"Computer Science and ICT, Data, AI"`
* `"Electrical Engineering"`
* `"Entrepreneurship"`
* `"Food and Health Sciences, Medical engineering"`
* `"Languages and Culture"`
* `"Manufacturing and Processing"`
* `"Mathematics and Statistics"`
* `"Mechanical Engineering"`
* `"Physics and Energy"`
* `"Transport"`
* `"Other subject area"`

### modeOfDelivery

The mode of delivery the participants agreed to use differ from the standard modeOfDelivery options in OOAPI. Therefore these modeOfDelivery values need to be specified in the consumer attribute. 

Participants agreed to use:
* `"Online - at a specific time"`
* `"Online - time-independent"`
* `"Hybrid"`: EuroTeQ students attend online, local students attend on campus.
* `"Blended"`: course is largely online for all students, but there may be face-to-face elements that require travelling, for instance lab work or a final exam.

### level

For the level attribute of a course the participants agreed to use these standard OOAPI options that need to be specified in the consumer attribute:
- `"Bachelor"`
- `"Master"`
- `"Doctoral"`

# The student orientation consumer objects

The documentation below is essential for the orientation part.

## Eduxchange consumer object and query parameter for Programs and Courses

To be compatible with the [eduXchange catalogue website](https://www.eduxchange.nl), an implementation needs to implement the eduXchange consumer object and query parameter. See [specific consumers](consumers.md) for more information:

!> When a client requests programs or courses and the query parameter `consumer` is set to `eduxchange`, only Programs and Courses meant for eduxchange should be returned.

Also the eduxchange consumer object should be added to the array of consumer objects when returning Programs and Courses. The consumer object for eduXchange has the following attributes:

* `consumerKey`, should always have the value `"eduxchange"`
* `alliances`, an array with all the alliances this Program or Course is offered for. Each alliance is an object with the following attributes:

General attributes

  * `name` (v2.0): (required) the name of the alliance, allowed values are the current alliances using eduxchange, for example: `"ewuu"`, `"lde"` or `"euroteq"`
  * `theme` (v2.0, deprecated): the theme of the Program or Course within the alliance
  * `themes` (v2.1): an array of themes of the Program or Course within the alliance, `["theme 1", "theme 2"]`. If the themes attribute is present for a particular course or program, theme is ignored. If theme is avaiable, but themes is not, the theme attribute is used. If both are missing, the course or program has no themes.
  * `selection` (v2.0): boolean value (`true` or `false`) indicating whether this Program or Course is selective, e.g. whether student need to pass extra requirements before being allowed to enroll.
  * `type` (v2.0): a string indicating whether a Program or Course is broadening or deepening. Allowed values are: `"broadening"` and `"deepening"`.
  * `instructorNames` (v2.1): an array with names of all instructors, `["instructor name", "instructor name"]`
  * `contactHours` (v2.1): a float with the amount of contact hours, `3.5` for example.
  * `activities` (v2.1): a string that mentions the activities that take place in the course, `"lectures and practises"` for example.

Attributes regarding visibility and enrollment of different types of users. Please note, that there are three types of students. (1) Students from the alliance partner institutions,  (2) students from the own institution and (3) guest students from institutions outside the alliance.

  * `visibleForOwnStudents` (v2.0): a boolean value (`true` or `false`) indicating whether enrollment of a Program or Course should be visible for students of the offering institution. *Note: in the eduxchange frontend a higher level institution setting is set to indicate that programs and courses themselves are visible for own students.*
  * `enrollmentForOwnStudents` (v2.0): a string indicating which enrollments process should be followed for students of the offering institution. Allowed values are `"broker"` or `"url"`. This attribute is only used if `visibleForOwnStudents` is set to `true`. 
    * If `"url"` is chosen the attribute `enrollmentUrl` **in the consumer object of an offering** is mandatory.
  * `visibleForGuests` (v2.1): a boolean value (`true` or `false`) indicating whether enrollment of a Program or Course should be visible for students outside the partner institutions. *Note: in the eduxchange frontend a higher level institution setting is set to indicate that programs and courses themselves are visible for students outside the partner institutions.*
  * `enrollmentForGuests` (v2.1): a string indicating which enrollments process should be followed for students outside the partner institutions. Allowed values are `"broker"` or `"url"`. This attribute is only used if `visibleForGuests` is set to `true`. 
    * If `"url"` is chosen the attribute `enrollmentUrlForGuests` **in the consumer object of an offering** is mandatory.

Attributes regarding joint programs.

  * `jointPartnerCodes` (v2.1): an array of partners of the Program. This is used to identify the partners in case of a joint program. The agreed partner codes are used here. For example in the `lde` alliance: `["21PF", "21PB"]`.
  * `source` (v2.0): an optional object with a reference to the source of a Course or Program. In case of a joint program one of the institutions could act as overall coordinator and specifies the program and underlying courses. Underlying courses could be given at one of the other institutions. In this source object the course at the other institution can be specified. Use these attributes:
    * `shortName` (v2.0): the partner id of the institution to identify the source institution. An example for the `lde` alliance is: `"21PE"`
    * `primaryCode` (v2.0): a string value with the primaryCode of the course to identify the source course.
    * `uuid` (v2.0): the uuid of the course to reference the OOAPI endpoint of the source course.

Attributes regarding life long learning

  * `lifeLongLearning` (v2.2): an optional object that specifies information on life long learning (LLL) courses for professionals, next to the regular student courses. Courses marked as LLL are not visble for students, instead those are made visible for professionals.
    * `isLifeLongLearningEnabled` (v2.2): a boolean value (`true` or `false`) that specifies if the course is a LLL course.
    * `hasMicrocredential` (v2.2): a boolean value (`true` or `false`) that specifies if the course is rewarded with a microcredential.
    * `isStackable` (v2.2): a boolean value (`true` or `false`) that specifies if the microcredential is stackable.

### Example

This is an example of the consumer object for eduXchange. The example reflects the default behaviour for visibility of the `ewuu` and `lde` alliances. The `ewuu` courses are not visible for students from the offering institution. The `lde` minors are visible for student from the offering institution. These students can enroll through the `broker`. The example also reflects new attributes introduced in v2.1 and v2.2 for `euroteq`.

```json
    {
      "consumers": [
        {
          "consumerKey": "eduxchange",
          "alliances": [
            {
              "name": "ewuu",
              "theme": "Information and Communication Technologies",
              "selection": false,
              "type": "broadening",
              "visibleForOwnStudents": false
            },
            {
              "name": "lde",
              "theme": "Information and Communication Technologies",
              "selection": false,
              "type": "deepening",
              "visibleForOwnStudents": true,
              "enrollmentForOwnStudents": "broker",
              "source": {
                "shortName": "21PE",
                "primaryCode": "WB-MI-168",
                "uuid": "123e4567-e89b-12d3-a456-123514174000"
              }
            },
            {
              "name": "euroteq",
              "theme": "Computer Science and ICT, Data, AI",
              "instructorNames": ["John Smith"],
              "modeOfDelivery": "Hybrid",
              "contactHours": 3.5,
              "activities": "lectures and practises",
              "lifeLongLearning": {
                "isLifeLongLearningEnabled": "true",
                "hasMicrocredential": "true",
                "isStackable": "false"
              }
            }
          ]
        }
      ]
    }
```

## Eduxchange consumer object for Offerings

The outline of the consumer object for offerings is the same as specified above for the programs and courses. There should always be a `consumerKey` attribute and an `alliances` array in the consumer object.

This consumer object is used to specify the `enrollmentUrl` and `enrollmentUrlForGuests` per offering. These attributes are associated with the corresponding attributes in the consumer object of the program or course.

  * `enrollmentUrl` (v2.0): a string formatted as an URL to which own students will be redirected if `enrollmentForOwnStudents` **in the program/course consumer object** is set to `"url"`.
  * `enrollmentUrlForGuests` (v2.1): a string formatted as an URL to which guest students will be redirected if `enrollmentForGuests` **in the program/course consumer object** is set to `"url"`.

In addition the `enrollStartTime` and `enrollEndTime` of an offering can be added. This time is more specific then the enrollStartDate and enrollEndDate of an offering. This makes it possible to start on enrollStartDate at enrollStartTime and end at enrollEndDate at enrollEndTime.

  * `enrollStartTime` (v2.0): the time of the start of the enrollment for the offering, for example "13:00". The default is 00:00.
  * `enrollEndTime` (v2.0): the time of the end of the enrollment for the offering, for example "20:00". The default is 23:59.
  * `dateComment` (v2.1): a string with additional date information, for example `"The course takes place on monday morning"`

### Example

This is an example of the consumer object for eduXchange offerings. 

```json
{
  "consumers": [
    {
      "consumerKey": "eduxchange",
      "alliances": [
        {
          "name": "ewuu",
          "enrollmentUrl": "https://www.my-url.nl/",
          "enrollStartTime": "13:00",
          "enrollEndTime": "20:00",
          "dateComment": "This time is in ECT and the course takes place on Monday morning."
        }
      ]
    }
  ]
}
```

# The student registration consumer objects

The documentation below is essential for the registration part.

## Specific attributes that are required in the Person object

!> For the person object that is requested either through  `GET /persons/me` or `GET /persons/{personId}`. The object also needt to enclude a studielinkNumber to facilitate deduplication. This is achieved by adding an extra object in the otherCodes array of Person:

```json
{
  "personId": "123e4567-e89b-12d3-a456-426614174000",
  "primaryCode": {
  "codeType": "identifier",
  "code": "s123456"
},
...
...
"otherCodes": [
	{
      "codeType": "studielinkNumber",
      "code": "12345678"
	}
],
"consumers": [
  {
    "consumerKey": "eduxchange",
    "enrollments": [
      {
        "crohoCreboCode": "34401",
        "name": "B Bedrijfseconomie",
        "phase": "bachelor",
        "modeOfStudy": "full-time",
        "startDate": "2020-09-01",
        "endDate": "2021-08-31"
      }
    ],
    "institutionBRINCode": "11AA"
  }
],
"ext": { }
}
```

!> For the home institutions to get a full overview of the course a student is trying to enroll the `POST /associations/external/me` needs to have the courseOffering or programOffering expanded.

## Explanation of rules governing the association state

* pending (proces is waiting on the status of the students home institution)
* associated (the student is enrolled in the learning activity) 
* canceled (by student) 
* denied (either learning activity is stopped or student is not allowed)
* queued (student is put on a waiting list)

## Explanation of rules governing the association remoteState

* pending (proces is waiting on the status of the students home institution)
* associated (the student is enrolled in the learning activity) 
* canceled (by student)
* denied (student is not allowed)
* queued (student is put on a waiting list)

## Eduxchange consumer object for Persons

To be compatible with the registering process of the `broker` after the 'register' button is pressed in the eduxchange frontend, an implementation needs to implement the following consumer object and attributes on the Persons object. 

* `consumerKey` (v2.0), should always have the value `"eduxchange"`
* `enrollments` (v2.0), an array with all the CROHO enrollments for this person. Each enrollment is an object with the following attributes:
  * `crohoCreboCode` (v2.0): (required) the crohoCreboCode for this program. This should be a five character string, e.g. "34401".
  * `name` (v2.0): (required) the name of the program this enrollment is for.
  * `phase` (v2.0): the phase of the program for this enrollment. Allowed values are `"bachelor"` or `"master"`.
  * `modeOfStudy` (v2.0): the modeOfStudy of the program for this enrollment. Allowed values are `"full-time"`, `"part-time"`, `"dual training"` or `"self-paced"`.
  * `startDate` (v2.0): the start date for this enrollment. Should be a string formatted as an RFC3099 full-date.
  * `endDate` (v2.0): end start date for this enrollment. Should be a string formatted as an RFC3099 full-date.
* `institutionBRINCode` (v2.0), the BRIN code of the institution. Should consist of two digits and two capital letters.

### Example

```json
    {
      "consumers": [
        {
          "consumerKey": "eduxchange",
          "enrollments": [
            {
              "crohoCreboCode": "34401",
              "name": "B Bedrijfseconomie",
              "phase": "bachelor",
              "modeOfStudy": "full-time",
              "startDate": "2020-09-01",
              "endDate": "2021-08-31"
            }
          ],
          "institutionBRINCode": "11AA"
        }
      ]
    }
```

## Changes since OOAPI v4

In OOAPI version 5.0 the following changes were made that are relevant for eduXchange. Some of the highlights:

1. Some attributes were added to the Program object.
2. Some attributes were added to the Course object.
3. Some attributes were added to the Association object or updated. For example: `state` has been expanded with a `queued` value and the `result` object has been expanded with a new attribute `pass`.
4. Some of the attributes we specified in the `ext` object or the nested `targetGroup` object have been moved to the consumer object.
5. Some of the attributes we specified in the `ext` object or the nested `targetGroup` object have been moved to the regular top level objects. For example `enrollmentStartDate` in the `ext` object of an offering has been moved to the regular offering object and been renamed to `enrollStartDate`.
6. New calls for enrolling students and updating enrollment status have been added (- `POST /associations/external/me` and `PATCH /associations/{associationId}`).
7. AcademicSessions now have a type `academicSessionType`.

See the CHANGELOG for more information.
