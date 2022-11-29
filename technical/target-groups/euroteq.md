# EuroTeQ targetGroup definition

## Required requests

To be compatible with ooapi V4 and eduXchange v1 an institution of the EuroTeQ alliance needs to implement the following requests:

* `GET /organizations`
* `GET /organizations?type=root`
* `GET /organizations/{organizationId}`
* `GET /organizations/{organizationId}/courses`
* `GET /courses`
* `GET /courses/{courseId}`
* `GET /courses/{courseId}/offerings`
* `GET /offerings/{offeringId}`
* `GET /academic-sessions`
* `GET /academic-sessions/{academicSessionId}`
* `GET /academic-sessions/{academicSessionId}/offerings`

## Parameters used

!> The general `pageSize` parameter must be supported.

!> For `/organizations` the `type=root` parameter must be supported.

!> For `/course/{ID}` the `expand=coordinator` and `expand=organization` paramaters must be supported.

!> To select educational information meant for eduXchange, eduXchange will always append the query parameter `targetgroup=euroteq` to every call.

## Extension objects

Extension objects are used to supply the eduXchange frontend with additional information which is not specified in the OOAPI V4 specification.

### Course extension
When eduXchange requests courses and the query parameter `targetgroup` is set to `euroteq`, only courses meant for euroteq should be returned.

Also the targetgroup extension object should be added to the course object. The ext object for eduXchange courses has the following attributes:

* `targetGroup` an array of targetgroups for all the alliances this course is offered for. Each targetGroup is an object with the following attributes:
  * `name`: (required) the name of the alliance, allowed values are `"euroteq"`
  * `theme`: the theme of the course within the alliance, allowed values are:
    * `"Architecture and Construction"`
    * `"Business and Economics"`
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
  * `instructorNames`: an array with names of all instructors, `["instructor name", "instructor name"]`
  * `contacHours`: a float with the amount of contact hours, `3.5` for example.
  * `modeOfDelivery`: the mode of delivery specific for this alliance, allowed values are:
    * `"Online - at a specific time"`
    * `"Online - time-independent"`
    * `"Hybrid"`: EuroTeQ students attend online, local students attend on campus.
    * `"Blended"`: course is largely online for all students, but there may be face-to-face elements that require travelling, for instance lab work or a final exam.
  * `activities`: a string that mentions the activities that take place in the course, `"lectures and practises"` for example.

**Example**

This is an example of the extension object for eduXchange courses. 

```json
{
	"ext": {
		"targetGroup": [{
			"name": "euroteq",
			"theme": "Computer Science and ICT, Data, AI",
			"instructorNames": ["John Smith"],
			"contactHours": 3.5,
			"modeOfDelivery": "Hybrid",
			"activities": "lectures and practises"
		}]
	}
}
```

### Offering extension
The targetgroup extension object should also be added to the offering object. The ext object for eduXchange offerings has the following attributes:

* `enrollmentStartDate`: the date of the start of the enrollment for the offering, `"2022-11-03"`
* `enrollmentEndDate`: the date of the end of the enrollment for the offering, `"2022-11-03"`
* `enrollmentUrl`: an `URI` to an enrollment page of the institution when the SURF edubroker is not in use.
* `notificationUrl`: an `URI` to a notification page of the institution that is shown when the current date is before the enrollmentStartDate.
* `dateComment`: a string with additional date information, for example `"The course takes place on monday morning"`

**Example**

This is an example of the extension object for eduXchange offerings. 

```json
{
	"ext": {
		"enrollmentStartDate": "2022-11-3",
		"enrollmentEndDate": "2022-11-4",
		"enrollmentUrl": "https://my.institution.org/my-enrollment",
		"notificationUrl": "https://my.institution.org/my-notification",
		"dateComment": "This date is in ECT and the course takes place on Monday morning."
	}
}
```
