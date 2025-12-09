import{R as f}from"./index-CgfFrydU.js";import{I}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as Y,a as o,D as E,c as x}from"./storyControls-XXbn34Dv.js";import{b as T}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const n="platforms/tumblr/image",O={title:"Platforms/Tumblr",component:I,parameters:{controls:{expanded:!0}},argTypes:{...Y,storageKey:{table:{disable:!0}}}},t=p=>{const{style:k,backgroundSize:y=o.backgroundSize,backgroundPositionX:P=o.backgroundPositionX,backgroundPositionY:S=o.backgroundPositionY,storageKey:D=n,...K}=p;return f.createElement(E,{storageKey:D,imageProps:{...K,style:x({border:`4px solid ${T.colors.primary}`,...k||{}},y,P,S)}})},r=t.bind({});r.args={...o,width:128,height:128,text:"128x128",style:{borderRadius:"50%"},storageKey:n};const e=t.bind({});e.args={...o,width:2048,height:1152,text:"2048x1152",storageKey:n};const a=t.bind({});a.args={...o,width:540,height:810,text:"540x810",storageKey:n};var s,i,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var d,c,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,b,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const F=["Avatar","HeaderImage","InlinePostImage"];export{r as Avatar,e as HeaderImage,a as InlinePostImage,F as __namedExportsOrder,O as default};
