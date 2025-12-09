import React from "react";
import { colorTokens } from "../tokens/colors";

export default {
  title: "Brand/Colors",
};

const Swatch = ({ name, value }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0.5rem",
    }}
  >
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: value,
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
      title={value}
    />
    <small>{name}</small>
    <small style={{ color: "#555" }}>{value}</small>
  </div>
);

const ColorGroup = ({ title, colors }) => (
  <div style={{ marginBottom: "2rem" }}>
    <h3>{title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Object.entries(colors).map(([key, val]) =>
        typeof val === "string" ? (
          <Swatch key={key} name={key} value={val} />
        ) : (
          Object.entries(val).map(([shade, hex]) => (
            <Swatch key={key + shade} name={`${key}-${shade}`} value={hex} />
          ))
        )
      )}
    </div>
  </div>
);

export const Colors = () => (
  <div style={{ padding: "1rem" }}>
    <ColorGroup title="Brand" colors={colorTokens.brand} />
    <ColorGroup title="Status" colors={colorTokens.status} />
    <ColorGroup title="Neutral" colors={colorTokens.neutral} />
    <ColorGroup title="Semantic" colors={colorTokens.semantic} />
  </div>
);