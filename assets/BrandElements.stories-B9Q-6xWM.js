import{r as l,R as t}from"./index-CgfFrydU.js";import{P as r}from"./index-Co38GRlK.js";import{I as K}from"./ImageWithPlaceholder-CyTsu8JG.js";import{u as X,b as i}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./colors-DZBBGjh9.js";const g=({logoUrl:o,imageWidth:s=150,imageHeight:D=150,cropWidth:F=150,cropHeight:H=150,positionX:S=0,positionY:I=0,text:T="Logo",storageKey:q})=>{const p=l.useMemo(()=>o??null,[o]),[d,_]=X(q,p),[k,u]=l.useState(d??p),[f,m]=l.useState(!1),y=l.useRef(null);l.useEffect(()=>{u(d??p)},[d,p]);const h=e=>{if(!e||!e.type.startsWith("image/"))return;const b=new FileReader;b.onload=A=>{var v;const c=(v=A.target)==null?void 0:v.result;typeof c=="string"&&(u(c),_(c))},b.readAsDataURL(e)},V=e=>{e.preventDefault(),m(!1),h(e.dataTransfer.files[0])},w=e=>{e.preventDefault(),m(!0)},R=e=>{e.preventDefault(),m(!1)},C=e=>{h(e.target.files[0])},P=()=>{var e;(e=y.current)==null||e.click()};return t.createElement("div",{style:{padding:"1rem"}},t.createElement("div",{onDrop:V,onDragOver:w,onDragLeave:R,onClick:P,style:{border:`2px dashed ${f?"#007bff":"#ccc"}`,padding:"1rem",textAlign:"center",cursor:"pointer",backgroundColor:f?"rgba(0,123,255,0.1)":"transparent"}},t.createElement("input",{type:"file",accept:"image/*",ref:y,style:{display:"none"},onChange:C}),t.createElement("div",{style:{position:"relative",width:F,height:H,margin:"0 auto",overflow:"hidden"}},t.createElement(K,{src:k,width:s,height:D,text:T,alt:"Brand logo",style:{position:"absolute",top:I,left:S}})),t.createElement("p",{style:{marginTop:"0.5rem"}},"Drag & drop or click to upload a new logo")))};g.propTypes={logoUrl:r.string,imageWidth:r.number,imageHeight:r.number,cropWidth:r.number,cropHeight:r.number,positionX:r.number,positionY:r.number,text:r.string,storageKey:r.string};g.__docgenInfo={description:"",methods:[],displayName:"LogoUploader",props:{imageWidth:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},imageHeight:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},cropWidth:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},cropHeight:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},positionX:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},positionY:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},text:{defaultValue:{value:'"Logo"',computed:!1},description:"",type:{name:"string"},required:!1},logoUrl:{description:"",type:{name:"string"},required:!1},storageKey:{description:"",type:{name:"string"},required:!1}}};const j={title:"Brand/Elements",parameters:{controls:{expanded:!0}}},a=o=>t.createElement(g,{...o});a.args={logoUrl:i.logoUrl,imageWidth:150,imageHeight:150,cropWidth:150,cropHeight:150,positionX:0,positionY:0,storageKey:"brand/logo"};a.argTypes={logoUrl:{control:"text"},imageWidth:{control:{type:"number"},description:"Width of the logo image (px)"},imageHeight:{control:{type:"number"},description:"Height of the logo image (px)"},cropWidth:{control:{type:"number"},description:"Width of the crop area (px)"},cropHeight:{control:{type:"number"},description:"Height of the crop area (px)"},positionX:{control:{type:"number"},description:"Horizontal position of the image (px)"},positionY:{control:{type:"number"},description:"Vertical position of the image (px)"},storageKey:{table:{disable:!0}}};const n=o=>{const s={primary:o.primary??i.fonts.primary,secondary:o.secondary??i.fonts.secondary,tertiary:o.tertiary??i.fonts.tertiary};return t.createElement("div",{style:{padding:"1rem"}},t.createElement("p",{style:{fontFamily:s.primary,margin:0,paddingBottom:"0.5rem"}},"Source Sans Pro Web"),t.createElement("p",{style:{fontFamily:s.secondary,margin:0,paddingBottom:"0.5rem",textTransform:"uppercase"}},"Arial Black"),t.createElement("p",{style:{fontFamily:s.tertiary,margin:0,paddingBottom:"0.5rem",textTransform:"capitalize"}},"Segoe UI"))};n.args={primary:i.fonts.primary,secondary:i.fonts.secondary,tertiary:i.fonts.tertiary};n.argTypes={primary:{control:"text"},secondary:{control:"text"},tertiary:{control:"text"}};a.__docgenInfo={description:"",methods:[],displayName:"Logo"};n.__docgenInfo={description:"",methods:[],displayName:"Fonts"};var x,E,U;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"args => <LogoUploader {...args} />",...(U=(E=a.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var B,L,W;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const fonts = {
    primary: args.primary ?? defaultBrand.fonts.primary,
    secondary: args.secondary ?? defaultBrand.fonts.secondary,
    tertiary: args.tertiary ?? defaultBrand.fonts.tertiary
  };
  return <div style={{
    padding: "1rem"
  }}>
      <p style={{
      fontFamily: fonts.primary,
      margin: 0,
      paddingBottom: "0.5rem"
    }}>
        Source Sans Pro Web
      </p>
      <p style={{
      fontFamily: fonts.secondary,
      margin: 0,
      paddingBottom: "0.5rem",
      textTransform: "uppercase"
    }}>
        Arial Black
      </p>
      <p style={{
      fontFamily: fonts.tertiary,
      margin: 0,
      paddingBottom: "0.5rem",
      textTransform: "capitalize"
    }}>
        Segoe UI
      </p>
    </div>;
}`,...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const G=["Logo","Fonts"];export{n as Fonts,a as Logo,G as __namedExportsOrder,j as default};
