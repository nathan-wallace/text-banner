import{R as P}from"./index-CgfFrydU.js";import{I as S}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as D,a as e,D as f,c as K}from"./storyControls-XXbn34Dv.js";import{b as E}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const a="platforms/discord/image",C={title:"Platforms/Discord",component:S,parameters:{controls:{expanded:!0}},argTypes:{...D,storageKey:{table:{disable:!0}}}},g=u=>{const{style:l,backgroundSize:b=e.backgroundSize,backgroundPositionX:p=e.backgroundPositionX,backgroundPositionY:m=e.backgroundPositionY,storageKey:k=a,...y}=u;return P.createElement(f,{storageKey:k,imageProps:{...y,style:K({border:`4px solid ${E.colors.primary}`,...l||{}},b,p,m)}})},o=g.bind({});o.args={...e,width:960,height:540,text:"960x540",storageKey:a};const r=g.bind({});r.args={...e,width:1920,height:1080,text:"1920x1080",storageKey:a};var n,t,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
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
}`,...(s=(t=o.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const X=["ServerBanner","InviteSplash"];export{r as InviteSplash,o as ServerBanner,X as __namedExportsOrder,C as default};
