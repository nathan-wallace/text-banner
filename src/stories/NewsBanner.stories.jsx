import React from "react";
import { FitText } from "../components/FitText";
import { brand } from "../brand";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
`;

const THEME_LOGOS = {
  blue: "https://www.hhs.gov/sites/default/files/logo-white-lg.png",
  white: "https://www.hhs.gov/sites/default/files/logo-blue-lg.png",
};

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

const resolveLogo = (backgroundTheme, logoUrl) => {
  if (logoUrl?.trim()) return logoUrl;
  return THEME_LOGOS[backgroundTheme] || THEME_LOGOS.blue;
};

const responsiveLogoStyles = `
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
`;

export default {
  title: "News Banner",
  parameters: {
    layout: "fullscreen",
    controls: {
      expanded: true,
      sort: "requiredFirst",
    },
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
    logoUrl: "",
    logoSizeRatio: 0.32,
    layoutStyle: "standard",
    textAlign: "center",
    contentSpacing: 12,
    kickerBackground: "#0b1d36",
    kickerTextColor: "#ffffff",
    subtextBackground: "#ffffff",
    subtextTextColor: "#0b1d36",

  },
  argTypes: {
    kicker: { control: "text", table: { category: "Content" } },
    headline: { control: "text", table: { category: "Content" } },
    logoUrl: { control: "text", table: { category: "Content" } },
    layoutStyle: {
      control: { type: "inline-radio" },
      options: ["standard", "splitSections"],
      description:
        "Choose splitSections to place the kicker on a blue bar and the subtext on a white bar inside a single card",
      table: { category: "Layout" },
    },
    maxWidth: {
      control: { type: "range", min: 320, max: 1280, step: 10 },
      table: { category: "Layout" },
    },
    padding: {
      control: { type: "range", min: 12, max: 72, step: 2 },
      table: { category: "Layout" },
    },
    cornerRadius: {
      control: { type: "range", min: 0, max: 60, step: 2 },
      table: { category: "Layout" },
    },
    logoSizeRatio: {
      control: { type: "range", min: 0.15, max: 0.5, step: 0.01 },
      description: "Adjust the proportional width of the logo relative to the text card",
      table: { category: "Layout" },
    },
    fitRatio: {
      control: { type: "range", min: 4, max: 16, step: 0.1 },
      table: { category: "Typography" },
    },
    subheadingFitRatio: {
      control: { type: "range", min: 3, max: 14, step: 0.1 },
      table: { category: "Typography" },
    },
    minSize: {
      control: { type: "range", min: 12, max: 80, step: 1 },
      table: { category: "Typography" },
    },
    maxSize: {
      control: { type: "range", min: 60, max: 200, step: 2 },
      table: { category: "Typography" },
    },
    lineHeight: {
      control: { type: "range", min: 0.7, max: 1.3, step: 0.01 },
      table: { category: "Typography" },
    },
    textAlign: {
      control: { type: "inline-radio" },
      options: ["left", "center", "right"],
      table: { category: "Typography" },
      description: "Align the kicker and headline consistently across layouts",
    },
    contentSpacing: {
      control: { type: "range", min: 4, max: 36, step: 1 },
      table: { category: "Typography" },
      description: "Adjust the spacing between the kicker and headline",
    },
    accentColor: { control: "color", table: { category: "Colors" } },
    backgroundTheme: {
      control: { type: "inline-radio" },
      options: ["blue", "white"],
      table: { category: "Colors" },
    },
    kickerBackground: { control: "color", table: { category: "Colors" } },
    kickerTextColor: { control: "color", table: { category: "Colors" } },
    subtextBackground: { control: "color", table: { category: "Colors" } },
    subtextTextColor: { control: "color", table: { category: "Colors" } },
  },
};

const renderBannerContent = (args) => {
  const {
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
    subtextTextColor,
  } = args;

  const resolvedAlign =
    layoutStyle === "splitSections" && textAlign === "center"
      ? "left"
      : textAlign;

  if (layoutStyle === "splitSections") {
    const innerRadius = Math.max(0, cornerRadius - 6);

    return (
      <div
        style={{
          borderRadius: `${innerRadius}px`,
          overflow: "hidden",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            backgroundColor: kickerBackground,
            padding: `${padding}px`,
          }}
        >
          <FitText
            as="h1"
            minSize={minSize}
            maxSize={maxSize}
            fitRatio={fitRatio}
            lineHeight={lineHeight}
            align={resolvedAlign}
            color={kickerTextColor}
            shadow="0 6px 25px rgba(0,0,0,0.2)"
          >
            {kicker}
          </FitText>
        </div>

        <div
          style={{
            backgroundColor: subtextBackground,
            padding: `${padding}px`,
          }}
        >
          <FitText
            as="h2"
            minSize={minSize - 6}
            maxSize={maxSize - 8}
            fitRatio={subheadingFitRatio}
            lineHeight={lineHeight + 0.06}
            align={resolvedAlign}
            color={subtextTextColor}
            letterSpacing="0.04em"
            weight={600}
            style={{ textTransform: "none" }}
          >
            {headline}
          </FitText>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: `${contentSpacing}px` }}>
      <FitText
        as="h1"
        minSize={minSize}
        maxSize={maxSize}
        fitRatio={fitRatio}
        lineHeight={lineHeight}
        align={textAlign}
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
        style={{ marginTop: 0 }}
        weight={600}
        align={textAlign}
      >
        {headline}
      </FitText>
    </div>
  );
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
    layoutStyle,
    textAlign,
    contentSpacing,
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor,
  } = args;

  const cardPadding = layoutStyle === "splitSections" ? 0 : padding;

  return (
    <div style={baseContainerStyle(backgroundTheme)}>
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
          subtextTextColor,
        })}
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
    logoSizeRatio,
    logoUrl,
    layoutStyle,
    textAlign,
    contentSpacing,
    kickerBackground,
    kickerTextColor,
    subtextBackground,
    subtextTextColor,
  } = args;

  const computedLogoUrl = resolveLogo(backgroundTheme, logoUrl);
  const cardPadding = layoutStyle === "splitSections" ? 0 : padding;

  return (
    <div style={baseContainerStyle(backgroundTheme)}>
      <style>{fontImport + responsiveLogoStyles}</style>
      <div
        className="logo-banner"
        style={{
          maxWidth: `${maxWidth + padding * 2}px`,
          "--logo-size-ratio": logoSizeRatio,
        }}
        >
          <img
            src={computedLogoUrl}
            alt="Banner logo"
            className="logo-banner__logo"
          />
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
            textAlign,
            contentSpacing,
            kickerBackground,
            kickerTextColor,
            subtextBackground,
            subtextTextColor,
          })}
        </section>
      </div>
    </div>
  );
};
