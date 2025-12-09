import{R as x}from"./index-CgfFrydU.js";import{I as C}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as z,a as o,D as I,c as X}from"./storyControls-DiYvdbOM.js";import{b as T}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const t="platforms/facebook/image",U={title:"Platforms/Facebook",component:C,parameters:{controls:{expanded:!0}},argTypes:{...z,storageKey:{table:{disable:!0}}}},s=S=>{const{style:D,backgroundSize:f=o.backgroundSize,backgroundPositionX:K=o.backgroundPositionX,backgroundPositionY:h=o.backgroundPositionY,storageKey:Y=t,...E}=S;return x.createElement(I,{storageKey:Y,imageProps:{...E,style:X({border:`4px solid ${T.colors.primary}`,...D||{}},f,K,h)}})},r=s.bind({});r.args={...o,width:1080,height:1350,text:"1080x1350",storageKey:t};const e=s.bind({});e.args={...o,width:176,height:176,text:"176x176",style:{borderRadius:"50%"},storageKey:t};const a=s.bind({});a.args={...o,width:196,height:196,text:"196x196",style:{borderRadius:"50%"},storageKey:t};const n=s.bind({});n.args={...o,width:851,height:315,text:"851x315",storageKey:t};var i,g,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var l,k,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(p=(k=a.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var m,P,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(y=(P=n.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const $=["FeedImage","PageProfilePhotoDesktop","PageProfilePhotoMobile","PageCoverPhoto"];export{r as FeedImage,n as PageCoverPhoto,e as PageProfilePhotoDesktop,a as PageProfilePhotoMobile,$ as __namedExportsOrder,U as default};
