export const backgroundControlDefaults = {
  backgroundSize: "cover",
  backgroundPositionX: 50,
  backgroundPositionY: 50,
};

const OBJECT_FIT_VALUES = new Set(["contain", "cover", "fill", "none", "scale-down"]);

export const backgroundControlArgTypes = {
  backgroundSize: {
    control: {
      type: "text",
    },
    description:
      "How the image should scale within its frame. Enter any CSS background-size value or an object-fit keyword (cover, contain, fill, none, scale-down).",
    table: {
      category: "Image Adjustments",
      type: {
        summary: "string",
        detail:
          "Supports standard object-fit keywords for <img> elements and any CSS background-size value for background-based layouts.",
      },
    },
  },
  backgroundPositionX: {
    control: { type: "range", min: 0, max: 100, step: 1 },
    description: "Horizontal focus point for the image (%)",
    table: {
      category: "Image Adjustments",
    },
  },
  backgroundPositionY: {
    control: { type: "range", min: 0, max: 100, step: 1 },
    description: "Vertical focus point for the image (%)",
    table: {
      category: "Image Adjustments",
    },
  },
};

const normalizeBackgroundSize = (value) => {
  if (typeof value !== "string") {
    return backgroundControlDefaults.backgroundSize;
  }

  const trimmed = value.trim();
  return trimmed.length ? trimmed : backgroundControlDefaults.backgroundSize;
};

export const buildImageStyle = (
  baseStyle = {},
  backgroundSize = backgroundControlDefaults.backgroundSize,
  backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
  backgroundPositionY = backgroundControlDefaults.backgroundPositionY
) => {
  const normalizedBackgroundSize = normalizeBackgroundSize(backgroundSize);
  const objectFitValue = OBJECT_FIT_VALUES.has(normalizedBackgroundSize)
    ? normalizedBackgroundSize
    : backgroundControlDefaults.backgroundSize;

  return {
    boxSizing: "border-box",
    objectFit: objectFitValue,
    objectPosition: `${backgroundPositionX}% ${backgroundPositionY}%`,
    backgroundSize: normalizedBackgroundSize,
    ...baseStyle,
  };
};
