import React, { useCallback, useEffect, useRef } from "react";
import { addons, useGlobals } from "@storybook/preview-api";
import { exportComponentAsImage } from "../src/utils/exportUtils";
import { brand } from "../src/brand";
import { UploadedImagesProvider } from "../src/utils/UploadedImagesContext";

export const globalTypes = {
  brand: {
    name: "Brand",
    description: "Global brand configuration",
    defaultValue: brand,
  },
  uploadedImages: {
    name: "Uploaded Images",
    description: "Persisted image data shared across stories",
    defaultValue: {},
  },
  exportFormat: {
    name: "Format",
    description: "Image export format",
    defaultValue: "png",
  },
};

export const decorators = [
  (Story, context) => {
    const [{ uploadedImages = {} }, updateGlobals] = useGlobals();
    const handleImagesChange = useCallback(
      (nextImages) => {
        updateGlobals({ uploadedImages: nextImages });
      },
      [updateGlobals]
    );
    const ref = useRef(null);
    useEffect(() => {
      const channel = addons.getChannel();
      const listener = ({ format }) =>
        exportComponentAsImage(ref, "story", format);
      channel.on("export-image", listener);
      return () => channel.off("export-image", listener);
    }, []);
    context.parameters.brand = context.globals.brand;
    return React.createElement(
      UploadedImagesProvider,
      {
        images: uploadedImages,
        onImagesChange: handleImagesChange,
      },
      React.createElement(
        "div",
        { ref },
        React.createElement(Story, { ...context.args })
      )
    );
  },
];

export default {
  parameters: {
    docs: {
      disable: true,
    },
    actions: { argTypesRegex: "" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      // Force the default mode (change 'light' to 'dark' if needed)
      current: "light",
      // Remove the dark mode toggle from the toolbar
      disable: true,
    },
  },
};
