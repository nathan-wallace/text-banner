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
  padding: "48px",
  boxSizing: "border-box",
};

const cardStyle = {
  maxWidth: "960px",
  width: "100%",
  border: "15px solid linear-gradient(135deg, #0b1d36, #142f57)",
  borderRadius: "0px",
  padding: "28px",
  textAlign: "center",
};

const headingStyle = {
  boxSizing: "border-box",
  clear: "both",
  color: "rgb(255, 255, 255)",
  display: "block",
  fontFamily: '"Bebas Neue", sans-serif',
  fontFeatureSettings: '"kern"',

  hyphens: "none",

  margin: 0,
  padding: "0.5rem 2rem",
  textTransform: "uppercase",
  background: "rgba(0, 0, 0, 0.2)",
  background: "linear-gradient(135deg, #0b1d36, #142f57)",
  backdropFilter: "blur(4px)",
  textGrow: "per-line scale",
};

const subheadingStyle = {
  marginTop: "16px",
  color: "#0b1d36",
  fontFamily: '"Bebas Neue", sans-serif',
  textTransform: "uppercase",
  textGrow: "per-line scale",
  padding: "0.5rem 2.5rem",
};

export const Default = () => (
  <div style={containerStyle}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    `}</style>
    <section style={cardStyle}>
      <h1 style={headingStyle}>WHAT THEY ARE SAYING...</h1>
      <h2 style={subheadingStyle}>
        ABOUT HHS'S ACTIONS TO<br/> PROTECT PARENTS' RIGHTS <br/>IN CHILDREN'S HEALTH DECISIONS
      </h2>
    </section>
  </div>
);
