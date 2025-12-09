import React from "react";
import PropTypes from "prop-types";

const ImageWithPlaceholder = ({
  src,
  width = 800,
  height = 600,
  text = "Placeholder",
  alt,
  style,
  responsive = false,
  ...props
}) => {
  const encoded = encodeURIComponent(text);
  const placeholder = `https://placehold.co/${width}x${height}?text=${encoded}`;
  const placeholder2x = `https://placehold.co/${width * 2}x${height * 2}?text=${encoded}`;
  const imgSrc = src || placeholder;
  const imgSrcSet = src ? undefined : `${placeholder} 1x, ${placeholder2x} 2x`;
  const finalAlt = alt || text;
  const baseDimensions = responsive
    ? {
        width: "100%",
        height: "auto",
        maxWidth: width,
        maxHeight: height,
        ...(width && height
          ? { aspectRatio: `${width} / ${height}` }
          : {}),
      }
    : {
        width,
        height,
        maxWidth: "none",
        maxHeight: "none",
      };

  const defaultStyle = {
    display: "block",
    ...baseDimensions,
    ...style,
  };

  return (
    <img
      src={imgSrc}
      srcSet={imgSrcSet}
      alt={finalAlt}
      width={width}
      height={height}
      loading="lazy"
      style={defaultStyle}
      data-native-width={width}
      data-native-height={height}
      data-responsive={responsive ? "true" : undefined}
      {...props}
    />
  );
};

ImageWithPlaceholder.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  text: PropTypes.string,
  alt: PropTypes.string,
  style: PropTypes.object,
  responsive: PropTypes.bool,
};

export default ImageWithPlaceholder;
