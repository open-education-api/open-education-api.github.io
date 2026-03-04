import{n as r,o as e}from"./entry.client-CH-VnRSd.js";const o=""+new URL("ooapi_v6-C47QEScn.png",import.meta.url).href,d="OpenAPI (fka Swagger) specification for the Open Education API.",c=[],a={lastModifiedTime:"2026-03-03T23:38:10.000Z"},l="pages/index.mdx";function i(s){const n={code:"code",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"OpenAPI (fka Swagger) specification for the Open Education API."}),`
`,e.jsxs(n.p,{children:["The specification can be downloaded as a whole in ",e.jsx("a",{href:"./ooapi.yaml",download:!0,children:"yaml"}),`
and in `,e.jsx("a",{href:"./ooapi.json",download:!0,children:"json"})]}),`
`,e.jsxs("figure",{children:[e.jsx("a",{target:"_blank",href:"../source/ooapi_v6.png",children:e.jsx(n.img,{src:o,alt:"OOAPI information model that feeds OOAPI specification",width:"100%",className:"img-responsive"})}),e.jsx("figcaption",{children:" OOAPI information model that feeds OOAPI specification (click to enlage)"})]}),`
`,e.jsx(n.p,{children:`The model provides an overview of the educational domain that is modelled and
forms the basis of the OOAPI. The overarching educational concept is not exposed
through API endpoints. Instead, the educational specification defines four base
objects: programme, course, learning component, and test component, each with
its own endpoint.`}),`
`,e.jsx(n.p,{children:`These base objects can be used to realise offerings. There is, however, no
dedicated offering endpoint. Offerings are represented through four base
types: programme offering, course offering, learning component offering, and
test component offering.`}),`
`,e.jsx(n.p,{children:`Relations between an offering and a person, such as enrolment, are realised
through association endpoints. These endpoints define the different types of
associations that can exist between offerings and persons. Other objects shown
in the model represent groups and group memberships of a person.`}),`
`,e.jsxs(n.p,{children:["The original file for this model can be found ",e.jsx("a",{target:"_blank",href:"ooapi_v6_latest.drawio",children:"here"})]}),`
`,e.jsx(n.p,{children:"The programme relations object is not found as a separate endpoint but relations between programmes can be found within the programme endpoint by expanding that endpoint."}),`
`,e.jsx(n.p,{children:"Definitions for all relationships in the model:"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Entities"}),e.jsx(n.th,{children:"Relationship"}),e.jsx(n.th,{children:"Cardinality"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Learning Outcomes"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"LearningOutcome ↔ Programme, Course, LearningComponent, TestComponent"}),e.jsx(n.td,{children:"achieves"}),e.jsx(n.td,{children:"* : *"}),e.jsx(n.td,{children:"Educational entities are designed to achieve specific learning outcomes that define the knowledge, skills, and competencies students will acquire"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"LearningOutcome ↔ LearningOutcome"}),e.jsx(n.td,{children:"has parents"}),e.jsx(n.td,{children:"* : *"}),e.jsx(n.td,{children:"Learning outcomes can be organised hierarchically, where specific outcomes are grouped under broader outcomes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Organisational Structure"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Organisation → Organisation"}),e.jsx(n.td,{children:"has parent"}),e.jsx(n.td,{children:"* : 0..1"}),e.jsx(n.td,{children:"Organisations can be structured hierarchically (departments → faculties → institutions), creating a tree structure"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Organisation ↔ LearningOutcome, Programme, Course, LearningComponent, TestComponent, ProgrammeOffering, CourseOffering, LearningComponentOffering, TestComponentOffering, Group, AcademicSession"}),e.jsx(n.td,{children:"provides/manages/defines"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Organisations own and administer educational entities, manage operational delivery of offerings, oversee groups, and define academic sessions"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Educational Structure"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Programme → Programme"}),e.jsx(n.td,{children:"has parent"}),e.jsx(n.td,{children:"* : 0..1"}),e.jsx(n.td,{children:"Programmes can be nested (specializations, tracks, minors within main programmes)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Programme ↔ Course"}),e.jsx(n.td,{children:"composed of"}),e.jsx(n.td,{children:"* : *"}),e.jsx(n.td,{children:"Courses can be included in multiple programmes (core in some, electives in others)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Course → LearningComponent, TestComponent"}),e.jsx(n.td,{children:"composed of"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Components are the constituent parts of a course - the building blocks (lectures, tutorials, exams) that together form the complete course"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Educational Offerings"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Programme → ProgrammeOffering"}),e.jsx(n.td,{children:"offered as"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"A programme can have multiple offerings for different cohorts or start dates"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Course → CourseOffering"}),e.jsx(n.td,{children:"offered as"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"A course can have multiple offerings for different times, locations, or delivery modes"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"LearningComponent → LearningComponentOffering"}),e.jsx(n.td,{children:"offered as"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"A component can have multiple scheduled instances"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TestComponent → TestComponentOffering"}),e.jsx(n.td,{children:"offered as"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"A test can have multiple scheduled exam sessions"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Offering Relationships"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"ProgrammeOffering ↔ CourseOffering"}),e.jsx(n.td,{children:"includes"}),e.jsx(n.td,{children:"* : *"}),e.jsx(n.td,{children:"Course offerings are part of programme offerings, indicating which courses are being delivered within that specific programme instance"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"CourseOffering ↔ LearningComponentOffering, TestComponentOffering"}),e.jsx(n.td,{children:"includes"}),e.jsx(n.td,{children:"* : *"}),e.jsx(n.td,{children:"Component offerings are the scheduled instances that together deliver a course offering"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Scheduling & Location"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"AcademicSession → ProgrammeOffering, CourseOffering, LearningComponentOffering, TestComponentOffering"}),e.jsx(n.td,{children:"scheduled in"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Each offering occurs within a specific academic session defining its temporal boundaries"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"AcademicSession → AcademicSession"}),e.jsx(n.td,{children:"has parent"}),e.jsx(n.td,{children:"* : 0..1"}),e.jsx(n.td,{children:"Academic sessions can be nested (quarters within semesters, weeks within terms)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"LearningComponentOffering, TestComponentOffering → Room"}),e.jsx(n.td,{children:"takes place in"}),e.jsx(n.td,{children:"* : 0..1"}),e.jsx(n.td,{children:"Each component offering is assigned to a specific physical, virtual or no room"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Room → Building"}),e.jsx(n.td,{children:"located in"}),e.jsx(n.td,{children:"* : 1"}),e.jsx(n.td,{children:"Each room exists within exactly one building"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Enrolments (Associations)"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Person → ProgrammeOfferingAssociation, CourseOfferingAssociation, LearningComponentOfferingAssociation, TestComponentOfferingAssociation"}),e.jsx(n.td,{children:"enrolled via"}),e.jsx(n.td,{children:"1 : 1"}),e.jsx(n.td,{children:"Person's enrolment/participation in offerings at various levels (programme, course, component, test) with role and status"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"ProgrammeOffering → ProgrammeOfferingAssociation"}),e.jsx(n.td,{children:"has enrolments"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Each ProgrammeOffering can have multiple enrolled persons"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"CourseOffering → CourseOfferingAssociation"}),e.jsx(n.td,{children:"has enrolments"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Each CourseOffering can have multiple enrolled persons"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"LearningComponentOffering → LearningComponentOfferingAssociation"}),e.jsx(n.td,{children:"has enrolments"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Each LearningComponentOffering can have multiple enrolled persons"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"TestComponentOffering → TestComponentOfferingAssociation"}),e.jsx(n.td,{children:"has enrolments"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Each TestComponentOffering can have multiple enrolled persons"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Results"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"ProgrammeOfferingAssociation, CourseOfferingAssociation, LearningComponentOfferingAssociation, TestComponentOfferingAssociation, TestComponentOfferingAssociationAttempt → Result"}),e.jsx(n.td,{children:"has"}),e.jsx(n.td,{children:"1 : 0..1"}),e.jsx(n.td,{children:"Associations may have results representing grades or completion status (optional for active enrolments)"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"Groups & Memberships"})}),e.jsx(n.td,{}),e.jsx(n.td,{}),e.jsx(n.td,{})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Group → AcademicSession"}),e.jsx(n.td,{children:"active during"}),e.jsx(n.td,{children:"1 : 1"}),e.jsx(n.td,{children:"Groups are associated with specific academic sessions indicating when they are active"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Group ↔ ProgrammeOffering, CourseOffering, LearningComponentOffering, TestComponentOffering"}),e.jsx(n.td,{children:"related to"}),e.jsx(n.td,{children:"* : *"}),e.jsx(n.td,{children:"Groups can be related to offerings"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Person → Membership"}),e.jsx(n.td,{children:"has"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"A membership represents one person's membership of a group"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Group → Membership"}),e.jsx(n.td,{children:"contains"}),e.jsx(n.td,{children:"1 : *"}),e.jsx(n.td,{children:"Each group can have multiple members"})]})]})]}),`
`,e.jsx(n.p,{children:"Notes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Cardinality notation: ",e.jsx(n.code,{inline:"true",children:"Source : Target"})," where ",e.jsx(n.code,{inline:"true",children:"*"})," = many (0 or more), ",e.jsx(n.code,{inline:"true",children:"1"})," = exactly one, ",e.jsx(n.code,{inline:"true",children:"0..1"})," = zero or one"]}),`
`,e.jsx(n.li,{children:"Bidirectional relationships (↔) indicate many-to-many relationships that can be traversed in both directions"}),`
`,e.jsx(n.li,{children:"Some relationships are implemented through junction entities (e.g., Associations for enrolments)"}),`
`,e.jsx(n.li,{children:'The "offered as" relationships connect abstract educational entities to their concrete scheduled instances'}),`
`,e.jsx(n.li,{children:"Organisation acts as a central entity providing and managing most other entities in the system"}),`
`]}),`
`,e.jsxs(n.p,{children:["Information about earlier meetings and presentations can be found ",e.jsx("a",{target:"_blank",href:"https://github.com/open-education-api/notulen",children:"here"})]}),`
`,e.jsxs(n.p,{children:["Information on the EDU-API model that was also used for this api is shown ",e.jsx("a",{target:"_blank",href:"eduapi.png",children:"here"})]}),`
`,e.jsx(n.p,{children:"The following paths are described in the model:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"/ (The service endpoint)"}),`
`,e.jsx(n.li,{children:"/academic-sessions"}),`
`,e.jsx(n.li,{children:"/academic-sessions/{academicSessionId}"}),`
`,e.jsx(n.li,{children:"/academic-sessions/{academicSessionId}/course-offerings"}),`
`,e.jsx(n.li,{children:"/academic-sessions/{academicSessionId}/learning-component-offerings"}),`
`,e.jsx(n.li,{children:"/academic-sessions/{academicSessionId}/programme-offerings"}),`
`,e.jsx(n.li,{children:"/academic-sessions/{academicSessionId}/test-component-offerings"}),`
`,e.jsx(n.li,{children:"/buildings"}),`
`,e.jsx(n.li,{children:"/buildings/{buildingId}"}),`
`,e.jsx(n.li,{children:"/buildings/{buildingId}/rooms"}),`
`,e.jsx(n.li,{children:"/course-offering-associations/{courseOfferingAssociationId}"}),`
`,e.jsx(n.li,{children:"/course-offering-associations/external/me"}),`
`,e.jsx(n.li,{children:"/course-offerings/{courseOfferingId}"}),`
`,e.jsx(n.li,{children:"/course-offerings/{courseOfferingId}/course-offering-associations"}),`
`,e.jsx(n.li,{children:"/course-offerings/{courseOfferingId}/groups"}),`
`,e.jsx(n.li,{children:"/courses"}),`
`,e.jsx(n.li,{children:"/courses/{courseId}"}),`
`,e.jsx(n.li,{children:"/courses/{courseId}/course-offerings"}),`
`,e.jsx(n.li,{children:"/courses/{courseId}/learning-component-offerings"}),`
`,e.jsx(n.li,{children:"/courses/{courseId}/learning-components"}),`
`,e.jsx(n.li,{children:"/courses/{courseId}/test-component-offerings"}),`
`,e.jsx(n.li,{children:"/courses/{courseId}/test-components"}),`
`,e.jsx(n.li,{children:"/documents/{documentId}"}),`
`,e.jsx(n.li,{children:"/groups"}),`
`,e.jsx(n.li,{children:"/groups/{groupId}"}),`
`,e.jsx(n.li,{children:"/groups/{groupId}/memberships"}),`
`,e.jsx(n.li,{children:"/groups/{groupId}/memberships/{personId}"}),`
`,e.jsx(n.li,{children:"/learning-component-offering-associations/{learningComponentOfferingAssociationId}"}),`
`,e.jsx(n.li,{children:"/learning-component-offerings/{learningComponentOfferingId}"}),`
`,e.jsx(n.li,{children:"/learning-component-offerings/{learningComponentOfferingId}/groups"}),`
`,e.jsx(n.li,{children:"/learning-components/{learningComponentId}"}),`
`,e.jsx(n.li,{children:"/learning-components/{learningComponentId}/learning-component-offerings"}),`
`,e.jsx(n.li,{children:"/learning-outcomes"}),`
`,e.jsx(n.li,{children:"/learning-outcomes/{learningOutcomeId}"}),`
`,e.jsx(n.li,{children:"/organisations"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/course-offerings"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/courses"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/groups"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/learning-component-offerings"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/learning-components"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/programme-offerings"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/programmes"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/test-component-offerings"}),`
`,e.jsx(n.li,{children:"/organisations/{organisationId}/test-components"}),`
`,e.jsx(n.li,{children:"/persons"}),`
`,e.jsx(n.li,{children:"/persons/{personId}"}),`
`,e.jsx(n.li,{children:"/persons/{personId}/course-offering-associations"}),`
`,e.jsx(n.li,{children:"/persons/{personId}/learning-component-offering-associations"}),`
`,e.jsx(n.li,{children:"/persons/{personId}/programme-offering-associations"}),`
`,e.jsx(n.li,{children:"/persons/{personId}/test-component-offering-associations"}),`
`,e.jsx(n.li,{children:"/persons/me"}),`
`,e.jsx(n.li,{children:"/programme-offering-associations/{programmeOfferingAssociationId}"}),`
`,e.jsx(n.li,{children:"/programme-offering-associations/external/me"}),`
`,e.jsx(n.li,{children:"/programme-offerings/{programmeOfferingId}"}),`
`,e.jsx(n.li,{children:"/programme-offerings/{programmeOfferingId}/groups"}),`
`,e.jsx(n.li,{children:"/programme-offerings/{programmeOfferingId}/programme-offering-associations"}),`
`,e.jsx(n.li,{children:"/programmes"}),`
`,e.jsx(n.li,{children:"/programmes/{programmeId}"}),`
`,e.jsx(n.li,{children:"/programmes/{programmeId}/courses"}),`
`,e.jsx(n.li,{children:"/programmes/{programmeId}/programme-offerings"}),`
`,e.jsx(n.li,{children:"/programmes/{programmeId}/programmes"}),`
`,e.jsx(n.li,{children:"/rooms"}),`
`,e.jsx(n.li,{children:"/rooms/{roomId}"}),`
`,e.jsx(n.li,{children:"/test-component-offering-associations/{testComponentOfferingAssociationId}"}),`
`,e.jsx(n.li,{children:"/test-component-offerings/{testComponentOfferingId}"}),`
`,e.jsx(n.li,{children:"/test-component-offerings/{testComponentOfferingId}/groups"}),`
`,e.jsx(n.li,{children:"/test-components/{testComponentId}"}),`
`,e.jsx(n.li,{children:"/test-components/{testComponentId}/test-component-offerings"}),`
`]})]})}function h(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as __filepath,h as default,d as excerpt,a as frontmatter,c as tableOfContents};
//# sourceMappingURL=index-D0LPwCAQ.js.map
