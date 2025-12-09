import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import { useUploadedImage } from "../../utils/UploadedImagesContext";

const LogoUploader = ({
  logoUrl: initialLogoUrl,
  imageWidth = 150,
  imageHeight = 150,
  cropWidth = 150,
  cropHeight = 150,
  positionX = 0,
  positionY = 0,
  text = "Logo",
  storageKey,
}) => {
  const fallbackLogo = useMemo(() => initialLogoUrl ?? null, [initialLogoUrl]);
  const [storedLogo, setStoredLogo] = useUploadedImage(storageKey, fallbackLogo);
  const [logoUrl, setLogoUrl] = useState(storedLogo ?? fallbackLogo);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setLogoUrl(storedLogo ?? fallbackLogo);
  }, [storedLogo, fallbackLogo]);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const newUrl = e.target?.result;
      if (typeof newUrl === "string") {
        setLogoUrl(newUrl);
        setStoredLogo(newUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div style={{ padding: "1rem" }}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        style={{
          border: `2px dashed ${isDragging ? "#007bff" : "#ccc"}`,
          padding: "1rem",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: isDragging ? "rgba(0,123,255,0.1)" : "transparent",
        }}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: cropWidth,
            aspectRatio: `${cropWidth} / ${cropHeight}`,
            margin: "0 auto",
            overflow: "hidden",
          }}
          data-export-target="true"
          data-native-width={cropWidth}
          data-native-height={cropHeight}
        >
          <ImageWithPlaceholder
            src={logoUrl}
            width={imageWidth}
            height={imageHeight}
            text={text}
            alt="Brand logo"
            style={{
              position: "absolute",
              top: positionY,
              left: positionX,
            }}
          />
        </div>
        <p style={{ marginTop: "0.5rem" }}>
          Drag & drop or click to upload a new logo
        </p>
      </div>
    </div>
  );
};

LogoUploader.propTypes = {
  logoUrl: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  cropWidth: PropTypes.number,
  cropHeight: PropTypes.number,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  text: PropTypes.string,
  storageKey: PropTypes.string,
};

export default LogoUploader;
