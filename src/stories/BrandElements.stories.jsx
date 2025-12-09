import React from "react";
import LogoUploader from "../components/LogoUploader/LogoUploader";
import { brand as defaultBrand } from "../brand";

export default {
  title: "Brand/Elements",
  parameters: { controls: { expanded: true } },
};

export const Logo = (args) => <LogoUploader {...args} />;

Logo.args = {
  logoUrl: defaultBrand.logoUrl,
  imageWidth: 150,
  imageHeight: 150,
  cropWidth: 150,
  cropHeight: 150,
  positionX: 0,
  positionY: 0,
  storageKey: "brand/logo",
};

Logo.argTypes = {
  logoUrl: { control: "text" },
  imageWidth: {
    control: { type: "number" },
    description: "Width of the logo image (px)",
  },
  imageHeight: {
    control: { type: "number" },
    description: "Height of the logo image (px)",
  },
  cropWidth: {
    control: { type: "number" },
    description: "Width of the crop area (px)",
  },
  cropHeight: {
    control: { type: "number" },
    description: "Height of the crop area (px)",
  },
  positionX: {
    control: { type: "number" },
    description: "Horizontal position of the image (px)",
  },
  positionY: {
    control: { type: "number" },
    description: "Vertical position of the image (px)",
  },
  storageKey: {
    table: { disable: true },
  },
};

export const Fonts = (args) => {
  const fonts = {
    primary: args.primary ?? defaultBrand.fonts.primary,
    secondary: args.secondary ?? defaultBrand.fonts.secondary,
    tertiary: args.tertiary ?? defaultBrand.fonts.tertiary,
  };

  return (
    <div style={{ padding: "1rem" }}>
      <p
        style={{
          fontFamily: fonts.primary,
          margin: 0,
          paddingBottom: "0.5rem",
        }}
      >
        Source Sans Pro Web
      </p>
      <p
        style={{
          fontFamily: fonts.secondary,
          margin: 0,
          paddingBottom: "0.5rem",
          textTransform: "uppercase",
        }}
      >
        Arial Black
      </p>
      <p
        style={{
          fontFamily: fonts.tertiary,
          margin: 0,
          paddingBottom: "0.5rem",
          textTransform: "capitalize",
        }}
      >
        Segoe UI
      </p>
    </div>
  );
};

Fonts.args = {
  primary: defaultBrand.fonts.primary,
  secondary: defaultBrand.fonts.secondary,
  tertiary: defaultBrand.fonts.tertiary,
};

Fonts.argTypes = {
  primary: { control: "text" },
  secondary: { control: "text" },
  tertiary: { control: "text" },
};

