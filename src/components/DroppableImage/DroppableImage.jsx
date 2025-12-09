import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import { useUploadedImage } from "../../utils/UploadedImagesContext";

const isImageFile = (file) => Boolean(file && file.type && file.type.startsWith("image/"));

const readFileAsDataUrl = (file, onLoad) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const result = event.target?.result;
    if (typeof result === "string") {
      onLoad(result);
    }
  };
  reader.readAsDataURL(file);
};

const DroppableImage = ({
  imageProps,
  initialSrc,
  helperText = "Drag & drop or click to upload an image",
  onChange,
  containerStyle,
  dropZoneStyle,
  renderImage,
  inputProps,
  helperTextStyle,
  className,
  storageKey,
}) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const fallbackSrc = initialSrc ?? imageProps?.src ?? null;
  const [storedSrc, setStoredSrc] = useUploadedImage(storageKey, fallbackSrc);
  const [src, setSrc] = useState(storedSrc ?? fallbackSrc);

  useEffect(() => {
    setSrc(storedSrc ?? fallbackSrc);
  }, [storedSrc, fallbackSrc]);

  const handleFile = useCallback(
    (file) => {
      if (!isImageFile(file)) return;

      readFileAsDataUrl(file, (dataUrl) => {
        setSrc(dataUrl);
        setStoredSrc(dataUrl);
        onChange?.(dataUrl, file);
      });
    },
    [onChange, setStoredSrc]
  );

  const handleInputChange = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);

      const file = event.dataTransfer.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const hasUploadedImage = Boolean(src);

  const naturalWidth = imageProps?.width;
  const naturalHeight = imageProps?.height;

  const dropStyles = useMemo(() => {
    const baseStyle = {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: hasUploadedImage
        ? "2px dashed transparent"
        : `2px dashed ${isDragging ? "#007bff" : "#cccccc"}`,
      borderRadius: "12px",
      padding: 0,
      cursor: "pointer",
      transition: "border-color 0.2s ease, background-color 0.2s ease",
      backgroundColor:
        isDragging && !hasUploadedImage
          ? "rgba(0, 123, 255, 0.1)"
          : "transparent",
    };

    return {
      ...baseStyle,
      ...(naturalWidth
        ? {
            width: "100%",
            maxWidth: naturalWidth,
          }
        : {}),
      ...(naturalWidth && naturalHeight
        ? { aspectRatio: `${naturalWidth} / ${naturalHeight}` }
        : {}),
      ...(dropZoneStyle || {}),
    };
  }, [dropZoneStyle, hasUploadedImage, isDragging, naturalWidth, naturalHeight]);

  const renderedImage = useMemo(() => {
    const finalProps = {
      ...(imageProps || {}),
      src: src ?? imageProps?.src,
    };

    if (renderImage) {
      return renderImage(finalProps, {
        isDragging,
        src,
        naturalWidth,
        naturalHeight,
      });
    }

    return <ImageWithPlaceholder responsive {...finalProps} />;
  }, [imageProps, renderImage, isDragging, src, naturalWidth, naturalHeight]);

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        ...(naturalWidth ? { maxWidth: naturalWidth } : {}),
        ...(containerStyle || {}),
      }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
          }
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        data-export-target="true"
        data-native-width={naturalWidth}
        data-native-height={naturalHeight}
        style={dropStyles}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleInputChange}
          {...inputProps}
        />
        {renderedImage}
      </div>
      {helperText ? (
        <p
          style={{
            margin: "0.75rem 0 0",
            fontSize: "0.875rem",
            color: "#333",
            textAlign: "center",
            ...(helperTextStyle || {}),
          }}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

DroppableImage.propTypes = {
  imageProps: PropTypes.object,
  initialSrc: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  containerStyle: PropTypes.object,
  dropZoneStyle: PropTypes.object,
  renderImage: PropTypes.func,
  inputProps: PropTypes.object,
  helperTextStyle: PropTypes.object,
  className: PropTypes.string,
  storageKey: PropTypes.string,
};

export default DroppableImage;
