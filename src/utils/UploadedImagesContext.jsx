import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";

const STORAGE_KEY = "storybook-media-toolkit.uploaded-images";

const UploadedImagesContext = createContext({
  images: {},
  setImage: () => {},
  removeImage: () => {},
  clearImages: () => {},
});

export const UploadedImagesProvider = ({
  children,
  images: controlledImages,
  onImagesChange,
}) => {
  const hasHydratedRef = useRef(false);
  const [localImages, setLocalImages] = useState({});

  const isControlled = typeof onImagesChange === "function";
  const images = isControlled
    ? controlledImages ?? {}
    : localImages ?? {};

  const persistImages = useCallback(
    (nextImages) => {
      if (isControlled) {
        onImagesChange(nextImages);
      } else {
        setLocalImages(nextImages);
      }
    },
    [isControlled, onImagesChange]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (hasHydratedRef.current) {
      return;
    }

    hasHydratedRef.current = true;

    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);
      if (!storedValue) {
        return;
      }

      const parsed = JSON.parse(storedValue);
      if (parsed && typeof parsed === "object") {
        persistImages(parsed);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("Failed to read uploaded images from localStorage", error);
    }
    // We intentionally exclude `images` from the dependency array to avoid
    // triggering this effect when Storybook re-renders with new globals.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persistImages]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!hasHydratedRef.current) {
      return;
    }

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(images ?? {})
      );
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn("Failed to persist uploaded images to localStorage", error);
    }
  }, [images]);

  const setImage = useCallback(
    (key, value) => {
      if (!key) {
        return;
      }

      persistImages({
        ...(images ?? {}),
        [key]: value,
      });
    },
    [persistImages, images]
  );

  const removeImage = useCallback(
    (key) => {
      if (!key || !images) {
        return;
      }

      if (!(key in images)) {
        return;
      }

      const nextImages = { ...images };
      delete nextImages[key];

      persistImages(nextImages);
    },
    [persistImages, images]
  );

  const clearImages = useCallback(() => {
    persistImages({});
  }, [persistImages]);

  const value = useMemo(
    () => ({
      images: images ?? {},
      setImage,
      removeImage,
      clearImages,
    }),
    [images, setImage, removeImage, clearImages]
  );

  return (
    <UploadedImagesContext.Provider value={value}>
      {children}
    </UploadedImagesContext.Provider>
  );
};

UploadedImagesProvider.propTypes = {
  children: PropTypes.node,
  images: PropTypes.object,
  onImagesChange: PropTypes.func,
};

export const useUploadedImage = (key, fallbackValue = null) => {
  const context = useContext(UploadedImagesContext);
  if (!context) {
    throw new Error(
      "useUploadedImage must be used within an UploadedImagesProvider"
    );
  }

  const storedValue = key ? context.images?.[key] : undefined;

  const setValue = useCallback(
    (value) => {
      if (!key) {
        return;
      }

      if (value === null || value === undefined) {
        context.removeImage(key);
        return;
      }

      context.setImage(key, value);
    },
    [context, key]
  );

  const clear = useCallback(() => {
    if (!key) {
      return;
    }

    context.removeImage(key);
  }, [context, key]);

  return [storedValue ?? fallbackValue ?? null, setValue, clear];
};

export default UploadedImagesContext;
