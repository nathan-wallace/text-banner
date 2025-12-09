import{R as b}from"./index-CgfFrydU.js";import{I as p}from"./ImageWithPlaceholder-CyTsu8JG.js";import{b as m,a as r,D as k,c as y}from"./storyControls-XXbn34Dv.js";import{b as P}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const s="platforms/google-display-network/image",_={title:"Platforms/Google Display Network",component:p,parameters:{controls:{expanded:!0}},argTypes:{...m,storageKey:{table:{disable:!0}}}},S=n=>{const{style:i,backgroundSize:d=r.backgroundSize,backgroundPositionX:g=r.backgroundPositionX,backgroundPositionY:l=r.backgroundPositionY,storageKey:c=s,...u}=n;return b.createElement(k,{storageKey:c,imageProps:{...u,style:y({border:`4px solid ${P.colors.primary}`,...i||{}},d,g,l)}})},o=S.bind({});o.args={...r,width:300,height:250,text:"300x250",storageKey:s};var e,a,t;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
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
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const I=["Standard"];export{o as Standard,I as __namedExportsOrder,_ as default};
