"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2387],{4643:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=r(5893),s=r(1151),a=r(5305),i=r(5888);const n={},l="Comment",c={id:"components/comment",title:"Comment",description:"Props",source:"@site/docs/components/comment.mdx",sourceDirName:"components",slug:"/components/comment",permalink:"/react-loader-spinner/docs/components/comment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/comment.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Color Ring",permalink:"/react-loader-spinner/docs/components/color-ring"},next:{title:"Discuss",permalink:"/react-loader-spinner/docs/components/discuss"}},p={},d=[{value:"Props",id:"props",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"comment",children:"Comment"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",metastring:"live",live:!0,children:'<Comment\n  visible={true}\n  height="80"\n  width="80"\n  ariaLabel="comment-loading"\n  wrapperStyle={{}}\n  wrapperClass="comment-wrapper"\n  color="#fff"\n  backgroundColor="#F4442E"\n/>\n'})}),"\n",(0,o.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,o.jsx)(a.Z,{properties:[...(0,i.oD)("comment",["colors"]),{name:"color",type:"string",default:"#fff",description:"The color of the comment dots"},{name:"backgroundColor",type:"string",default:"#ff6d00",description:"The background color of the comment box"}]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},5888:(e,t,r)=>{r.d(t,{oD:()=>i});const o=e=>({height:`Height of the ${e} SVG. For more customization, use the wrapper className.`,width:`Width of the ${e} SVG. For more customization, use the wrapper className. `,colors:`Colors of the ${e} SVG. Accepts multiple color objects. If a complete list of colors is not provided, defaults will be used. Refer to the example.`,color:`Color of the ${e} SVG.`,ariaLabel:`Aria label of the ${e}. It will be used for the aria-label attribute in the wrapper element.`,wrapperStyle:"Styles to be applied to the wrapper. It should be a valid CSS object and can be used for custom styling. It will override the default style.",wrapperClassName:"ClassName to be applied to the wrapper. It can be used for custom styling and will override the default style.",visible:`Specifies whether the ${e} is visible or not. If set to false, the ${e} will not be rendered.`,radius:`Radius of the circle(s) in the ${e} component. For further customization, use the wrapper className.`}),s={height:"number | string",width:"number | string",colors:"Array<string>",color:"string: #hex-code",secondaryColor:"string: #hex-code",ariaLabel:"string",wrapperStyle:"object",wrapperClassName:"string",visible:"boolean",radius:"number | string",strokeWidth:"number | string",strokeColor:"string"},a=e=>({height:"80",width:"80",color:"#4fa94d",secondaryColor:"#4fa94d",ariaLabel:`${e}-loading`,wrapperStyle:JSON.stringify({},null,2),wrapperClassName:"undefined",visible:"true"}),i=function(e,t){return void 0===t&&(t=[]),[{name:"height",type:s.height,default:a(e).height,description:o(e).height},{name:"width",type:s.width,default:a(e).width,description:o(e).width},{name:"colors",type:s.colors,default:JSON.stringify(["#4fa94d","#4fa94d","#4fa94d"]),description:o(e).colors},{name:"ariaLabel",type:s.ariaLabel,default:a(e).ariaLabel,description:o(e).ariaLabel},{name:"wrapperStyle",type:s.wrapperStyle,default:a(e).wrapperStyle,description:o(e).wrapperStyle},{name:"wrapperClassName",type:s.wrapperClassName,default:a(e).wrapperClassName,description:o(e).wrapperClassName},{name:"visible",type:s.visible,default:a(e).visible,description:o(e).visible}].filter((e=>!t.includes(e.name)))}}}]);