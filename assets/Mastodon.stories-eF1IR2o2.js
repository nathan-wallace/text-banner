import{R as P}from"./index-CgfFrydU.js";import{I as S}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as f,a as e,D,c as K}from"./storyControls-DiYvdbOM.js";import{b as E}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const a="platforms/mastodon/image",C={title:"Platforms/Mastodon",component:S,parameters:{controls:{expanded:!0}},argTypes:{...f,storageKey:{table:{disable:!0}}}},c=u=>{const{style:l,backgroundSize:b=e.backgroundSize,backgroundPositionX:m=e.backgroundPositionX,backgroundPositionY:p=e.backgroundPositionY,storageKey:k=a,...y}=u;return P.createElement(D,{storageKey:k,imageProps:{...y,style:K({border:`4px solid ${E.colors.primary}`,...l||{}},b,m,p)}})},o=c.bind({});o.args={...e,width:400,height:400,text:"400x400",style:{borderRadius:"50%"},storageKey:a};const r=c.bind({});r.args={...e,width:1500,height:500,text:"1500x500",storageKey:a};var t,n,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`args => {
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
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,d,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const I=["Avatar","Header"];export{o as Avatar,r as Header,I as __namedExportsOrder,C as default};
