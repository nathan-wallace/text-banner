import{R as t}from"./index-CgfFrydU.js";import{P as e}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function h({as:a="div",children:n,minSize:i=32,maxSize:g=120,fitRatio:r=8,lineHeight:l=1,align:c="center",uppercase:s=!0,letterSpacing:d="0.08em",color:x="#ffffff",style:p={},weight:u=700,shadow:o}){const m={fontSize:`clamp(${i}px, calc(${r} * 1cqw), ${g}px)`,lineHeight:l,textAlign:c,textTransform:s?"uppercase":"none",letterSpacing:d,margin:0,padding:0,color:x,fontFamily:'"Bebas Neue", sans-serif',fontWeight:u,textWrap:"balance",textShadow:o,...p};return t.createElement(a,{style:m},n)}h.propTypes={as:e.elementType,children:e.node.isRequired,minSize:e.number,maxSize:e.number,fitRatio:e.number,lineHeight:e.oneOfType([e.number,e.string]),align:e.oneOf(["left","center","right"]),uppercase:e.bool,letterSpacing:e.string,color:e.string,style:e.object,weight:e.oneOfType([e.string,e.number]),shadow:e.string};h.__docgenInfo={description:"Fluid text powered by CSS container query units.\nThe parent element must have `container-type: inline-size` to enable cqw scaling.",methods:[],displayName:"FitText",props:{as:{defaultValue:{value:'"div"',computed:!1},description:"",type:{name:"elementType"},required:!1},minSize:{defaultValue:{value:"32",computed:!1},description:"",type:{name:"number"},required:!1},maxSize:{defaultValue:{value:"120",computed:!1},description:"",type:{name:"number"},required:!1},fitRatio:{defaultValue:{value:"8",computed:!1},description:"",type:{name:"number"},required:!1},lineHeight:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},align:{defaultValue:{value:'"center"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"right"',computed:!1}]},required:!1},uppercase:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},letterSpacing:{defaultValue:{value:'"0.08em"',computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#ffffff"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},weight:{defaultValue:{value:"700",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},children:{description:"",type:{name:"node"},required:!0},shadow:{description:"",type:{name:"string"},required:!1}}};const W=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`,z={blue:"https://www.hhs.gov/sites/default/files/logo-white-lg.png",white:"https://www.hhs.gov/sites/default/files/logo-blue-lg.png"},H=a=>({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px",boxSizing:"border-box",background:a==="white"?"linear-gradient(180deg, #f5f7fb 0%, #ffffff 60%, #e8ecf3 100%)":"radial-gradient(circle at 15% 20%, rgba(46, 74, 117, 0.45), transparent 40%), radial-gradient(circle at 80% 80%, rgba(15, 39, 77, 0.45), transparent 36%), linear-gradient(135deg, #0b1d36, #142f57)"}),L=(a,n,i)=>({maxWidth:`${a}px`,width:"100%",containerType:"inline-size",containerName:"banner",borderRadius:`${i}px`,padding:`${n}px`,boxSizing:"border-box",background:"linear-gradient(145deg, rgba(11, 29, 54, 0.95), rgba(20, 47, 87, 0.9)) padding-box, linear-gradient(135deg, #8bd8ff, #1f4f82) border-box",border:"12px solid transparent",backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",boxShadow:"0 20px 50px rgba(0,0,0,0.25)"}),P=(a,n)=>n!=null&&n.trim()?n:z[a]||z.blue,j=`
  .logo-banner { display: flex; align-items: stretch; justify-content: center; gap: 24px; width: 100%; box-sizing: border-box; --logo-size-ratio: 0.32; }
  .logo-banner__logo { height: auto; max-height: 360px; width: auto; object-fit: contain; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.28)); flex: 0 0 calc(var(--logo-size-ratio, 0.32) * 100%); max-width: calc(var(--logo-size-ratio, 0.32) * 100%); }
  .logo-banner__card { width: 100%; }

  @media (max-width: 900px) {
    .logo-banner { gap: 18px; }
  }

  @media (max-width: 768px) {
    .logo-banner { flex-direction: column; align-items: center; max-width: 100% !important; }
    .logo-banner__logo { width: 140px; height: auto; }
  }
