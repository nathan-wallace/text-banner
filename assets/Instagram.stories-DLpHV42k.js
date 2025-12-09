import{R as h}from"./index-CgfFrydU.js";import{I as z}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as C,a as o,D as I,c as T}from"./storyControls-DiYvdbOM.js";import{b as X}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const s="platforms/instagram/image",U={title:"Platforms/Instagram & Threads",component:z,parameters:{controls:{expanded:!0}},argTypes:{...C,storageKey:{table:{disable:!0}}}},t=S=>{const{style:D,backgroundSize:K=o.backgroundSize,backgroundPositionX:f=o.backgroundPositionX,backgroundPositionY:Y=o.backgroundPositionY,storageKey:E=s,...x}=S;return h.createElement(I,{storageKey:E,imageProps:{...x,style:T({border:`4px solid ${X.colors.primary}`,...D||{}},K,f,Y)}})},r=t.bind({});r.args={...o,width:1080,height:1350,text:"1080x1350",storageKey:s};const e=t.bind({});e.args={...o,width:1080,height:1080,text:"1080x1080",storageKey:s};const n=t.bind({});n.args={...o,width:1080,height:566,text:"1080x566",storageKey:s};const a=t.bind({});a.args={...o,width:1080,height:1920,text:"1080x1920",storageKey:s};var i,g,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var c,u,b;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var k,y,P;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
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
}`,...(P=(y=a.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const $=["PortraitFeed","SquareFeed","LandscapeFeed","StoriesAndReels"];export{n as LandscapeFeed,r as PortraitFeed,e as SquareFeed,a as StoriesAndReels,$ as __namedExportsOrder,U as default};
