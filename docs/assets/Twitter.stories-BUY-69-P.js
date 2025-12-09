import{R as K}from"./index-CgfFrydU.js";import{I}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as Y,a as o,D as E,c as h}from"./storyControls-XXbn34Dv.js";import{b as x}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const n="platforms/twitter/image",w={title:"Platforms/X (Twitter)",component:I,parameters:{controls:{expanded:!0}},argTypes:{...Y,storageKey:{table:{disable:!0}}}},t=p=>{const{style:k,backgroundSize:y=o.backgroundSize,backgroundPositionX:P=o.backgroundPositionX,backgroundPositionY:S=o.backgroundPositionY,storageKey:f=n,...D}=p;return K.createElement(E,{storageKey:f,imageProps:{...D,style:h({border:`4px solid ${x.colors.primary}`,...k||{}},y,P,S)}})},r=t.bind({});r.args={...o,width:1200,height:675,text:"1200x675",storageKey:n};const e=t.bind({});e.args={...o,width:400,height:400,text:"400x400",style:{borderRadius:"50%"},storageKey:n};const a=t.bind({});a.args={...o,width:1500,height:500,text:"1500x500",storageKey:n};var s,i,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const O=["InStreamImage","ProfilePhoto","HeaderImage"];export{a as HeaderImage,r as InStreamImage,e as ProfilePhoto,O as __namedExportsOrder,w as default};
