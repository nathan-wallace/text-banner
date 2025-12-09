import{R as b}from"./index-CgfFrydU.js";import{I as u}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as p,a as r,D as k,c as y}from"./storyControls-DiYvdbOM.js";import{b as P}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const n="platforms/email-blog/image",_={title:"Platforms/Email and Blog",component:u,parameters:{controls:{expanded:!0}},argTypes:{...p,storageKey:{table:{disable:!0}}}},S=s=>{const{style:i,backgroundSize:d=r.backgroundSize,backgroundPositionX:g=r.backgroundPositionX,backgroundPositionY:l=r.backgroundPositionY,storageKey:c=n,...m}=s;return b.createElement(k,{storageKey:c,imageProps:{...m,style:y({border:`4px solid ${P.colors.primary}`,...i||{}},d,g,l)}})},o=S.bind({});o.args={...r,width:600,height:400,text:"600x400",storageKey:n};var a,e,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
}`,...(t=(e=o.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const A=["Standard"];export{o as Standard,A as __namedExportsOrder,_ as default};
