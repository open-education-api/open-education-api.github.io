import{i as j,N as u,j as g,a as e,W as r,k as f,l as y,u as N,m as v,C as S,U as b,R as w}from"./entry.client-BWvMbnyg.js";import{z as m}from"./index-PBV_FG0z-Cg4DEhj6.js";import{I as $}from"./Toc-C3Qnagh4-DzkErxWn.js";import{g as C,y as z,m as I}from"./SchemaView-B7i-kakV-BXpvk5QS.js";import"./ClaudeLogo-m1b8ceYZ-Dl1Q71sc.js";import"./circular-CxaYlaib-DFa3UCJN.js";const A=w(`
  query GetSchemas($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      title
      description
      summary
      components {
        schemas {
          name
          schema
          extensions
        }
      }
    }
  }
`);function W(){const{input:d,type:h,versions:l,version:i,options:n}=j(),p=u(A,{input:d,type:h}),{data:t}=g(p),c=t.schema.title,a=t.schema.components?.schemas??[],x=Object.entries(l).length>1,o=n?.showVersionSelect==="always"||x&&n?.showVersionSelect!=="hide";return a.length?e.jsxs("div",{className:"grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between","data-pagefind-filter":"section:openapi","data-pagefind-meta":"section:openapi",children:[e.jsx(C,{name:"category",children:c}),e.jsxs(r,{children:[e.jsxs("title",{children:["Schemas ",o?i:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),e.jsxs("div",{className:"pt-(--padding-content-top) pb-(--padding-content-bottom)",children:[e.jsx(z,{title:c,heading:"Schemas",headingId:"schemas",description:t.schema.description??void 0}),e.jsx("hr",{className:"my-8"}),e.jsx("div",{className:"flex flex-col gap-y-5",children:a.map(s=>e.jsxs(f,{className:"group",defaultOpen:!0,children:[e.jsxs(y,{registerNavigationAnchor:!0,level:2,className:"flex items-center gap-1 justify-between w-fit",id:m(s.name),children:[s.name," ",e.jsx(N,{asChild:!0,children:e.jsx(v,{variant:"ghost",size:"icon",className:"size-6",children:e.jsx(S,{size:16,className:"group-data-[state=open]:rotate-90 transition cursor-pointer"})})})]}),e.jsx(b,{className:"mt-4 CollapsibleContent",children:e.jsx(I,{schema:s.schema})})]},s.name))})]}),e.jsx($,{entries:a.map(s=>({id:m(s.name),text:s.name,depth:1}))})]}):e.jsxs("div",{children:[e.jsxs(r,{children:[e.jsxs("title",{children:["Schemas ",o?i:""]}),e.jsx("meta",{name:"description",content:"List of schemas used by the API."})]}),"No schemas found"]})}export{W as SchemaList};
//# sourceMappingURL=SchemaList-gyUWjiSY-Cwl8j9Q4.js.map
