import{p as r,j as e}from"./entry.client-7KTuy1tN.js";const t="Short overview of the workflows in this repository.",c=[{depth:1,text:"GitHub Actions workflows",id:"github-actions-workflows",children:[{depth:2,text:"Linting specification",id:"linting-specification",children:[{depth:3,text:"Lint OpenAPI CLI",id:"lint-openapi-cli"},{depth:3,text:"Lint Redocly",id:"lint-redocly"},{depth:3,text:"Lint Vacuum (not active yet)",id:"lint-vacuum-not-active-yet"}]},{depth:2,text:"Blocking PRs",id:"blocking-prs",children:[{depth:3,text:"Block PRs from release/5.*",rich:[{type:"text",value:"Block PRs from ",position:{start:{line:59,column:5,offset:2127},end:{line:59,column:20,offset:2142}}},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"release/5.*",position:{start:{line:59,column:20,offset:2142},end:{line:59,column:33,offset:2155}}}],position:{start:{line:59,column:20,offset:2142},end:{line:59,column:33,offset:2155}}}],id:"block-prs-from-release5"}]},{depth:2,text:"Update files",id:"update-files",children:[{depth:3,text:"Auto re-approve when only CHANGELOG changed",id:"auto-re-approve-when-only-changelog-changed"},{depth:3,text:"Check changelog",id:"check-changelog"}]},{depth:2,text:"Publish and release",id:"publish-and-release",children:[{depth:3,text:"Create and publish new release from tag",id:"create-and-publish-new-release-from-tag"},{depth:3,text:"Publish Zudoku specification by hand from a release branch",id:"publish-zudoku-specification-by-hand-from-a-release-branch"},{depth:3,text:"Create and publish from main (unreleased)",id:"create-and-publish-from-main-unreleased"}]}]}],o={title:"GitHub Actions workflows",sidebar_label:"Workflows",lastModifiedTime:"2026-03-17T11:45:29.000Z"},d="maintenance/workflows.mdx";function s(i){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"github-actions-workflows",children:"GitHub Actions workflows"}),`
`,e.jsx(n.p,{children:"Short overview of the workflows in this repository."}),`
`,e.jsx(n.h2,{id:"linting-specification",children:"Linting specification"}),`
`,e.jsx(n.p,{children:"Runs different validations and lintings on the source specification."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,`Ensures OEAPI remains technically correct and consistent with the OpenAPI
specification.`]}),`
`,e.jsx(n.h3,{id:"lint-openapi-cli",children:"Lint OpenAPI CLI"}),`
`,e.jsx(n.p,{children:"Runs OpenAPI validation and linting on the source specification."}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/lint-source-openapi.yaml",children:"lint-source-openapi.yaml"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Config"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:".openapi/lint.yaml"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Local install"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"go install github.com/speakeasy-api/openapi/cmd/openapi@latest"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Local command"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"openapi spec lint source/spec.yaml -c .openapi/lint.yaml"})})]})]})]}),`
`,e.jsx(n.h3,{id:"lint-redocly",children:"Lint Redocly"}),`
`,e.jsx(n.p,{children:"Runs Redocly validation rules on the specification."}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/lint-source-redocly.yml",children:"lint-source-redocly.yml"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Config"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"redocly.yaml"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Custom rules"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"redocly-plugin.cjs"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Local install"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"npm install -g @redocly/cli"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Local command"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"redocly lint source/spec.yaml"})})]})]})]}),`
`,e.jsx(n.h3,{id:"lint-vacuum-not-active-yet",children:"Lint Vacuum (not active yet)"}),`
`,e.jsx(n.p,{children:`Runs Vacuum validation rules on the specification. This check is currently not
implemented as a workflow.`}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/lint-source-vacuum.yaml",children:"lint-source-vacuum.yaml"})]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{}),e.jsx(n.th,{children:"Value"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Config"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"vacuum.conf.yaml"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:".spectral.yaml"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Local install"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"npm install -g @quobix/vacuum"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Local command"}),e.jsx(n.td,{children:e.jsx(n.code,{inline:"true",children:"vacuum lint source/spec.yaml"})})]})]})]}),`
`,e.jsx(n.h2,{id:"blocking-prs",children:"Blocking PRs"}),`
`,e.jsxs(n.h3,{id:"block-prs-from-release5",children:["Block PRs from ",e.jsx(n.code,{inline:"true",children:"release/5.*"})]}),`
`,e.jsxs(n.p,{children:["Blocks pull requests that originate from ",e.jsx(n.code,{inline:"true",children:"release/5.*"})," branches."]}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/block-prs-from-release-5.yaml",children:"block-prs-from-release-5.yaml"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,`Prevents changes from legacy release branches being merged into supported
branches.`]}),`
`,e.jsx(n.h2,{id:"update-files",children:"Update files"}),`
`,e.jsx(n.h3,{id:"auto-re-approve-when-only-changelog-changed",children:"Auto re-approve when only CHANGELOG changed"}),`
`,e.jsxs(n.p,{children:[`Automatically re-approves a pull request when the only change after an approval
is an update to `,e.jsx(n.code,{inline:"true",children:"CHANGELOG.md"}),"."]}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/auto-reapprove-changelog.yaml",children:"auto-reapprove-changelog.yaml"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,`Avoids unnecessary manual re-approval when the changelog is updated after a
review.`]}),`
`,e.jsx(n.h3,{id:"check-changelog",children:"Check changelog"}),`
`,e.jsxs(n.p,{children:["Checks whether ",e.jsx(n.code,{inline:"true",children:"CHANGELOG.md"})," is updated in a pull request."]}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/check-changelog.yaml",children:"check-changelog.yaml"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,"Ensures every functional change is recorded in the changelog."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Bypass team"}),e.jsx(n.br,{}),`
`,`This check may be bypassed because it verifies documentation discipline rather
than technical correctness. In rare situations a pull request may need to be
merged while the changelog is updated later or the change does not require a
changelog update.`]}),`
`,e.jsx(n.h2,{id:"publish-and-release",children:"Publish and release"}),`
`,e.jsx(n.h3,{id:"create-and-publish-new-release-from-tag",children:"Create and publish new release from tag"}),`
`,e.jsx(n.p,{children:`Builds and publishes a release when a version tag is created. If it does not
exist, the workflow also creates the corresponding release branch.`}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/release-from-tag.yaml",children:"release-from-tag.yaml"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,`Creates the official released version of the specification and publishes it to
the documentation site and release artefacts.`]}),`
`,e.jsx(n.h3,{id:"publish-zudoku-specification-by-hand-from-a-release-branch",children:"Publish Zudoku specification by hand from a release branch"}),`
`,e.jsx(n.p,{children:"Manually republishes Zudoku documentation from a release branch."}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/republish_documentation.yaml",children:"republish_documentation.yaml"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,`Allows controlled republishing when something needs to be rebuilt without
creating a new release. Needed for example for documentation changes in the
code.`]}),`
`,e.jsx(n.h3,{id:"create-and-publish-from-main-unreleased",children:"Create and publish from main (unreleased)"}),`
`,e.jsxs(n.p,{children:["Publishes the documentation from ",e.jsx(n.code,{inline:"true",children:"main"})," to the ",e.jsx(n.code,{inline:"true",children:"unreleased"}),` section of the
documentation site.`]}),`
`,e.jsxs(n.p,{children:["Workflow: ",e.jsx(n.a,{href:"../../.github/workflows/unreleased-docs.yaml",children:"unreleased-docs.yaml"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Purpose"}),e.jsx(n.br,{}),`
`,`Keeps the public preview documentation in sync with the current development
state.`]})]})}function a(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{d as __filepath,a as default,t as excerpt,o as frontmatter,c as tableOfContents};
//# sourceMappingURL=workflows-D_cBInDB.js.map
