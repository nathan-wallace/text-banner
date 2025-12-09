import{R as e}from"./index-CgfFrydU.js";import{P as t}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function g({as:i="div",children:n,minSize:l=32,maxSize:s=120,fitRatio:d=8,lineHeight:m=1,align:p="center",uppercase:a=!0,letterSpacing:o="0.08em",color:r="#ffffff",style:u={},weight:x=700,shadow:c}){const h={fontSize:`clamp(${l}px, calc(${d} * 1cqw), ${s}px)`,lineHeight:m,textAlign:p,textTransform:a?"uppercase":"none",letterSpacing:o,margin:0,padding:0,color:r,fontFamily:'"Bebas Neue", sans-serif',fontWeight:x,textWrap:"balance",textShadow:c,...u};return e.createElement(i,{style:h},n)}g.propTypes={as:t.elementType,children:t.node.isRequired,minSize:t.number,maxSize:t.number,fitRatio:t.number,lineHeight:t.oneOfType([t.number,t.string]),align:t.oneOf(["left","center","right"]),uppercase:t.bool,letterSpacing:t.string,color:t.string,style:t.object,weight:t.oneOfType([t.string,t.number]),shadow:t.string};g.__docgenInfo={description:"Fluid text powered by CSS container query units.\nThe parent element must have `container-type: inline-size` to enable cqw scaling.",methods:[],displayName:"FitText",props:{as:{defaultValue:{value:'"div"',computed:!1},description:"",type:{name:"elementType"},required:!1},minSize:{defaultValue:{value:"32",computed:!1},description:"",type:{name:"number"},required:!1},maxSize:{defaultValue:{value:"120",computed:!1},description:"",type:{name:"number"},required:!1},fitRatio:{defaultValue:{value:"8",computed:!1},description:"",type:{name:"number"},required:!1},lineHeight:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},align:{defaultValue:{value:'"center"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"right"',computed:!1}]},required:!1},uppercase:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},letterSpacing:{defaultValue:{value:'"0.08em"',computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#ffffff"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},weight:{defaultValue:{value:"700",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},children:{description:"",type:{name:"node"},required:!0},shadow:{description:"",type:{name:"string"},required:!1}}};const z=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`,w={blue:"https://www.hhs.gov/sites/default/files/logo-white-lg.png",white:"https://www.hhs.gov/sites/default/files/logo-blue-lg.png"},T=i=>({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px",boxSizing:"border-box",background:i==="white"?"linear-gradient(180deg, #f5f7fb 0%, #ffffff 60%, #e8ecf3 100%)":"radial-gradient(circle at 15% 20%, rgba(46, 74, 117, 0.45), transparent 40%), radial-gradient(circle at 80% 80%, rgba(15, 39, 77, 0.45), transparent 36%), linear-gradient(135deg, #0b1d36, #142f57)"}),$=(i,n,l)=>({maxWidth:`${i}px`,width:"100%",containerType:"inline-size",containerName:"banner",borderRadius:`${l}px`,padding:`${n}px`,boxSizing:"border-box",background:"linear-gradient(145deg, rgba(11, 29, 54, 0.95), rgba(20, 47, 87, 0.9)) padding-box, linear-gradient(135deg, #8bd8ff, #1f4f82) border-box",border:"12px solid transparent",backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",boxShadow:"0 20px 50px rgba(0,0,0,0.25)"}),I=(i,n)=>n!=null&&n.trim()?n:w[i]||w.blue,j=`
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
`,U={title:"News Banner",parameters:{layout:"fullscreen"},args:{kicker:"What they are saying...",headline:"About HHS's actions to protect parents' rights in children's health decisions",maxWidth:960,padding:32,cornerRadius:18,fitRatio:9,minSize:28,maxSize:120,lineHeight:.9,accentColor:"#8bd8ff",subheadingFitRatio:7.5,backgroundTheme:"blue",logoUrl:"",logoSizeRatio:.32,kickerBackground:"#0b1d36",kickerTextColor:"#ffffff",subtextBackground:"#ffffff",subtextTextColor:"#0b1d36"},argTypes:{kicker:{control:"text"},headline:{control:"text"},maxWidth:{control:{type:"range",min:320,max:1280,step:10}},padding:{control:{type:"range",min:12,max:72,step:2}},cornerRadius:{control:{type:"range",min:0,max:60,step:2}},fitRatio:{control:{type:"range",min:4,max:16,step:.1}},subheadingFitRatio:{control:{type:"range",min:3,max:14,step:.1}},minSize:{control:{type:"range",min:12,max:80,step:1}},maxSize:{control:{type:"range",min:60,max:200,step:2}},lineHeight:{control:{type:"range",min:.7,max:1.3,step:.01}},accentColor:{control:"color"},backgroundTheme:{control:{type:"inline-radio"},options:["blue","white"]},logoUrl:{control:"text"},logoSizeRatio:{control:{type:"range",min:.15,max:.5,step:.01},description:"Adjust the proportional width of the logo relative to the text card"},kickerBackground:{control:"color"},kickerTextColor:{control:"color"},subtextBackground:{control:"color"},subtextTextColor:{control:"color"}}},f=i=>{const{kicker:n,headline:l,maxWidth:s,padding:d,cornerRadius:m,fitRatio:p,minSize:a,maxSize:o,lineHeight:r,accentColor:u,subheadingFitRatio:x,backgroundTheme:c}=i;return e.createElement("div",{style:T(c)},e.createElement("style",null,z),e.createElement("section",{style:$(s,d,m)},e.createElement("div",{style:{display:"flex",justifyContent:"center"}}),e.createElement(g,{as:"h1",minSize:a,maxSize:o,fitRatio:p,lineHeight:r,shadow:"0 6px 25px rgba(0,0,0,0.25)"},n),e.createElement(g,{as:"h2",minSize:a-6,maxSize:o-8,fitRatio:x,lineHeight:r+.06,color:u,letterSpacing:"0.04em",style:{marginTop:"10px"},weight:600},l)))},b=i=>{const{kicker:n,headline:l,maxWidth:s,padding:d,cornerRadius:m,fitRatio:p,minSize:a,maxSize:o,lineHeight:r,accentColor:u,subheadingFitRatio:x,kickerBackground:c,kickerTextColor:h,subtextBackground:S,subtextTextColor:k,backgroundTheme:L}=i,v=(V,R)=>({backgroundColor:V,padding:`${d}px`,borderRadius:`${m}px`,border:R?`3px solid ${R}`:void 0,boxShadow:"0 16px 36px rgba(0,0,0,0.18)",boxSizing:"border-box"});return e.createElement("div",{style:T(L)},e.createElement("style",null,z),e.createElement("div",{style:{maxWidth:`${s}px`,width:"100%",containerType:"inline-size",containerName:"banner",display:"flex",flexDirection:"column",gap:"18px"}},e.createElement("div",{style:v(c)},e.createElement(g,{as:"h1",minSize:a,maxSize:o,fitRatio:p,lineHeight:r,align:"left",color:h,shadow:"0 6px 25px rgba(0,0,0,0.2)"},n)),e.createElement("div",{style:v(S,u)},e.createElement(g,{as:"h2",minSize:a-6,maxSize:o-8,fitRatio:x,lineHeight:r+.06,align:"left",color:k,letterSpacing:"0.04em",weight:600,style:{textTransform:"none"}},l))))},y=i=>{const{kicker:n,headline:l,maxWidth:s,padding:d,cornerRadius:m,fitRatio:p,minSize:a,maxSize:o,lineHeight:r,accentColor:u,subheadingFitRatio:x,backgroundTheme:c,logoSizeRatio:h,logoUrl:S}=i,k=I(c,S);return e.createElement("div",{style:T(c)},e.createElement("style",null,z+j),e.createElement("div",{className:"logo-banner",style:{maxWidth:`${s+d*2}px`,"--logo-size-ratio":h}},e.createElement("img",{src:k,alt:"Banner logo",className:"logo-banner__logo"}),e.createElement("section",{className:"logo-banner__card",style:$(s,d,m)},e.createElement(g,{as:"h1",minSize:a,maxSize:o,fitRatio:p,lineHeight:r,align:"left",shadow:"0 6px 25px rgba(0,0,0,0.25)"},n),e.createElement(g,{as:"h2",minSize:a-6,maxSize:o-8,fitRatio:x,lineHeight:r+.06,color:u,letterSpacing:"0.04em",style:{marginTop:"10px"},weight:600},l))))};f.__docgenInfo={description:"",methods:[],displayName:"FitTextBanner"};b.__docgenInfo={description:"",methods:[],displayName:"SplitBackgroundBanner"};y.__docgenInfo={description:"",methods:[],displayName:"FitTextBannerWithLogo"};var C,F,H;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
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
    backgroundTheme
  } = args;
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport}</style>
      <section style={cardStyle(maxWidth, padding, cornerRadius)}>
        <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        </div>
        <FitText as="h1" minSize={minSize} maxSize={maxSize} fitRatio={fitRatio} lineHeight={lineHeight} shadow="0 6px 25px rgba(0,0,0,0.25)">
          {kicker}
        </FitText>
        <FitText as="h2" minSize={minSize - 6} maxSize={maxSize - 8} fitRatio={subheadingFitRatio} lineHeight={lineHeight + 0.06} color={accentColor} letterSpacing="0.04em" style={{
        marginTop: "10px"
      }} weight={600}>
          {headline}
        </FitText>
      </section>
    </div>;
}`,...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var B,_,E;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor,
    backgroundTheme
  } = args;
  const textPanelStyle = (backgroundColor, borderColor) => ({
    backgroundColor,
    padding: \`\${padding}px\`,
    borderRadius: \`\${cornerRadius}px\`,
    border: borderColor ? \`3px solid \${borderColor}\` : undefined,
    boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
    boxSizing: "border-box"
  });
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport}</style>
      <div style={{
      maxWidth: \`\${maxWidth}px\`,
      width: "100%",
      containerType: "inline-size",
      containerName: "banner",
      display: "flex",
      flexDirection: "column",
      gap: "18px"
    }}>
        <div style={textPanelStyle(kickerBackground)}>
          <FitText as="h1" minSize={minSize} maxSize={maxSize} fitRatio={fitRatio} lineHeight={lineHeight} align="left" color={kickerTextColor} shadow="0 6px 25px rgba(0,0,0,0.2)">
            {kicker}
          </FitText>
        </div>

        <div style={textPanelStyle(subtextBackground, accentColor)}>
          <FitText as="h2" minSize={minSize - 6} maxSize={maxSize - 8} fitRatio={subheadingFitRatio} lineHeight={lineHeight + 0.06} align="left" color={subtextTextColor} letterSpacing="0.04em" weight={600} style={{
          textTransform: "none"
        }}>
            {headline}
          </FitText>
        </div>
      </div>
    </div>;
}`,...(E=(_=b.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var W,q,N;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
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
    logoUrl
  } = args;
  const computedLogoUrl = resolveLogo(backgroundTheme, logoUrl);
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport + responsiveLogoStyles}</style>
      <div className="logo-banner" style={{
      maxWidth: \`\${maxWidth + padding * 2}px\`,
      "--logo-size-ratio": logoSizeRatio
    }}>
        <img src={computedLogoUrl} alt="Banner logo" className="logo-banner__logo" />
        <section className="logo-banner__card" style={cardStyle(maxWidth, padding, cornerRadius)}>
          <FitText as="h1" minSize={minSize} maxSize={maxSize} fitRatio={fitRatio} lineHeight={lineHeight} align="left" shadow="0 6px 25px rgba(0,0,0,0.25)">
            {kicker}
          </FitText>
          <FitText as="h2" minSize={minSize - 6} maxSize={maxSize - 8} fitRatio={subheadingFitRatio} lineHeight={lineHeight + 0.06} color={accentColor} letterSpacing="0.04em" style={{
          marginTop: "10px"
        }} weight={600}>
            {headline}
          </FitText>
        </section>
      </div>
    </div>;
}`,...(N=(q=y.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const D=["FitTextBanner","SplitBackgroundBanner","FitTextBannerWithLogo"];export{f as FitTextBanner,y as FitTextBannerWithLogo,b as SplitBackgroundBanner,D as __namedExportsOrder,U as default};
