import{R as f}from"./index-CgfFrydU.js";import{I as A}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as Y,a as o,D as h,c as E}from"./storyControls-DiYvdbOM.js";import{b as x}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const n="platforms/snapchat/image",F={title:"Platforms/Snapchat",component:A,parameters:{controls:{expanded:!0}},argTypes:{...Y,storageKey:{table:{disable:!0}}}},t=m=>{const{style:k,backgroundSize:y=o.backgroundSize,backgroundPositionX:P=o.backgroundPositionX,backgroundPositionY:S=o.backgroundPositionY,storageKey:D=n,...K}=m;return f.createElement(h,{storageKey:D,imageProps:{...K,style:E({border:`4px solid ${x.colors.primary}`,...k||{}},y,P,S)}})},r=t.bind({});r.args={...o,width:1080,height:1920,text:"1080x1920",storageKey:n};const e=t.bind({});e.args={...o,width:945,height:2048,text:"945x2048",storageKey:n};const a=t.bind({});a.args={...o,width:720,height:1560,text:"720x1560",storageKey:n};var s,i,g;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(g=(i=r.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var c,d,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var l,b,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const O=["StoriesOrAdsCanvas","StaticARFilter","AnimatedARFilter"];export{a as AnimatedARFilter,e as StaticARFilter,r as StoriesOrAdsCanvas,O as __namedExportsOrder,F as default};
