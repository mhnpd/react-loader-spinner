"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5894],{1254:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var i=t(5893),s=t(1151),a=t(5305),o=t(5888);const n={},l="Grid",d={id:"components/grid",title:"Grid",description:"Props",source:"@site/docs/components/grid.mdx",sourceDirName:"components",slug:"/components/grid",permalink:"/react-loader-spinner/docs/components/grid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/grid.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fidget Spinner",permalink:"/react-loader-spinner/docs/components/fidget-spinner"},next:{title:"Hearts",permalink:"/react-loader-spinner/docs/components/hearts"}},p={},c=[{value:"Props",id:"props",level:3}];function h(e){const r={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"grid",children:"Grid"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Grid\n  height="80"\n  width="80"\n  color="#4fa94d"\n  ariaLabel="grid-loading"\n  radius="12.5"\n  wrapperStyle={{}}\n  wrapperClass=""\n  visible={true}\n/>\n'})}),"\n",(0,i.jsx)(r.h3,{id:"props",children:"Props"}),"\n",(0,i.jsx)(a.Z,{properties:[...(0,o.oD)("grid",["colors"]),{name:"radius",type:"number | string",default:"12.5",description:"Radius of the grid"}]})]})}function u(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5888:(e,r,t)=>{t.d(r,{oD:()=>o});const i=e=>({height:`Specifies the height of the ${e} SVG. For additional customization, employ the wrapper className.`,width:`Specifies the width of the ${e} SVG. For further customization, utilize the wrapper className.`,colors:`Defines the colors of the ${e} SVG. Accepts multiple color objects. If a comprehensive list of colors is not provided, defaults will be applied. Refer to the example.`,color:`Sets the color of the ${e} SVG.`,ariaLabel:`Specifies the Aria label of the ${e}. This label will be applied to the aria-label attribute in the wrapper element.`,wrapperStyle:"Applies styles to the wrapper. It should be a valid CSS object and can be used for custom styling, overriding the default style.",wrapperClass:"Assigns a className to the wrapper for custom styling, overriding the default style.",visible:`Controls the visibility of the ${e}. If set to false, the ${e} will not be rendered.`,radius:`Determines the radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),s={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClass:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},a=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClass:"undefined",visible:"true"}),o=function(e,r){return void 0===r&&(r=[]),[{name:"height",type:s.height,default:a(e).height,description:i(e).height},{name:"width",type:s.width,default:a(e).width,description:i(e).width},{name:"colors",type:s.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:i(e).colors},{name:"ariaLabel",type:s.ariaLabel,default:a(e).ariaLabel,description:i(e).ariaLabel},{name:"wrapperStyle",type:s.wrapperStyle,default:a(e).wrapperStyle,description:i(e).wrapperStyle},{name:"wrapperClass",type:s.wrapperClass,default:a(e).wrapperClass,description:i(e).wrapperClass},{name:"visible",type:s.visible,default:a(e).visible,description:i(e).visible}].filter((e=>!r.includes(e.name)))}}}]);