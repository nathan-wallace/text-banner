import{R as f}from"./index-CgfFrydU.js";import{I as C}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as Y,a as o,D as E,c as x}from"./storyControls-DiYvdbOM.js";import{b as I}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const a="platforms/reddit/image",O={title:"Platforms/Reddit",component:C,parameters:{controls:{expanded:!0}},argTypes:{...Y,storageKey:{table:{disable:!0}}}},t=p=>{const{style:k,backgroundSize:y=o.backgroundSize,backgroundPositionX:P=o.backgroundPositionX,backgroundPositionY:S=o.backgroundPositionY,storageKey:D=a,...K}=p;return f.createElement(E,{storageKey:D,imageProps:{...K,style:x({border:`4px solid ${I.colors.primary}`,...k||{}},y,P,S)}})},r=t.bind({});r.args={...o,width:300,height:300,text:"300x300",style:{borderRadius:"50%"},storageKey:a};const e=t.bind({});e.args={...o,width:1072,height:128,text:"1072x128",storageKey:a};const n=t.bind({});n.args={...o,width:1080,height:128,text:"1080x128",storageKey:a};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,c,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,l,m;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
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
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const B=["CommunityIcon","CommunityBannerDesktop","CommunityBannerMobile"];export{e as CommunityBannerDesktop,n as CommunityBannerMobile,r as CommunityIcon,B as __namedExportsOrder,O as default};
