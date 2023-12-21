"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2387],{4643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=r(5893),s=r(1151),i=r(5305),a=r(5888);const n={},l="Comment",c={id:"components/comment",title:"Comment",description:"Props",source:"@site/docs/components/comment.mdx",sourceDirName:"components",slug:"/components/comment",permalink:"/react-loader-spinner/docs/components/comment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/comment.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Color Ring",permalink:"/react-loader-spinner/docs/components/color-ring"},next:{title:"Discuss",permalink:"/react-loader-spinner/docs/components/discuss"}},p={},d=[{value:"Props",id:"props",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"comment",children:"Comment"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Comment\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="comment-loading"\n  wrapperStyle={{}}\n  wrapperClass="comment-wrapper"\n  color="#fff"\n  backgroundColor="#F4442E"\n/>\n'})}),"\n",(0,o.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(i.Z,{properties:[...(0,a.oD)("comment",["colors"]),{name:"color",type:"string",default:"#fff",description:"The color of the comment dots"},{name:"backgroundColor",type:"string",default:"#ff6d00",description:"The background color of the comment box"}]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5888:(e,t,r)=>{r.d(t,{oD:()=>a});const o=e=>({height:`Specifies the height of the ${e} SVG. For additional customization, employ the wrapper className.`,width:`Specifies the width of the ${e} SVG. For further customization, utilize the wrapper className.`,colors:`Defines the colors of the ${e} SVG. Accepts multiple color objects. If a comprehensive list of colors is not provided, defaults will be applied. Refer to the example.`,color:`Sets the color of the ${e} SVG.`,ariaLabel:`Specifies the Aria label of the ${e}. This label will be applied to the aria-label attribute in the wrapper element.`,wrapperStyle:"Applies styles to the wrapper. It should be a valid CSS object and can be used for custom styling, overriding the default style.",wrapperClass:"Assigns a className to the wrapper for custom styling, overriding the default style.",visible:`Controls the visibility of the ${e}. If set to false, the ${e} will not be rendered.`,radius:`Determines the radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),s={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClass:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},i=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClass:"undefined",visible:"true"}),a=function(e,t){return void 0===t&&(t=[]),[{name:"height",type:s.height,default:i(e).height,description:o(e).height},{name:"width",type:s.width,default:i(e).width,description:o(e).width},{name:"colors",type:s.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:o(e).colors},{name:"ariaLabel",type:s.ariaLabel,default:i(e).ariaLabel,description:o(e).ariaLabel},{name:"wrapperStyle",type:s.wrapperStyle,default:i(e).wrapperStyle,description:o(e).wrapperStyle},{name:"wrapperClass",type:s.wrapperClass,default:i(e).wrapperClass,description:o(e).wrapperClass},{name:"visible",type:s.visible,default:i(e).visible,description:o(e).visible}].filter((e=>!t.includes(e.name)))}}}]);