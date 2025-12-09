import React from "react";
import { FitText } from "../components/FitText";
import { brand } from "../brand";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`;

const baseContainerStyle = (backgroundTheme) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "48px",
  boxSizing: "border-box",
  background:
    backgroundTheme === "white"
      ? "linear-gradient(180deg, #f5f7fb 0%, #ffffff 60%, #e8ecf3 100%)"
      : "radial-gradient(circle at 15% 20%, rgba(46, 74, 117, 0.45), transparent 40%), radial-gradient(circle at 80% 80%, rgba(15, 39, 77, 0.45), transparent 36%), linear-gradient(135deg, #0b1d36, #142f57)",
});

const cardStyle = (maxWidth, padding, cornerRadius) => ({
  maxWidth: `${maxWidth}px`,
  width: "100%",
  containerType: "inline-size",
  containerName: "banner",
  borderRadius: `${cornerRadius}px`,
  padding: `${padding}px`,
  boxSizing: "border-box",
  background:
    "linear-gradient(145deg, rgba(11, 29, 54, 0.95), rgba(20, 47, 87, 0.9)) padding-box, linear-gradient(135deg, #8bd8ff, #1f4f82) border-box",
  border: "12px solid transparent",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
});

export default {
  title: "News Banner",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    kicker: "What they are saying...",
    headline:
      "About HHS's actions to protect parents' rights in children's health decisions",
    maxWidth: 960,
    padding: 32,
    cornerRadius: 18,
    fitRatio: 9,
    minSize: 28,
    maxSize: 120,
    lineHeight: 0.9,
    accentColor: "#8bd8ff",
    subheadingFitRatio: 7.5,
    backgroundTheme: "blue",
    logoUrl: brand.logoUrl,
  },
  argTypes: {
    kicker: { control: "text" },
    headline: { control: "text" },
    maxWidth: { control: { type: "range", min: 320, max: 1280, step: 10 } },
    padding: { control: { type: "range", min: 12, max: 72, step: 2 } },
    cornerRadius: { control: { type: "range", min: 0, max: 60, step: 2 } },
    fitRatio: { control: { type: "range", min: 4, max: 16, step: 0.1 } },
    subheadingFitRatio: { control: { type: "range", min: 3, max: 14, step: 0.1 } },
    minSize: { control: { type: "range", min: 12, max: 80, step: 1 } },
    maxSize: { control: { type: "range", min: 60, max: 200, step: 2 } },
    lineHeight: { control: { type: "range", min: 0.7, max: 1.3, step: 0.01 } },
    accentColor: { control: "color" },
    backgroundTheme: {
      control: { type: "inline-radio" },
      options: ["blue", "white"],
    },
    logoUrl: { control: "text" },
  },
};

export const FitTextBanner = (args) => {
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
  } = args;

  return (
    <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport}</style>
      <section style={cardStyle(maxWidth, padding, cornerRadius)}>
        <div style={{ display: "flex", justifyContent: "center" }}>
        </div>
        <FitText
          as="h1"
          minSize={minSize}
          maxSize={maxSize}
          fitRatio={fitRatio}
          lineHeight={lineHeight}
          shadow="0 6px 25px rgba(0,0,0,0.25)"
        >
          {kicker}
        </FitText>
        <FitText
          as="h2"
          minSize={minSize - 6}
          maxSize={maxSize - 8}
          fitRatio={subheadingFitRatio}
          lineHeight={lineHeight + 0.06}
          color={accentColor}
          letterSpacing="0.04em"
          style={{ marginTop: "10px" }}
          weight={600}
        >
          {headline}
        </FitText>
      </section>
    </div>
  );
};

export const FitTextBannerWithLogo = (args) => {
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
    logoUrl,
  } = args;

  return (
    <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport}</style>
      <section style={cardStyle(maxWidth, padding, cornerRadius)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            justifyContent: "center",
            marginBottom: "12px",
          }}
        >
          <img
            src={logoUrl}
            alt="Banner logo"
            style={{
              width: "68px",
              height: "68px",
              objectFit: "contain",
              filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.25))",
            }}
          />
          <FitText
            as="h1"
            minSize={minSize}
            maxSize={maxSize}
            fitRatio={fitRatio}
            lineHeight={lineHeight}
            align="left"
            shadow="0 6px 25px rgba(0,0,0,0.25)"
            style={{ flex: 1 }}
          >
            {kicker}
          </FitText>
        </div>
        <FitText
          as="h2"
          minSize={minSize - 6}
          maxSize={maxSize - 8}
          fitRatio={subheadingFitRatio}
          lineHeight={lineHeight + 0.06}
          color={accentColor}
          letterSpacing="0.04em"
          style={{ marginTop: "10px" }}
          weight={600}
        >
          {headline}
        </FitText>
      </section>
    </div>
  );
};
