import{p as s,j as e}from"./entry.client-Dk1XTHAW.js";const t=`This document describes the procedures used to maintain the Open Education API
(OEAPI).`,a=[{depth:1,text:"OEAPI Procedures",id:"oeapi-procedures",children:[{depth:2,text:"Change Procedure",id:"change-procedure",children:[{depth:3,text:"Developer steps",id:"developer-steps"},{depth:3,text:"Branching rules",id:"branching-rules"}]},{depth:2,text:"Update Documentation (Release)",id:"update-documentation-release",children:[{depth:3,text:"Steps",id:"steps"}]},{depth:2,text:"Release Procedure (new major/minor)",id:"release-procedure-new-majorminor"},{depth:2,text:"Release Candidate Procedure",id:"release-candidate-procedure"},{depth:2,text:"Finalise Release",id:"finalise-release"}]}],d={lastModifiedTime:"2026-03-17T10:52:01.000Z"},c="maintenance/procedures.mdx";function i(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"oeapi-procedures",children:"OEAPI Procedures"}),`
`,e.jsx(n.p,{children:`This document describes the procedures used to maintain the Open Education API
(OEAPI).`}),`
`,e.jsx(n.h2,{id:"change-procedure",children:"Change Procedure"}),`
`,e.jsxs(n.p,{children:[`For the overall change management process, see
`,e.jsx(n.a,{href:"https://openonderwijsapi.nl/v6.0/contributing/specification/change-management.md",children:"Change management"}),"."]}),`
`,e.jsx(n.h3,{id:"developer-steps",children:"Developer steps"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Identify the target version for the change.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{inline:"true",children:"main"})," if the change is intended for the next upcoming version."]}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),` if the change is intended as a fix for an existing
published version.`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Create a working branch from the correct target branch.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Branch from ",e.jsx(n.code,{inline:"true",children:"main"})," for changes to the next upcoming version."]}),`
`,e.jsxs(n.li,{children:["Branch from ",e.jsx(n.code,{inline:"true",children:"release/X.Y"})," for fixes to an existing published version."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Implement the change in the working branch."}),`
`,e.jsxs(n.li,{children:["Create a pull request to the correct target branch.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Create a pull request to ",e.jsx(n.code,{inline:"true",children:"main"})," if the branch was created from ",e.jsx(n.code,{inline:"true",children:"main"}),"."]}),`
`,e.jsxs(n.li,{children:["Create a pull request to ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),` if the branch was created from
`,e.jsx(n.code,{inline:"true",children:"release/X.Y"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"Complete the review process and address any review comments."}),`
`,e.jsx(n.li,{children:"Merge the pull request into the target branch."}),`
`,e.jsxs(n.li,{children:["Changes on ",e.jsx(n.code,{inline:"true",children:"main"})," are automatic published to ",e.jsx(n.code,{inline:"true",children:"specification/unreleased"}),`.
`,e.jsx(n.a,{href:"../workflow#create-and-publish-from-main-unreleased",children:"Create and publish from main (unreleased)"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"branching-rules",children:"Branching rules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Only the next upcoming version is developed on ",e.jsx(n.code,{inline:"true",children:"main"}),"."]}),`
`,e.jsx(n.li,{children:"More distant future versions are not developed in parallel."}),`
`,e.jsxs(n.li,{children:["Fixes for an already published version start from ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),"."]}),`
`,e.jsxs(n.li,{children:["Changes for future development start from ",e.jsx(n.code,{inline:"true",children:"main"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"update-documentation-release",children:"Update Documentation (Release)"}),`
`,e.jsx(n.p,{children:`This procedure describes how to update the documentation for an existing
released version.`}),`
`,e.jsx(n.h3,{id:"steps",children:"Steps"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Identify the target version for the change. Use ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),"."]}),`
`,e.jsxs(n.li,{children:["Create a working branch from ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),"."]}),`
`,e.jsx(n.li,{children:"Implement the documentation change in the working branch."}),`
`,e.jsxs(n.li,{children:["Create a pull request to ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),"."]}),`
`,e.jsx(n.li,{children:"Complete the review process and address any review comments."}),`
`,e.jsxs(n.li,{children:["Merge the pull request into ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),"."]}),`
`,e.jsxs(n.li,{children:[`Manually trigger the publish workflow
`,e.jsx(n.a,{href:"../workflow#Publish-Zudoku-specification-by-hand-from-a-release-branch",children:"Publish Zudoku specification"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"release-procedure-new-majorminor",children:"Release Procedure (new major/minor)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Ensure all changes for the upcoming release are merged into ",e.jsx(n.code,{inline:"true",children:"main"}),"."]}),`
`,e.jsx(n.li,{children:`Determine the new version number. If breaking, increment the major version;
if non-breaking, increment the minor version.`}),`
`,e.jsxs(n.li,{children:["Create a release candidate tag from ",e.jsx(n.code,{inline:"true",children:"main"})," (e.g. ",e.jsx(n.code,{inline:"true",children:"v6.1-rc.1"}),")."]}),`
`,e.jsx(n.li,{children:"Push the tag to GitHub."}),`
`,e.jsx(n.li,{children:"Verify that the website publication has been triggered as expected."}),`
`]}),`
`,e.jsxs(n.p,{children:[`Pushing a release candidate tag triggers the automated release workflow. See
`,e.jsx(n.a,{href:"../workflow#create-and-publish-new-release-from-tag",children:"Create and publish new release from tag"}),`
for the workflow description.`]}),`
`,e.jsx(n.p,{children:"The workflow:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["creates the corresponding release branch ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),`,
i.e. `,e.jsx(n.code,{inline:"true",children:"release/6.1"}),", if it does not yet exist"]}),`
`,e.jsx(n.li,{children:"creates the GitHub Release"}),`
`,e.jsx(n.li,{children:"builds the release artefacts"}),`
`,e.jsx(n.li,{children:"publishes the released version to the documentation site"}),`
`,e.jsxs(n.li,{children:["creates a protected branch ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),", i.e. ",e.jsx(n.code,{inline:"true",children:"release/6.1"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"release-candidate-procedure",children:"Release Candidate Procedure"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`Ensure all changes for the upcoming release candidate are merged into the
release branch `,e.jsx(n.code,{inline:"true",children:"release/X.Y"}),", i.e. ",e.jsx(n.code,{inline:"true",children:"release/6.1"}),"."]}),`
`,e.jsxs(n.li,{children:["Create a new release candidate tag from ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),`
(e.g. `,e.jsx(n.code,{inline:"true",children:"v6.1-rc.2"}),")."]}),`
`,e.jsx(n.li,{children:"Push the tag to GitHub."}),`
`,e.jsxs(n.li,{children:["If changes must be propagated, create a pull request from ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),`
to the appropriate target branch (e.g. `,e.jsx(n.code,{inline:"true",children:"main"}),", ",e.jsx(n.code,{inline:"true",children:"release/X.(Y+1)"}),` or
`,e.jsx(n.code,{inline:"true",children:"release/(X+1).0"}),")."]}),`
`,e.jsx(n.li,{children:"Verify that the website publication has been triggered as expected."}),`
`]}),`
`,e.jsxs(n.p,{children:[`Pushing a release candidate tag triggers the automated release workflow. See
`,e.jsx(n.a,{href:"../workflow#create-and-publish-new-release-from-tag",children:"Create and publish new release from tag"}),`
for the workflow description.`]}),`
`,e.jsx(n.p,{children:"The workflow:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"creates the GitHub Release"}),`
`,e.jsx(n.li,{children:"builds the release artefacts"}),`
`,e.jsx(n.li,{children:"publishes the released version to the documentation site"}),`
`]}),`
`,e.jsx(n.h2,{id:"finalise-release",children:"Finalise Release"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Ensure that the release branch ",e.jsx(n.code,{inline:"true",children:"release/X.Y"}),", i.e. ",e.jsx(n.code,{inline:"true",children:"release/6.1"}),`,
is final.`]}),`
`,e.jsxs(n.li,{children:["Create the final version tag from ",e.jsx(n.code,{inline:"true",children:"release/X.Y"})," (e.g. ",e.jsx(n.code,{inline:"true",children:"v6.1"}),")."]}),`
`,e.jsx(n.li,{children:"Push the tag to GitHub."}),`
`,e.jsx(n.li,{children:"Verify that the website publication has been triggered as expected."}),`
`]}),`
`,e.jsxs(n.p,{children:[`Pushing the final version tag triggers the automated release workflow. See
`,e.jsx(n.a,{href:"../workflow#create-and-publish-new-release-from-tag",children:"Create and publish new release from tag"}),`
for the workflow description.`]}),`
`,e.jsx(n.p,{children:"The workflow:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"creates the GitHub Release"}),`
`,e.jsx(n.li,{children:"builds the release artefacts"}),`
`,e.jsx(n.li,{children:"publishes the released version to the documentation site"}),`
`]})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{c as __filepath,h as default,t as excerpt,d as frontmatter,a as tableOfContents};
//# sourceMappingURL=procedures-BzeZBrVk.js.map
