import{r as l,R as t}from"./index-CgfFrydU.js";import{P as r}from"./index-Co38GRlK.js";import{I as K}from"./ImageWithPlaceholder-D2jZaSUu.js";import{u as X,b as i}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./colors-DZBBGjh9.js";const u=({logoUrl:o,imageWidth:s=150,imageHeight:S=150,cropWidth:d=150,cropHeight:f=150,positionX:H=0,positionY:I=0,text:T="Logo",storageKey:q})=>{const p=l.useMemo(()=>o??null,[o]),[m,_]=X(q,p),[k,y]=l.useState(m??p),[h,c]=l.useState(!1),b=l.useRef(null);l.useEffect(()=>{y(m??p)},[m,p]);const v=e=>{if(!e||!e.type.startsWith("image/"))return;const x=new FileReader;x.onload=A=>{var E;const g=(E=A.target)==null?void 0:E.result;typeof g=="string"&&(y(g),_(g))},x.readAsDataURL(e)},V=e=>{e.preventDefault(),c(!1),v(e.dataTransfer.files[0])},w=e=>{e.preventDefault(),c(!0)},R=e=>{e.preventDefault(),c(!1)},C=e=>{v(e.target.files[0])},P=()=>{var e;(e=b.current)==null||e.click()};return t.createElement("div",{style:{padding:"1rem"}},t.createElement("div",{onDrop:V,onDragOver:w,onDragLeave:R,onClick:P,style:{border:`2px dashed ${h?"#007bff":"#ccc"}`,padding:"1rem",textAlign:"center",cursor:"pointer",backgroundColor:h?"rgba(0,123,255,0.1)":"transparent"}},t.createElement("input",{type:"file",accept:"image/*",ref:b,style:{display:"none"},onChange:C}),t.createElement("div",{style:{position:"relative",width:"100%",maxWidth:d,aspectRatio:`${d} / ${f}`,margin:"0 auto",overflow:"hidden"},"data-export-target":"true","data-native-width":d,"data-native-height":f},t.createElement(K,{src:k,width:s,height:S,text:T,alt:"Brand logo",style:{position:"absolute",top:I,left:H}})),t.createElement("p",{style:{marginTop:"0.5rem"}},"Drag & drop or click to upload a new logo")))};u.propTypes={logoUrl:r.string,imageWidth:r.number,imageHeight:r.number,cropWidth:r.number,cropHeight:r.number,positionX:r.number,positionY:r.number,text:r.string,storageKey:r.string};u.__docgenInfo={description:"",methods:[],displayName:"LogoUploader",props:{imageWidth:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},imageHeight:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},cropWidth:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},cropHeight:{defaultValue:{value:"150",computed:!1},description:"",type:{name:"number"},required:!1},positionX:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},positionY:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},text:{defaultValue:{value:'"Logo"',computed:!1},description:"",type:{name:"string"},required:!1},logoUrl:{description:"",type:{name:"string"},required:!1},storageKey:{description:"",type:{name:"string"},required:!1}}};const j={title:"Brand/Elements",parameters:{controls:{expanded:!0}}},a=o=>t.createElement(u,{...o});a.args={logoUrl:i.logoUrl,imageWidth:150,imageHeight:150,cropWidth:150,cropHeight:150,positionX:0,positionY:0,storageKey:"brand/logo"};a.argTypes={logoUrl:{control:"text"},imageWidth:{control:{type:"number"},description:"Width of the logo image (px)"},imageHeight:{control:{type:"number"},description:"Height of the logo image (px)"},cropWidth:{control:{type:"number"},description:"Width of the crop area (px)"},cropHeight:{control:{type:"number"},description:"Height of the crop area (px)"},positionX:{control:{type:"number"},description:"Horizontal position of the image (px)"},positionY:{control:{type:"number"},description:"Vertical position of the image (px)"},storageKey:{table:{disable:!0}}};const n=o=>{const s={primary:o.primary??i.fonts.primary,secondary:o.secondary??i.fonts.secondary,tertiary:o.tertiary??i.fonts.tertiary};return t.createElement("div",{style:{padding:"1rem"}},t.createElement("p",{style:{fontFamily:s.primary,margin:0,paddingBottom:"0.5rem"}},"Source Sans Pro Web"),t.createElement("p",{style:{fontFamily:s.secondary,margin:0,paddingBottom:"0.5rem",textTransform:"uppercase"}},"Arial Black"),t.createElement("p",{style:{fontFamily:s.tertiary,margin:0,paddingBottom:"0.5rem",textTransform:"capitalize"}},"Segoe UI"))};n.args={primary:i.fonts.primary,secondary:i.fonts.secondary,tertiary:i.fonts.tertiary};n.argTypes={primary:{control:"text"},secondary:{control:"text"},tertiary:{control:"text"}};a.__docgenInfo={description:"",methods:[],displayName:"Logo"};n.__docgenInfo={description:"",methods:[],displayName:"Fonts"};var U,B,L;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:"args => <LogoUploader {...args} />",...(L=(B=a.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var D,W,F;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
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
}`,...(F=(W=n.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const G=["Logo","Fonts"];export{n as Fonts,a as Logo,G as __namedExportsOrder,j as default};
