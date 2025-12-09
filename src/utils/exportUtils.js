// src/utils/exportUtils.js
import html2canvas from 'html2canvas';

const EXPORT_MARKER_ATTRIBUTE = "data-exporting";

const coercePositiveNumber = (value) => {
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? num : undefined;
};

const applyNativeSizingToClone = (element) => {
  if (!element) return;

  const candidates = [
    element,
    ...element.querySelectorAll("[data-native-width], [data-native-height]"),
  ];

  candidates.forEach((node) => {
    const widthAttr = coercePositiveNumber(node.getAttribute("data-native-width"));
    const heightAttr = coercePositiveNumber(node.getAttribute("data-native-height"));
    const isResponsive = node.getAttribute("data-responsive") === "true";

    if (typeof widthAttr === "number") {
      const widthPx = `${widthAttr}px`;
      node.style.width = widthPx;
      node.style.maxWidth = widthPx;
      node.style.minWidth = widthPx;
    }

    if (typeof heightAttr === "number") {
      const heightPx = `${heightAttr}px`;
      node.style.height = heightPx;
      node.style.maxHeight = heightPx;
      node.style.minHeight = heightPx;
    }

    if (isResponsive && widthAttr && heightAttr) {
      node.style.aspectRatio = `${widthAttr} / ${heightAttr}`;
    }
  });
};

export const exportComponentAsImage = async (
  componentRef,
  fileName = 'poster',
  fileType = 'png',
  { selector = '[data-export-target]' } = {}
) => {
  const root = componentRef?.current;
  if (!root) return;

  const target = selector ? root.querySelector(selector) : null;
  const elementToCapture = target ?? root;

  try {
    const rect = elementToCapture.getBoundingClientRect();
    const exportTarget = elementToCapture.matches("[data-native-width], [data-native-height]")
      ? elementToCapture
      : elementToCapture.querySelector("[data-native-width], [data-native-height]");

    const nativeWidthAttr = exportTarget?.getAttribute?.("data-native-width");
    const nativeHeightAttr = exportTarget?.getAttribute?.("data-native-height");
    const nativeWidth = nativeWidthAttr ? Number(nativeWidthAttr) : undefined;
    const nativeHeight = nativeHeightAttr ? Number(nativeHeightAttr) : undefined;

    const widthScale = nativeWidth && rect.width ? nativeWidth / rect.width : undefined;
    const heightScale = nativeHeight && rect.height ? nativeHeight / rect.height : undefined;

    const scaleCandidates = [widthScale, heightScale].filter(
      (value) => typeof value === "number" && Number.isFinite(value) && value > 0
    );

    const fallbackScale =
      typeof window !== 'undefined' && window.devicePixelRatio
        ? window.devicePixelRatio
        : 1;

    const scale =
      scaleCandidates.length > 0
        ? Math.max(...scaleCandidates)
        : fallbackScale;

    elementToCapture.setAttribute(EXPORT_MARKER_ATTRIBUTE, "true")
    const canvas = await html2canvas(elementToCapture, {
      useCORS: true, // Helps load cross-domain images (like your logos)
      scale,
      ...(typeof nativeWidth === "number" && Number.isFinite(nativeWidth)
        ? { width: nativeWidth }
        : {}),
      ...(typeof nativeHeight === "number" && Number.isFinite(nativeHeight)
        ? { height: nativeHeight }
        : {}),
      onclone: (clonedDocument) => {
        const clonedTarget = clonedDocument.querySelector(
          `[${EXPORT_MARKER_ATTRIBUTE}="true"]`
        );

        if (!clonedTarget) {
          return;
        }

        applyNativeSizingToClone(clonedTarget);
      },

    });
    const link = document.createElement('a');
    const format = fileType === 'jpg' ? 'jpeg' : fileType;
    link.download = `${fileName}.${fileType}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
  } catch (error) {
    console.error(`Error exporting as ${fileType.toUpperCase()}:`, error);
  } finally {
    elementToCapture.removeAttribute(EXPORT_MARKER_ATTRIBUTE);
  }
};
