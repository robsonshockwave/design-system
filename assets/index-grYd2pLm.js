import{j as i}from"./jsx-runtime-X2b_N9AH.js";import{q as N,n as T,R as A,I as _,F as B,a as H,b as O}from"./index-BI7gSsqq.js";import{r as m,R as t}from"./index-uCp2LrAq.js";import{c as V,b as q,f as Y,a as U,l as Z,r as K,s as D}from"./index-v4bgSY9J.js";const{styled:n,css:be,globalCss:ve,keyframes:y,getCssText:ze,theme:Ce,createTheme:we,config:je}=N({themeMap:{...T,height:"space",width:"space"},theme:{colors:V,fonts:q,fontSizes:Y,fontWeights:U,lineHeights:Z,radii:K,space:D}}),G=n("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});G.displayName="Box";const b=n("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});b.displayName="Text";const J=n("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});J.displayName="Heading";const Q=n(A,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),X=n(_,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),ee=n(B,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});var te=m.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),v=function(r,o,l){var a=l.get(r);return a?a(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function k(e,r){if(e==null)return{};var o={},l=Object.keys(e),a,s;for(s=0;s<l.length;s++)a=l[s],!(r.indexOf(a)>=0)&&(o[a]=e[a]);return o}var h=m.forwardRef(function(e,r){var o=e.alt,l=e.color,a=e.size,s=e.weight,L=e.mirrored,W=e.children,F=e.renderPath,I=k(e,["alt","color","size","weight","mirrored","children","renderPath"]),u=m.useContext(te),g=u.color,f=g===void 0?"currentColor":g,p=u.size,x=u.weight,M=x===void 0?"regular":x,$=u.mirrored,P=$===void 0?!1:$,R=k(u,["color","size","weight","mirrored"]);return t.createElement("svg",Object.assign({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a??p,height:a??p,fill:l??f,viewBox:"0 0 256 256",transform:L||P?"scale(-1, 1)":void 0},R,I),!!o&&t.createElement("title",null,o),W,t.createElement("rect",{width:"256",height:"256",fill:"none"}),F(s??M,l??f))});h.displayName="IconBase";var d=new Map;d.set("bold",function(e){return t.createElement(t.Fragment,null,t.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});d.set("duotone",function(e){return t.createElement(t.Fragment,null,t.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});d.set("fill",function(){return t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});d.set("light",function(e){return t.createElement(t.Fragment,null,t.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});d.set("thin",function(e){return t.createElement(t.Fragment,null,t.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});d.set("regular",function(e){return t.createElement(t.Fragment,null,t.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var re=function(r,o){return v(r,o,d)},z=m.forwardRef(function(e,r){return t.createElement(h,Object.assign({ref:r},e,{renderPath:re}))});z.displayName="Check";var c=new Map;c.set("bold",function(e){return t.createElement(t.Fragment,null,t.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),t.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});c.set("duotone",function(e){return t.createElement(t.Fragment,null,t.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),t.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),t.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});c.set("fill",function(){return t.createElement(t.Fragment,null,t.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});c.set("light",function(e){return t.createElement(t.Fragment,null,t.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),t.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});c.set("thin",function(e){return t.createElement(t.Fragment,null,t.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),t.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});c.set("regular",function(e){return t.createElement(t.Fragment,null,t.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),t.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ne=function(r,o){return v(r,o,c)},C=m.forwardRef(function(e,r){return t.createElement(h,Object.assign({ref:r},e,{renderPath:ne}))});C.displayName="User";function w(e){return i.jsxs(Q,{children:[i.jsx(X,{...e}),i.jsx(ee,{delayMs:600,children:i.jsx(C,{})})]})}w.displayName="Avatar";w.__docgenInfo={description:"",methods:[],displayName:"Avatar",composes:["ComponentProps"]};const oe=n("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});oe.displayName="Button";const ie=n("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),ae=n("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray200",fontWeight:"regular"}),le=n("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}}),j=({prefix:e,...r})=>i.jsxs(ie,{children:[!!e&&i.jsx(ae,{children:e}),i.jsx(le,{...r})]});j.displayName="TextInput";j.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{prefix:{required:!1,tsType:{name:"string"},description:""}},composes:["ComponentProps"]};const se=n("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});se.displayName="TextArea";const de=n(H,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),ce=y({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),ue=y({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),me=n(O,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${ce} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${ue} 200ms ease-out`}}),E=e=>i.jsx(de,{...e,children:i.jsx(me,{asChild:!0,children:i.jsx(z,{weight:"bold"})})});E.displayName="Checkbox";E.__docgenInfo={description:"",methods:[],displayName:"Checkbox",composes:["ComponentProps"]};const he=n("div",{}),ge=n(b,{color:"$gray200",defaultVariants:{size:"xs"}}),fe=n("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),pe=n("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}}),S=({size:e,currentStep:r=1})=>i.jsxs(he,{children:[i.jsxs(ge,{children:["Passo ",r," de ",e]}),i.jsx(fe,{css:{"--steps-size":e},children:Array.from({length:e},(o,l)=>l+1).map(o=>i.jsx(pe,{active:r>=o},o))})]});S.displayName="MultiStep";S.__docgenInfo={description:"",methods:[],displayName:"MultiStep",props:{size:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};export{w as A,G as B,E as C,h as I,S as M,b as T,se as a,j as b,oe as c,v as r};
