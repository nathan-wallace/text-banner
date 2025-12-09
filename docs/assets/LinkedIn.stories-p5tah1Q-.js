import{R as h}from"./index-CgfFrydU.js";import{I as x}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as z,a as o,D as I,c as X}from"./storyControls-XXbn34Dv.js";import{b as T}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const s="platforms/linkedin/image",U={title:"Platforms/LinkedIn",component:x,parameters:{controls:{expanded:!0}},argTypes:{...z,storageKey:{table:{disable:!0}}}},t=S=>{const{style:f,backgroundSize:D=o.backgroundSize,backgroundPositionX:K=o.backgroundPositionX,backgroundPositionY:C=o.backgroundPositionY,storageKey:Y=s,...E}=S;return h.createElement(I,{storageKey:Y,imageProps:{...E,style:X({border:`4px solid ${T.colors.primary}`,...f||{}},D,K,C)}})},r=t.bind({});r.args={...o,width:1584,height:396,text:"1584x396",storageKey:s};const e=t.bind({});e.args={...o,width:400,height:400,text:"400x400",style:{borderRadius:"50%"},storageKey:s};const n=t.bind({});n.args={...o,width:300,height:300,text:"300x300",style:{borderRadius:"50%"},storageKey:s};const a=t.bind({});a.args={...o,width:1128,height:191,text:"1128x191",storageKey:s};var i,g,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = DEFAULT_STORAGE_KEY,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var c,u,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = DEFAULT_STORAGE_KEY,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,k,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = DEFAULT_STORAGE_KEY,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(p=(k=n.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var m,y,P;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = DEFAULT_STORAGE_KEY,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(P=(y=a.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const $=["PersonalProfileBackground","PersonalProfilePhoto","CompanyLogo","CompanyCover"];export{a as CompanyCover,n as CompanyLogo,r as PersonalProfileBackground,e as PersonalProfilePhoto,$ as __namedExportsOrder,U as default};
