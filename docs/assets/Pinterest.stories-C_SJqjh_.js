import{R as y}from"./index-CgfFrydU.js";import{I as S}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as f,a as e,D,c as K}from"./storyControls-XXbn34Dv.js";import{b as E}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const a="platforms/pinterest/image",I={title:"Platforms/Pinterest",component:S,parameters:{controls:{expanded:!0}},argTypes:{...f,storageKey:{table:{disable:!0}}}},c=u=>{const{style:l,backgroundSize:b=e.backgroundSize,backgroundPositionX:m=e.backgroundPositionX,backgroundPositionY:p=e.backgroundPositionY,storageKey:k=a,...P}=u;return y.createElement(D,{storageKey:k,imageProps:{...P,style:K({border:`4px solid ${E.colors.primary}`,...l||{}},b,m,p)}})},o=c.bind({});o.args={...e,width:1e3,height:1500,text:"1000x1500",storageKey:a};const r=c.bind({});r.args={...e,width:1600,height:900,text:"1600x900",storageKey:a};var n,t,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,d,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const X=["StandardPin","ProfileCover"];export{r as ProfileCover,o as StandardPin,X as __namedExportsOrder,I as default};
