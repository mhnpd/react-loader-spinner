"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8331],{9861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var a=r(5893),s=r(1151),i=r(5305),o=r(5888);const n={},l="DNA",p={id:"components/dna",title:"DNA",description:"Props",source:"@site/docs/components/dna.mdx",sourceDirName:"components",slug:"/components/dna",permalink:"/react-loader-spinner/docs/components/dna",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/dna.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discuss",permalink:"/react-loader-spinner/docs/components/discuss"},next:{title:"Falling Lines",permalink:"/react-loader-spinner/docs/components/falling-lines"}},d={},c=[{value:"Props",id:"props",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"dna",children:"DNA"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Dna\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="dna-loading"\n  wrapperStyle={{}}\n  wrapperClass="dna-wrapper"\n/>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(i.Z,{properties:[...(0,o.oD)("DNA",["colors"])]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5888:(e,t,r)=>{r.d(t,{oD:()=>o});const a=e=>({height:`Height of the ${e} SVG. For more customization, use the wrapper className.`,width:`Width of the ${e} SVG. For more customization, use the wrapper className. `,colors:`Colors of the ${e} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,color:`Color of the ${e} SVG.`,ariaLabel:`Aria label of the ${e}. It will be used for the aria-label attribute in the wrapper element.`,wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:`Specifies whether the ${e} is visible or not. If set to false, the ${e} will not be rendered.`,radius:`Radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),s={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},i=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),o=function(e,t){return void 0===t&&(t=[]),[{name:"height",type:s.height,default:i(e).height,description:a(e).height},{name:"width",type:s.width,default:i(e).width,description:a(e).width},{name:"colors",type:s.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:a(e).colors},{name:"ariaLabel",type:s.ariaLabel,default:i(e).ariaLabel,description:a(e).ariaLabel},{name:"wrapperStyle",type:s.wrapperStyle,default:i(e).wrapperStyle,description:a(e).wrapperStyle},{name:"wrapperClassName",type:s.wrapperClassName,default:i(e).wrapperClassName,description:a(e).wrapperClassName},{name:"visible",type:s.visible,default:i(e).visible,description:a(e).visible}].filter((e=>!t.includes(e.name)))}}}]);