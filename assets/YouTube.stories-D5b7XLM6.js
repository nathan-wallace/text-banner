import{R as I}from"./index-CgfFrydU.js";import{I as x}from"./ImageWithPlaceholder-D2jZaSUu.js";import{b as z,a as o,D as T,c as X}from"./storyControls-DiYvdbOM.js";import{b as E}from"./brand-BTa54lbn.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Co38GRlK.js";import"./colors-DZBBGjh9.js";const t={default:"platforms/youtube/shared",channelBanner:"platforms/youtube/channel-banner",channelBannerSafeArea:"platforms/youtube/channel-banner-safe-area",videoThumbnail:"platforms/youtube/video-thumbnail",channelIcon:"platforms/youtube/channel-icon"},w={title:"Platforms/YouTube",component:x,parameters:{controls:{expanded:!0}},argTypes:{...z,storageKey:{table:{disable:!0}}}},s=f=>{const{style:h,backgroundSize:P=o.backgroundSize,backgroundPositionX:K=o.backgroundPositionX,backgroundPositionY:Y=o.backgroundPositionY,storageKey:C=t.default,...D}=f;return I.createElement(T,{storageKey:C,imageProps:{...D,style:X({border:`4px solid ${E.colors.primary}`,...h||{}},P,K,Y)}})},n=s.bind({});n.args={...o,width:2560,height:1440,text:"2560x1440",storageKey:t.channelBanner};const e=s.bind({});e.args={...o,width:1235,height:338,text:"Safe Area 1235x338",storageKey:t.channelBannerSafeArea};const r=s.bind({});r.args={...o,width:1280,height:720,text:"1280x720",storageKey:t.videoThumbnail};const a=s.bind({});a.args={...o,width:800,height:800,text:"High-res Icon",style:{borderRadius:"50%"},storageKey:t.channelIcon};var i,u,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = STORAGE_KEYS.default,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,g,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = STORAGE_KEYS.default,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(l=(g=e.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var b,m,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = STORAGE_KEYS.default,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var k,y,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = STORAGE_KEYS.default,
    ...rest
  } = args;
  return <DroppableImage storageKey={storageKey} imageProps={{
    ...rest,
    style: buildImageStyle({
      border: \`4px solid \${brand.colors.primary}\`,
      ...(style || {})
    }, backgroundSize, backgroundPositionX, backgroundPositionY)
  }} />;
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const v=["ChannelBanner","ChannelBannerSafeArea","VideoThumbnail","ChannelIcon"];export{n as ChannelBanner,e as ChannelBannerSafeArea,a as ChannelIcon,r as VideoThumbnail,v as __namedExportsOrder,w as default};
