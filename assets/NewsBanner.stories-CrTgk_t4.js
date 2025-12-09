import{R as e}from"./index-CgfFrydU.js";import{P as n}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function b({as:a="div",children:t,minSize:l=32,maxSize:c=120,fitRatio:i=8,lineHeight:d=1,align:s="center",uppercase:o=!0,letterSpacing:r="0.08em",color:g="#ffffff",style:u={},weight:x=700,shadow:p}){const m={fontSize:`clamp(${l}px, calc(${i} * 1cqw), ${c}px)`,lineHeight:d,textAlign:s,textTransform:o?"uppercase":"none",letterSpacing:r,margin:0,padding:0,color:g,fontFamily:'"Bebas Neue", sans-serif',fontWeight:x,textWrap:"balance",textShadow:p,...u};return e.createElement(a,{style:m},t)}b.propTypes={as:n.elementType,children:n.node.isRequired,minSize:n.number,maxSize:n.number,fitRatio:n.number,lineHeight:n.oneOfType([n.number,n.string]),align:n.oneOf(["left","center","right"]),uppercase:n.bool,letterSpacing:n.string,color:n.string,style:n.object,weight:n.oneOfType([n.string,n.number]),shadow:n.string};b.__docgenInfo={description:"Fluid text powered by CSS container query units.\nThe parent element must have `container-type: inline-size` to enable cqw scaling.",methods:[],displayName:"FitText",props:{as:{defaultValue:{value:'"div"',computed:!1},description:"",type:{name:"elementType"},required:!1},minSize:{defaultValue:{value:"32",computed:!1},description:"",type:{name:"number"},required:!1},maxSize:{defaultValue:{value:"120",computed:!1},description:"",type:{name:"number"},required:!1},fitRatio:{defaultValue:{value:"8",computed:!1},description:"",type:{name:"number"},required:!1},lineHeight:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},align:{defaultValue:{value:'"center"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"right"',computed:!1}]},required:!1},uppercase:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},letterSpacing:{defaultValue:{value:'"0.08em"',computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#ffffff"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},weight:{defaultValue:{value:"700",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},children:{description:"",type:{name:"node"},required:!0},shadow:{description:"",type:{name:"string"},required:!1}}};const C=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`,B={blue:"https://www.hhs.gov/sites/default/files/logo-white-lg.png",white:"https://www.hhs.gov/sites/default/files/logo-blue-lg.png"},w=a=>({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px",boxSizing:"border-box",background:a==="white"?"linear-gradient(180deg, #f5f7fb 0%, #ffffff 60%, #e8ecf3 100%)":"radial-gradient(circle at 15% 20%, rgba(46, 74, 117, 0.45), transparent 40%), radial-gradient(circle at 80% 80%, rgba(15, 39, 77, 0.45), transparent 36%), linear-gradient(135deg, #0b1d36, #142f57)"}),L=(a,t,l)=>({maxWidth:`${a}px`,width:"100%",containerType:"inline-size",containerName:"banner",borderRadius:`${l}px`,padding:`${t}px`,boxSizing:"border-box",background:"linear-gradient(145deg, rgba(11, 29, 54, 0.95), rgba(20, 47, 87, 0.9)) padding-box, linear-gradient(135deg, #8bd8ff, #1f4f82) border-box",border:"12px solid transparent",backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",boxShadow:"0 20px 50px rgba(0,0,0,0.25)"}),j=(a,t)=>t!=null&&t.trim()?t:B[a]||B.blue,M=`
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
`,G={title:"News Banner",parameters:{layout:"fullscreen"},args:{kicker:"What they are saying...",headline:"About HHS's actions to protect parents' rights in children's health decisions",maxWidth:960,padding:32,cornerRadius:18,fitRatio:9,minSize:28,maxSize:120,lineHeight:.9,accentColor:"#8bd8ff",subheadingFitRatio:7.5,backgroundTheme:"blue",logoUrl:"",logoSizeRatio:.32,layoutStyle:"standard",kickerBackground:"#0b1d36",kickerTextColor:"#ffffff",subtextBackground:"#ffffff",subtextTextColor:"#0b1d36"},argTypes:{kicker:{control:"text"},headline:{control:"text"},maxWidth:{control:{type:"range",min:320,max:1280,step:10}},padding:{control:{type:"range",min:12,max:72,step:2}},cornerRadius:{control:{type:"range",min:0,max:60,step:2}},fitRatio:{control:{type:"range",min:4,max:16,step:.1}},subheadingFitRatio:{control:{type:"range",min:3,max:14,step:.1}},minSize:{control:{type:"range",min:12,max:80,step:1}},maxSize:{control:{type:"range",min:60,max:200,step:2}},lineHeight:{control:{type:"range",min:.7,max:1.3,step:.01}},accentColor:{control:"color"},backgroundTheme:{control:{type:"inline-radio"},options:["blue","white"]},logoUrl:{control:"text"},logoSizeRatio:{control:{type:"range",min:.15,max:.5,step:.01},description:"Adjust the proportional width of the logo relative to the text card"},layoutStyle:{control:{type:"inline-radio"},options:["standard","splitSections"],description:"Choose splitSections to place the kicker on a blue bar and the subtext on a white bar inside a single card"},kickerBackground:{control:"color"},kickerTextColor:{control:"color"},subtextBackground:{control:"color"},subtextTextColor:{control:"color"}}},V=a=>{const{kicker:t,headline:l,padding:c,cornerRadius:i,fitRatio:d,minSize:s,maxSize:o,lineHeight:r,accentColor:g,subheadingFitRatio:u,layoutStyle:x,kickerBackground:p,kickerTextColor:m,subtextBackground:f,subtextTextColor:h}=a;if(x==="splitSections"){const y=Math.max(0,i-6);return e.createElement("div",{style:{borderRadius:`${y}px`,overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.08)"}},e.createElement("div",{style:{backgroundColor:p,padding:`${c}px`}},e.createElement(b,{as:"h1",minSize:s,maxSize:o,fitRatio:d,lineHeight:r,align:"left",color:m,shadow:"0 6px 25px rgba(0,0,0,0.2)"},t)),e.createElement("div",{style:{backgroundColor:f,padding:`${c}px`}},e.createElement(b,{as:"h2",minSize:s-6,maxSize:o-8,fitRatio:u,lineHeight:r+.06,align:"left",color:h,letterSpacing:"0.04em",weight:600,style:{textTransform:"none"}},l)))}return e.createElement(e.Fragment,null,e.createElement(b,{as:"h1",minSize:s,maxSize:o,fitRatio:d,lineHeight:r,shadow:"0 6px 25px rgba(0,0,0,0.25)"},t),e.createElement(b,{as:"h2",minSize:s-6,maxSize:o-8,fitRatio:u,lineHeight:r+.06,color:g,letterSpacing:"0.04em",style:{marginTop:"10px"},weight:600},l))},T=a=>{const{kicker:t,headline:l,maxWidth:c,padding:i,cornerRadius:d,fitRatio:s,minSize:o,maxSize:r,lineHeight:g,accentColor:u,subheadingFitRatio:x,backgroundTheme:p,layoutStyle:m,kickerBackground:f,kickerTextColor:h,subtextBackground:y,subtextTextColor:k}=a,S=m==="splitSections"?Math.max(12,i/2):i;return e.createElement("div",{style:w(p)},e.createElement("style",null,C),e.createElement("section",{style:L(c,S,d)},V({kicker:t,headline:l,padding:i,cornerRadius:d,fitRatio:s,minSize:o,maxSize:r,lineHeight:g,accentColor:u,subheadingFitRatio:x,layoutStyle:m,kickerBackground:f,kickerTextColor:h,subtextBackground:y,subtextTextColor:k})))},z=a=>{const{kicker:t,headline:l,maxWidth:c,padding:i,cornerRadius:d,fitRatio:s,minSize:o,maxSize:r,lineHeight:g,accentColor:u,subheadingFitRatio:x,kickerBackground:p,kickerTextColor:m,subtextBackground:f,subtextTextColor:h,backgroundTheme:y}=a,k=(S,v)=>({backgroundColor:S,padding:`${i}px`,borderRadius:`${d}px`,border:v?`3px solid ${v}`:void 0,boxShadow:"0 16px 36px rgba(0,0,0,0.18)",boxSizing:"border-box"});return e.createElement("div",{style:w(y)},e.createElement("style",null,C),e.createElement("div",{style:{maxWidth:`${c}px`,width:"100%",containerType:"inline-size",containerName:"banner",display:"flex",flexDirection:"column",gap:"18px"}},e.createElement("div",{style:k(p)},e.createElement(b,{as:"h1",minSize:o,maxSize:r,fitRatio:s,lineHeight:g,align:"left",color:m,shadow:"0 6px 25px rgba(0,0,0,0.2)"},t)),e.createElement("div",{style:k(f,u)},e.createElement(b,{as:"h2",minSize:o-6,maxSize:r-8,fitRatio:x,lineHeight:g+.06,align:"left",color:h,letterSpacing:"0.04em",weight:600,style:{textTransform:"none"}},l))))},R=a=>{const{kicker:t,headline:l,maxWidth:c,padding:i,cornerRadius:d,fitRatio:s,minSize:o,maxSize:r,lineHeight:g,accentColor:u,subheadingFitRatio:x,backgroundTheme:p,logoSizeRatio:m,logoUrl:f,layoutStyle:h,kickerBackground:y,kickerTextColor:k,subtextBackground:S,subtextTextColor:v}=a,I=j(p,f),O=h==="splitSections"?Math.max(12,i/2):i;return e.createElement("div",{style:w(p)},e.createElement("style",null,C+M),e.createElement("div",{className:"logo-banner",style:{maxWidth:`${c+i*2}px`,"--logo-size-ratio":m}},e.createElement("img",{src:I,alt:"Banner logo",className:"logo-banner__logo"}),e.createElement("section",{className:"logo-banner__card",style:L(c,O,d)},V({kicker:t,headline:l,padding:i,cornerRadius:d,fitRatio:s,minSize:o,maxSize:r,lineHeight:g,accentColor:u,subheadingFitRatio:x,layoutStyle:h,kickerBackground:y,kickerTextColor:k,subtextBackground:S,subtextTextColor:v}))))};T.__docgenInfo={description:"",methods:[],displayName:"FitTextBanner"};z.__docgenInfo={description:"",methods:[],displayName:"SplitBackgroundBanner"};R.__docgenInfo={description:"",methods:[],displayName:"FitTextBannerWithLogo"};var E,F,_;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
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
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor
  } = args;
  const cardPadding = layoutStyle === "splitSections" ? Math.max(12, padding / 2) : padding;
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
        kickerBackground,
        kickerTextColor,
        subtextBackground,
        subtextTextColor
      })}
      </section>
    </div>;
}`,...(_=(F=T.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var H,W,$;z.parameters={...z.parameters,docs:{...(H=z.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
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
}`,...($=(W=z.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,N,P;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
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
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor
  } = args;
  const computedLogoUrl = resolveLogo(backgroundTheme, logoUrl);
  const cardPadding = layoutStyle === "splitSections" ? Math.max(12, padding / 2) : padding;
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
          kickerBackground,
          kickerTextColor,
          subtextBackground,
          subtextTextColor
        })}
        </section>
      </div>
    </div>;
}`,...(P=(N=R.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const J=["FitTextBanner","SplitBackgroundBanner","FitTextBannerWithLogo"];export{T as FitTextBanner,R as FitTextBannerWithLogo,z as SplitBackgroundBanner,J as __namedExportsOrder,G as default};