`,M={title:"News Banner",parameters:{layout:"fullscreen",controls:{expanded:!0,sort:"requiredFirst"}},args:{kicker:"What they are saying...",headline:"About HHS's actions to protect parents' rights in children's health decisions",maxWidth:960,padding:32,cornerRadius:18,fitRatio:9,minSize:28,maxSize:120,lineHeight:.9,accentColor:"#8bd8ff",subheadingFitRatio:7.5,backgroundTheme:"blue",logoUrl:"",logoSizeRatio:.32,layoutStyle:"standard",textAlign:"center",contentSpacing:12,kickerBackground:"#0b1d36",kickerTextColor:"#ffffff",subtextBackground:"#ffffff",subtextTextColor:"#0b1d36"},argTypes:{kicker:{control:"text",table:{category:"Content"}},headline:{control:"text",table:{category:"Content"}},logoUrl:{control:"text",table:{category:"Content"}},layoutStyle:{control:{type:"inline-radio"},options:["standard","splitSections"],description:"Choose splitSections to place the kicker on a blue bar and the subtext on a white bar inside a single card",table:{category:"Layout"}},maxWidth:{control:{type:"range",min:320,max:1280,step:10},table:{category:"Layout"}},padding:{control:{type:"range",min:12,max:72,step:2},table:{category:"Layout"}},cornerRadius:{control:{type:"range",min:0,max:60,step:2},table:{category:"Layout"}},logoSizeRatio:{control:{type:"range",min:.15,max:.5,step:.01},description:"Adjust the proportional width of the logo relative to the text card",table:{category:"Layout"}},fitRatio:{control:{type:"range",min:4,max:16,step:.1},table:{category:"Typography"}},subheadingFitRatio:{control:{type:"range",min:3,max:14,step:.1},table:{category:"Typography"}},minSize:{control:{type:"range",min:12,max:80,step:1},table:{category:"Typography"}},maxSize:{control:{type:"range",min:60,max:200,step:2},table:{category:"Typography"}},lineHeight:{control:{type:"range",min:.7,max:1.3,step:.01},table:{category:"Typography"}},textAlign:{control:{type:"inline-radio"},options:["left","center","right"],table:{category:"Typography"},description:"Align the kicker and headline consistently across layouts"},contentSpacing:{control:{type:"range",min:4,max:36,step:1},table:{category:"Typography"},description:"Adjust the spacing between the kicker and headline"},accentColor:{control:"color",table:{category:"Colors"}},backgroundTheme:{control:{type:"inline-radio"},options:["blue","white"],table:{category:"Colors"}},kickerBackground:{control:"color",table:{category:"Colors"}},kickerTextColor:{control:"color",table:{category:"Colors"}},subtextBackground:{control:"color",table:{category:"Colors"}},subtextTextColor:{control:"color",table:{category:"Colors"}}}},A=a=>{const{kicker:n,headline:i,padding:g,cornerRadius:r,fitRatio:l,minSize:c,maxSize:s,lineHeight:d,accentColor:x,subheadingFitRatio:p,layoutStyle:u,textAlign:o,contentSpacing:m,kickerBackground:f,kickerTextColor:y,subtextBackground:k,subtextTextColor:S}=a,b=u==="splitSections"&&o==="center"?"left":o;if(u==="splitSections"){const T=Math.max(0,r-6);return t.createElement("div",{style:{borderRadius:`${T}px`,overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.08)"}},t.createElement("div",{style:{backgroundColor:f,padding:`${g}px`}},t.createElement(h,{as:"h1",minSize:c,maxSize:s,fitRatio:l,lineHeight:d,align:b,color:y,shadow:"0 6px 25px rgba(0,0,0,0.2)"},n)),t.createElement("div",{style:{backgroundColor:k,padding:`${g}px`}},t.createElement(h,{as:"h2",minSize:c-6,maxSize:s-8,fitRatio:p,lineHeight:d+.06,align:b,color:S,letterSpacing:"0.04em",weight:600,style:{textTransform:"none"}},i)))}return t.createElement("div",{style:{display:"flex",flexDirection:"column",gap:`${m}px`}},t.createElement(h,{as:"h1",minSize:c,maxSize:s,fitRatio:l,lineHeight:d,align:o,shadow:"0 6px 25px rgba(0,0,0,0.25)"},n),t.createElement(h,{as:"h2",minSize:c-6,maxSize:s-8,fitRatio:p,lineHeight:d+.06,color:x,letterSpacing:"0.04em",style:{marginTop:0},weight:600,align:o},i))},C=a=>{const{kicker:n,headline:i,maxWidth:g,padding:r,cornerRadius:l,fitRatio:c,minSize:s,maxSize:d,lineHeight:x,accentColor:p,subheadingFitRatio:u,backgroundTheme:o,layoutStyle:m,textAlign:f,contentSpacing:y,kickerBackground:k,kickerTextColor:S,subtextBackground:b,subtextTextColor:T}=a,R=m==="splitSections"?0:r;return t.createElement("div",{style:H(o)},t.createElement("style",null,W),t.createElement("section",{style:L(g,R,l)},A({kicker:n,headline:i,padding:r,cornerRadius:l,fitRatio:c,minSize:s,maxSize:d,lineHeight:x,accentColor:p,subheadingFitRatio:u,layoutStyle:m,textAlign:f,contentSpacing:y,kickerBackground:k,kickerTextColor:S,subtextBackground:b,subtextTextColor:T})))},v=a=>{const{kicker:n,headline:i,maxWidth:g,padding:r,cornerRadius:l,fitRatio:c,minSize:s,maxSize:d,lineHeight:x,accentColor:p,subheadingFitRatio:u,backgroundTheme:o,logoSizeRatio:m,logoUrl:f,layoutStyle:y,textAlign:k,contentSpacing:S,kickerBackground:b,kickerTextColor:T,subtextBackground:R,subtextTextColor:N}=a,$=P(o,f),V=y==="splitSections"?0:r;return t.createElement("div",{style:H(o)},t.createElement("style",null,W+j),t.createElement("div",{className:"logo-banner",style:{maxWidth:`${g+r*2}px`,"--logo-size-ratio":m}},t.createElement("img",{src:$,alt:"Banner logo",className:"logo-banner__logo"}),t.createElement("section",{className:"logo-banner__card",style:L(g,V,l)},A({kicker:n,headline:i,padding:r,cornerRadius:l,fitRatio:c,minSize:s,maxSize:d,lineHeight:x,accentColor:p,subheadingFitRatio:u,layoutStyle:y,textAlign:k,contentSpacing:S,kickerBackground:b,kickerTextColor:T,subtextBackground:R,subtextTextColor:N}))))};C.__docgenInfo={description:"",methods:[],displayName:"FitTextBanner"};v.__docgenInfo={description:"",methods:[],displayName:"FitTextBannerWithLogo"};var w,B,_;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const {
    kicker,
    headline,
    maxWidth,
    padding,
    cornerRadius,
    fitRatio,
    minSize,
    maxSize,
    lineHeight,
    accentColor,
    subheadingFitRatio,
    backgroundTheme,
    layoutStyle,
    textAlign,
    contentSpacing,
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor
  } = args;
  const cardPadding = layoutStyle === "splitSections" ? 0 : padding;
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport}</style>
      <section style={cardStyle(maxWidth, cardPadding, cornerRadius)}>
        {renderBannerContent({
        kicker,
        headline,
        padding,
        cornerRadius,
        fitRatio,
        minSize,
        maxSize,
        lineHeight,
        accentColor,
        subheadingFitRatio,
        layoutStyle,
        textAlign,
        contentSpacing,
        kickerBackground,
        kickerTextColor,
        subtextBackground,
        subtextTextColor
      })}
      </section>
    </div>;
}`,...(_=(B=C.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,F,q;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const {
    kicker,
    headline,
    maxWidth,
    padding,
    cornerRadius,
    fitRatio,
    minSize,
    maxSize,
    lineHeight,
    accentColor,
    subheadingFitRatio,
    backgroundTheme,
    logoSizeRatio,
    logoUrl,
    layoutStyle,
    textAlign,
    contentSpacing,
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor
  } = args;
  const computedLogoUrl = resolveLogo(backgroundTheme, logoUrl);
  const cardPadding = layoutStyle === "splitSections" ? 0 : padding;
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport + responsiveLogoStyles}</style>
      <div className="logo-banner" style={{
      maxWidth: \`\${maxWidth + padding * 2}px\`,
      "--logo-size-ratio": logoSizeRatio
    }}>
          <img src={computedLogoUrl} alt="Banner logo" className="logo-banner__logo" />
        <section className="logo-banner__card" style={cardStyle(maxWidth, cardPadding, cornerRadius)}>
          {renderBannerContent({
          kicker,
          headline,
          padding,
          cornerRadius,
          fitRatio,
          minSize,
          maxSize,
          lineHeight,
          accentColor,
          subheadingFitRatio,
          layoutStyle,
          textAlign,
          contentSpacing,
          kickerBackground,
          kickerTextColor,
          subtextBackground,
          subtextTextColor
        })}
        </section>
      </div>
    </div>;
}`,...(q=(F=v.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const D=["FitTextBanner","FitTextBannerWithLogo"];export{C as FitTextBanner,v as FitTextBannerWithLogo,D as __namedExportsOrder,M as default};
