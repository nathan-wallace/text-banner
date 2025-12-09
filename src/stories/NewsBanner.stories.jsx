import React from "react";

export default {
  title: "News Banner",
  parameters: {
    layout: "fullscreen",
  },
};

const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #0b1d36, #142f57)",
  padding: "48px",
  boxSizing: "border-box",
};

const cardStyle = {
  maxWidth: "960px",
  width: "100%",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "12px",
  padding: "64px",
  background: "rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(4px)",
  textAlign: "center",
};

const headingStyle = {
  boxSizing: "border-box",
  clear: "both",
  color: "rgb(255, 255, 255)",
  display: "block",
  fontFamily: '"Bebas Neue", sans-serif',
  fontFeatureSettings: '"kern"',
  fontKerning: "normal",
  fontSize: "51.04px",
  fontWeight: 400,
  hyphens: "none",
  letterSpacing: "2.552px",
  lineHeight: "56.144px",
  margin: 0,
  textTransform: "uppercase",
};

const subheadingStyle = {
  marginTop: "16px",
  color: "rgba(255, 255, 255, 0.88)",
  fontFamily: '"Bebas Neue", sans-serif',
  letterSpacing: "1.6px",
  fontSize: "32px",
  lineHeight: "38px",
  textTransform: "uppercase",
};

export const Default = () => (
  <div style={containerStyle}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    `}</style>
    <section style={cardStyle}>
      <h1 style={headingStyle}>WHAT THEY ARE SAYING...</h1>
      <h2 style={subheadingStyle}>
        ABOUT HHS'S ACTIONS TO PROTECT PARENTS' RIGHTS IN CHILDREN'S HEALTH DECISIONS
      </h2>
    </section>
  </div>
);
