import{R as x}from"./index-CgfFrydU.js";import{I as T}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as z,a as o,D as C,c as X}from"./storyControls-XXbn34Dv.js";import{b as _}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const t="platforms/twitch/image",G={title:"Platforms/Twitch",component:T,parameters:{controls:{expanded:!0}},argTypes:{...z,storageKey:{table:{disable:!0}}}},s=S=>{const{style:f,backgroundSize:D=o.backgroundSize,backgroundPositionX:K=o.backgroundPositionX,backgroundPositionY:Y=o.backgroundPositionY,storageKey:h=t,...E}=S;return x.createElement(C,{storageKey:h,imageProps:{...E,style:X({border:`4px solid ${_.colors.primary}`,...f||{}},D,K,Y)}})},r=s.bind({});r.args={...o,width:800,height:800,text:"Upload ≥800x800",style:{borderRadius:"50%"},storageKey:t};const e=s.bind({});e.args={...o,width:1920,height:480,text:"1920x480",storageKey:t};const n=s.bind({});n.args={...o,width:1920,height:1080,text:"1920x1080",storageKey:t};const a=s.bind({});a.args={...o,width:320,height:400,text:"320px wide",storageKey:t};var i,g,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var d,u,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var b,p,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(k=(p=n.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var m,y,P;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(P=(y=a.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const L=["ProfilePicture","ProfileBanner","VideoPlayerBanner","Panel"];export{a as Panel,e as ProfileBanner,r as ProfilePicture,n as VideoPlayerBanner,L as __namedExportsOrder,G as default};
