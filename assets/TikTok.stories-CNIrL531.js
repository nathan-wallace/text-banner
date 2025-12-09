import{R as f}from"./index-CgfFrydU.js";import{I as T}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as Y,a as o,D as E,c as x}from"./storyControls-DiYvdbOM.js";import{b as z}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const n="platforms/tiktok/image",R={title:"Platforms/TikTok",component:T,parameters:{controls:{expanded:!0}},argTypes:{...Y,storageKey:{table:{disable:!0}}}},t=m=>{const{style:p,backgroundSize:y=o.backgroundSize,backgroundPositionX:P=o.backgroundPositionX,backgroundPositionY:S=o.backgroundPositionY,storageKey:D=n,...K}=m;return f.createElement(E,{storageKey:D,imageProps:{...K,style:x({border:`4px solid ${z.colors.primary}`,...p||{}},y,P,S)}})},r=t.bind({});r.args={...o,width:1080,height:1920,text:"1080x1920",storageKey:n};const e=t.bind({});e.args={...o,width:1080,height:1080,text:"1080x1080",storageKey:n};const a=t.bind({});a.args={...o,width:1920,height:1080,text:"1920x1080",storageKey:n};var s,i,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,b,k;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const O=["VerticalVideo","SquareVideo","HorizontalVideo"];export{a as HorizontalVideo,e as SquareVideo,r as VerticalVideo,O as __namedExportsOrder,R as default};
