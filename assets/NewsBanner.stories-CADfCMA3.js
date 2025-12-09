import{R as e}from"./index-CgfFrydU.js";import{P as t}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function f({as:a="div",children:n,minSize:o=32,maxSize:c=120,fitRatio:i=8,lineHeight:r=1,align:l="center",uppercase:s=!0,letterSpacing:d="0.08em",color:m="#ffffff",style:u={},weight:x=700,shadow:g}){const p={fontSize:`clamp(${o}px, calc(${i} * 1cqw), ${c}px)`,lineHeight:r,textAlign:l,textTransform:s?"uppercase":"none",letterSpacing:d,margin:0,padding:0,color:m,fontFamily:'"Bebas Neue", sans-serif',fontWeight:x,textWrap:"balance",textShadow:g,...u};return e.createElement(a,{style:p},n)}f.propTypes={as:t.elementType,children:t.node.isRequired,minSize:t.number,maxSize:t.number,fitRatio:t.number,lineHeight:t.oneOfType([t.number,t.string]),align:t.oneOf(["left","center","right"]),uppercase:t.bool,letterSpacing:t.string,color:t.string,style:t.object,weight:t.oneOfType([t.string,t.number]),shadow:t.string};f.__docgenInfo={description:"Fluid text powered by CSS container query units.\nThe parent element must have `container-type: inline-size` to enable cqw scaling.",methods:[],displayName:"FitText",props:{as:{defaultValue:{value:'"div"',computed:!1},description:"",type:{name:"elementType"},required:!1},minSize:{defaultValue:{value:"32",computed:!1},description:"",type:{name:"number"},required:!1},maxSize:{defaultValue:{value:"120",computed:!1},description:"",type:{name:"number"},required:!1},fitRatio:{defaultValue:{value:"8",computed:!1},description:"",type:{name:"number"},required:!1},lineHeight:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},align:{defaultValue:{value:'"center"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"right"',computed:!1}]},required:!1},uppercase:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},letterSpacing:{defaultValue:{value:'"0.08em"',computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#ffffff"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},weight:{defaultValue:{value:"700",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},children:{description:"",type:{name:"node"},required:!0},shadow:{description:"",type:{name:"string"},required:!1}}};const F=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`,v={blue:"https://www.hhs.gov/sites/default/files/logo-white-lg.png",white:"https://www.hhs.gov/sites/default/files/logo-blue-lg.png"},W=a=>({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px",boxSizing:"border-box",background:a==="white"?"linear-gradient(180deg, #f5f7fb 0%, #ffffff 60%, #e8ecf3 100%)":"radial-gradient(circle at 15% 20%, rgba(46, 74, 117, 0.45), transparent 40%), radial-gradient(circle at 80% 80%, rgba(15, 39, 77, 0.45), transparent 36%), linear-gradient(135deg, #0b1d36, #142f57)"}),q=(a,n,o)=>({maxWidth:`${a}px`,width:"100%",containerType:"inline-size",containerName:"banner",borderRadius:`${o}px`,padding:`${n}px`,boxSizing:"border-box",background:"linear-gradient(145deg, rgba(11, 29, 54, 0.95), rgba(20, 47, 87, 0.9)) padding-box, linear-gradient(135deg, #8bd8ff, #1f4f82) border-box",border:"12px solid transparent",backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",boxShadow:"0 20px 50px rgba(0,0,0,0.25)"}),V=(a,n)=>n!=null&&n.trim()?n:v[a]||v.blue,$=`
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
`,P={title:"News Banner",parameters:{layout:"fullscreen"},args:{kicker:"What they are saying...",headline:"About HHS's actions to protect parents' rights in children's health decisions",maxWidth:960,padding:32,cornerRadius:18,fitRatio:9,minSize:28,maxSize:120,lineHeight:.9,accentColor:"#8bd8ff",subheadingFitRatio:7.5,backgroundTheme:"blue",logoUrl:"",logoSizeRatio:.32,layoutStyle:"standard",kickerBackground:"#0b1d36",kickerTextColor:"#ffffff",subtextBackground:"#ffffff",subtextTextColor:"#0b1d36"},argTypes:{kicker:{control:"text"},headline:{control:"text"},maxWidth:{control:{type:"range",min:320,max:1280,step:10}},padding:{control:{type:"range",min:12,max:72,step:2}},cornerRadius:{control:{type:"range",min:0,max:60,step:2}},fitRatio:{control:{type:"range",min:4,max:16,step:.1}},subheadingFitRatio:{control:{type:"range",min:3,max:14,step:.1}},minSize:{control:{type:"range",min:12,max:80,step:1}},maxSize:{control:{type:"range",min:60,max:200,step:2}},lineHeight:{control:{type:"range",min:.7,max:1.3,step:.01}},accentColor:{control:"color"},backgroundTheme:{control:{type:"inline-radio"},options:["blue","white"]},logoUrl:{control:"text"},logoSizeRatio:{control:{type:"range",min:.15,max:.5,step:.01},description:"Adjust the proportional width of the logo relative to the text card"},layoutStyle:{control:{type:"inline-radio"},options:["standard","splitSections"],description:"Choose splitSections to place the kicker on a blue bar and the subtext on a white bar inside a single card"},kickerBackground:{control:"color"},kickerTextColor:{control:"color"},subtextBackground:{control:"color"},subtextTextColor:{control:"color"}}},H=a=>{const{kicker:n,headline:o,padding:c,cornerRadius:i,fitRatio:r,minSize:l,maxSize:s,lineHeight:d,accentColor:m,subheadingFitRatio:u,layoutStyle:x,kickerBackground:g,kickerTextColor:p,subtextBackground:h,subtextTextColor:b}=a;if(x==="splitSections"){const y=Math.max(0,i-6);return e.createElement("div",{style:{borderRadius:`${y}px`,overflow:"hidden",boxShadow:"inset 0 0 0 1px rgba(255,255,255,0.08)"}},e.createElement("div",{style:{backgroundColor:g,padding:`${c}px`}},e.createElement(f,{as:"h1",minSize:l,maxSize:s,fitRatio:r,lineHeight:d,align:"left",color:p,shadow:"0 6px 25px rgba(0,0,0,0.2)"},n)),e.createElement("div",{style:{backgroundColor:h,padding:`${c}px`}},e.createElement(f,{as:"h2",minSize:l-6,maxSize:s-8,fitRatio:u,lineHeight:d+.06,align:"left",color:b,letterSpacing:"0.04em",weight:600,style:{textTransform:"none"}},o)))}return e.createElement(e.Fragment,null,e.createElement(f,{as:"h1",minSize:l,maxSize:s,fitRatio:r,lineHeight:d,shadow:"0 6px 25px rgba(0,0,0,0.25)"},n),e.createElement(f,{as:"h2",minSize:l-6,maxSize:s-8,fitRatio:u,lineHeight:d+.06,color:m,letterSpacing:"0.04em",style:{marginTop:"10px"},weight:600},o))},k=a=>{const{kicker:n,headline:o,maxWidth:c,padding:i,cornerRadius:r,fitRatio:l,minSize:s,maxSize:d,lineHeight:m,accentColor:u,subheadingFitRatio:x,backgroundTheme:g,layoutStyle:p,kickerBackground:h,kickerTextColor:b,subtextBackground:y,subtextTextColor:T}=a,R=p==="splitSections"?0:i;return e.createElement("div",{style:W(g)},e.createElement("style",null,F),e.createElement("section",{style:q(c,R,r)},H({kicker:n,headline:o,padding:i,cornerRadius:r,fitRatio:l,minSize:s,maxSize:d,lineHeight:m,accentColor:u,subheadingFitRatio:x,layoutStyle:p,kickerBackground:h,kickerTextColor:b,subtextBackground:y,subtextTextColor:T})))},S=a=>{const{kicker:n,headline:o,maxWidth:c,padding:i,cornerRadius:r,fitRatio:l,minSize:s,maxSize:d,lineHeight:m,accentColor:u,subheadingFitRatio:x,backgroundTheme:g,logoSizeRatio:p,logoUrl:h,layoutStyle:b,kickerBackground:y,kickerTextColor:T,subtextBackground:R,subtextTextColor:N}=a,L=V(g,h);return e.createElement("div",{style:W(g)},e.createElement("style",null,F+$),e.createElement("div",{className:"logo-banner",style:{maxWidth:`${c+i*2}px`,"--logo-size-ratio":p}},e.createElement("img",{src:L,alt:"Banner logo",className:"logo-banner__logo"}),e.createElement("section",{className:"logo-banner__card",style:q(c,i,r)},H({kicker:n,headline:o,padding:i,cornerRadius:r,fitRatio:l,minSize:s,maxSize:d,lineHeight:m,accentColor:u,subheadingFitRatio:x,layoutStyle:b,kickerBackground:y,kickerTextColor:T,subtextBackground:R,subtextTextColor:N}))))};k.__docgenInfo={description:"",methods:[],displayName:"FitTextBanner"};S.__docgenInfo={description:"",methods:[],displayName:"FitTextBannerWithLogo"};var z,w,C;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
        kickerBackground,
        kickerTextColor,
        subtextBackground,
        subtextTextColor
      })}
      </section>
    </div>;
}`,...(C=(w=k.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,_,E;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
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
  const cardPadding = layoutStyle === "splitSections" ? 0 : padding;
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport + responsiveLogoStyles}</style>
      <div className="logo-banner" style={{
      maxWidth: \`\${maxWidth + padding * 2}px\`,
      "--logo-size-ratio": logoSizeRatio
    }}>
          <img src={computedLogoUrl} alt="Banner logo" className="logo-banner__logo" />
        <section className="logo-banner__card" style={cardStyle(maxWidth, padding, cornerRadius)}>
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
}`,...(E=(_=S.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const A=["FitTextBanner","FitTextBannerWithLogo"];export{k as FitTextBanner,S as FitTextBannerWithLogo,A as __namedExportsOrder,P as default};
