"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1102],{4084:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(5893),s=t(1151),o=t(5305),i=t(5888);const l={},n="Bars",p={id:"components/bars",title:"Bars",description:"Props",source:"@site/docs/components/bars.mdx",sourceDirName:"components",slug:"/components/bars",permalink:"/react-loader-spinner/docs/components/bars",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/bars.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ball Triangle",permalink:"/react-loader-spinner/docs/components/ball-traingle"},next:{title:"Blocks",permalink:"/react-loader-spinner/docs/components/blocks"}},d={},c=[{value:"Props",id:"props",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"bars",children:"Bars"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Bars\n  height="80"\n  width="80"\n  color="#4fa94d"\n  ariaLabel="bars-loading"\n  wrapperStyle={{}}\n  wrapperClass=""\n  visible={true}\n/>\n'})}),"\n",(0,a.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(o.Z,{properties:[...(0,i.oD)("bars","colors")]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5888:(e,r,t)=>{t.d(r,{oD:()=>i});const a=e=>({height:`Height of the ${e} SVG. For more customization, use the wrapper className.`,width:`Width of the ${e} SVG. For more customization, use the wrapper className. `,colors:`Colors of the ${e} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,color:`Color of the ${e} SVG.`,ariaLabel:`Aria label of the ${e}. It will be used for the aria-label attribute in the wrapper element.`,wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:`Specifies whether the ${e} is visible or not. If set to false, the ${e} will not be rendered.`,radius:`Radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),s={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},o=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),i=function(e,r){return void 0===r&&(r=[]),[{name:"height",type:s.height,default:o(e).height,description:a(e).height},{name:"width",type:s.width,default:o(e).width,description:a(e).width},{name:"colors",type:s.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:a(e).colors},{name:"ariaLabel",type:s.ariaLabel,default:o(e).ariaLabel,description:a(e).ariaLabel},{name:"wrapperStyle",type:s.wrapperStyle,default:o(e).wrapperStyle,description:a(e).wrapperStyle},{name:"wrapperClassName",type:s.wrapperClassName,default:o(e).wrapperClassName,description:a(e).wrapperClassName},{name:"visible",type:s.visible,default:o(e).visible,description:a(e).visible}].filter((e=>!r.includes(e.name)))}}}]);