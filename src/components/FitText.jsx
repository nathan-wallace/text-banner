import React from "react";
import PropTypes from "prop-types";

/**
 * Fluid text powered by CSS container query units.
 * The parent element must have `container-type: inline-size` to enable cqw scaling.
 */
export function FitText({
  as: Component = "div",
  children,
  minSize = 32,
  maxSize = 120,
  fitRatio = 8,
  lineHeight = 1,
  align = "center",
  uppercase = true,
  letterSpacing = "0.08em",
  color = "#ffffff",
  style = {},
  weight = 700,
  shadow,
}) {
  const textStyles = {
    fontSize: `clamp(${minSize}px, calc(${fitRatio} * 1cqw), ${maxSize}px)`,
    lineHeight,
    textAlign: align,
    textTransform: uppercase ? "uppercase" : "none",
    letterSpacing,
    margin: 0,
    padding: 0,
    color,
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: weight,
    textWrap: "balance",
    textShadow: shadow,
    ...style,
  };

  return <Component style={textStyles}>{children}</Component>;
}

FitText.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  fitRatio: PropTypes.number,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["left", "center", "right"]),
  uppercase: PropTypes.bool,
  letterSpacing: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  shadow: PropTypes.string,
};
