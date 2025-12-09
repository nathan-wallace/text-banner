import{R as t}from"./index-CgfFrydU.js";import{P as e}from"./index-Co38GRlK.js";import"./_commonjsHelpers-CqkleIqs.js";function m({as:i="div",children:n,minSize:a=32,maxSize:s=120,fitRatio:d=8,lineHeight:p=1,align:g="center",uppercase:r=!0,letterSpacing:o="0.08em",color:l="#ffffff",style:u={},weight:h=700,shadow:c}){const b={fontSize:`clamp(${a}px, calc(${d} * 1cqw), ${s}px)`,lineHeight:p,textAlign:g,textTransform:r?"uppercase":"none",letterSpacing:o,margin:0,padding:0,color:l,fontFamily:'"Bebas Neue", sans-serif',fontWeight:h,textWrap:"balance",textShadow:c,...u};return t.createElement(i,{style:b},n)}m.propTypes={as:e.elementType,children:e.node.isRequired,minSize:e.number,maxSize:e.number,fitRatio:e.number,lineHeight:e.oneOfType([e.number,e.string]),align:e.oneOf(["left","center","right"]),uppercase:e.bool,letterSpacing:e.string,color:e.string,style:e.object,weight:e.oneOfType([e.string,e.number]),shadow:e.string};m.__docgenInfo={description:"Fluid text powered by CSS container query units.\nThe parent element must have `container-type: inline-size` to enable cqw scaling.",methods:[],displayName:"FitText",props:{as:{defaultValue:{value:'"div"',computed:!1},description:"",type:{name:"elementType"},required:!1},minSize:{defaultValue:{value:"32",computed:!1},description:"",type:{name:"number"},required:!1},maxSize:{defaultValue:{value:"120",computed:!1},description:"",type:{name:"number"},required:!1},fitRatio:{defaultValue:{value:"8",computed:!1},description:"",type:{name:"number"},required:!1},lineHeight:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},align:{defaultValue:{value:'"center"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"center"',computed:!1},{value:'"right"',computed:!1}]},required:!1},uppercase:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},letterSpacing:{defaultValue:{value:'"0.08em"',computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:'"#ffffff"',computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},weight:{defaultValue:{value:"700",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},children:{description:"",type:{name:"node"},required:!0},shadow:{description:"",type:{name:"string"},required:!1}}};const k=`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`,y={blue:"https://www.hhs.gov/sites/default/files/logo-white-lg.png",white:"https://www.hhs.gov/sites/default/files/logo-blue-lg.png"},F=i=>({minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"48px",boxSizing:"border-box",background:i==="white"?"linear-gradient(180deg, #f5f7fb 0%, #ffffff 60%, #e8ecf3 100%)":"radial-gradient(circle at 15% 20%, rgba(46, 74, 117, 0.45), transparent 40%), radial-gradient(circle at 80% 80%, rgba(15, 39, 77, 0.45), transparent 36%), linear-gradient(135deg, #0b1d36, #142f57)"}),_=(i,n,a)=>({maxWidth:`${i}px`,width:"100%",containerType:"inline-size",containerName:"banner",borderRadius:`${a}px`,padding:`${n}px`,boxSizing:"border-box",background:"linear-gradient(145deg, rgba(11, 29, 54, 0.95), rgba(20, 47, 87, 0.9)) padding-box, linear-gradient(135deg, #8bd8ff, #1f4f82) border-box",border:"12px solid transparent",backgroundOrigin:"border-box",backgroundClip:"padding-box, border-box",boxShadow:"0 20px 50px rgba(0,0,0,0.25)"}),W=(i,n)=>n!=null&&n.trim()?n:y[i]||y.blue,q=`
  .logo-banner { display: flex; align-items: stretch; justify-content: center; gap: 24px; width: 100%; box-sizing: border-box; }
  .logo-banner__logo { height: 100%; max-height: 360px; width: auto; object-fit: contain; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.28)); flex-shrink: 0; }
  .logo-banner__card { width: 100%; }

  @media (max-width: 900px) {
    .logo-banner { gap: 18px; }
  }

  @media (max-width: 768px) {
    .logo-banner { flex-direction: column; align-items: center; max-width: 100% !important; }
    .logo-banner__logo { width: 140px; height: auto; }
  }
`,B={title:"News Banner",parameters:{layout:"fullscreen"},args:{kicker:"What they are saying...",headline:"About HHS's actions to protect parents' rights in children's health decisions",maxWidth:960,padding:32,cornerRadius:18,fitRatio:9,minSize:28,maxSize:120,lineHeight:.9,accentColor:"#8bd8ff",subheadingFitRatio:7.5,backgroundTheme:"blue",logoUrl:""},argTypes:{kicker:{control:"text"},headline:{control:"text"},maxWidth:{control:{type:"range",min:320,max:1280,step:10}},padding:{control:{type:"range",min:12,max:72,step:2}},cornerRadius:{control:{type:"range",min:0,max:60,step:2}},fitRatio:{control:{type:"range",min:4,max:16,step:.1}},subheadingFitRatio:{control:{type:"range",min:3,max:14,step:.1}},minSize:{control:{type:"range",min:12,max:80,step:1}},maxSize:{control:{type:"range",min:60,max:200,step:2}},lineHeight:{control:{type:"range",min:.7,max:1.3,step:.01}},accentColor:{control:"color"},backgroundTheme:{control:{type:"inline-radio"},options:["blue","white"]},logoUrl:{control:"text"}}},f=i=>{const{kicker:n,headline:a,maxWidth:s,padding:d,cornerRadius:p,fitRatio:g,minSize:r,maxSize:o,lineHeight:l,accentColor:u,subheadingFitRatio:h,backgroundTheme:c}=i;return t.createElement("div",{style:F(c)},t.createElement("style",null,k),t.createElement("section",{style:_(s,d,p)},t.createElement("div",{style:{display:"flex",justifyContent:"center"}}),t.createElement(m,{as:"h1",minSize:r,maxSize:o,fitRatio:g,lineHeight:l,shadow:"0 6px 25px rgba(0,0,0,0.25)"},n),t.createElement(m,{as:"h2",minSize:r-6,maxSize:o-8,fitRatio:h,lineHeight:l+.06,color:u,letterSpacing:"0.04em",style:{marginTop:"10px"},weight:600},a)))},x=i=>{const{kicker:n,headline:a,maxWidth:s,padding:d,cornerRadius:p,fitRatio:g,minSize:r,maxSize:o,lineHeight:l,accentColor:u,subheadingFitRatio:h,backgroundTheme:c,logoUrl:b}=i,H=W(c,b);return t.createElement("div",{style:F(c)},t.createElement("style",null,k+q),t.createElement("div",{className:"logo-banner",style:{maxWidth:`${s+d*2}px`}},t.createElement("img",{src:H,alt:"Banner logo",className:"logo-banner__logo"}),t.createElement("section",{className:"logo-banner__card",style:_(s,d,p)},t.createElement(m,{as:"h1",minSize:r,maxSize:o,fitRatio:g,lineHeight:l,align:"left",shadow:"0 6px 25px rgba(0,0,0,0.25)"},n),t.createElement(m,{as:"h2",minSize:r-6,maxSize:o-8,fitRatio:h,lineHeight:l+.06,color:u,letterSpacing:"0.04em",style:{marginTop:"10px"},weight:600},a))))};f.__docgenInfo={description:"",methods:[],displayName:"FitTextBanner"};x.__docgenInfo={description:"",methods:[],displayName:"FitTextBannerWithLogo"};var S,z,T;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(T=(z=f.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var v,w,R;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
    logoUrl
  } = args;
  const computedLogoUrl = resolveLogo(backgroundTheme, logoUrl);
  return <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport + responsiveLogoStyles}</style>
      <div className="logo-banner" style={{
      maxWidth: \`\${maxWidth + padding * 2}px\`
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
}`,...(R=(w=x.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const L=["FitTextBanner","FitTextBannerWithLogo"];export{f as FitTextBanner,x as FitTextBannerWithLogo,L as __namedExportsOrder,B as default};
