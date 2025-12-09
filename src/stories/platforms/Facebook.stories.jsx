import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/facebook/image';

export default {
  title: 'Platforms/Facebook',
  component: ImageWithPlaceholder,
  parameters: { controls: { expanded: true } },
  argTypes: {
    ...backgroundControlArgTypes,
    storageKey: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const {
    style,
    backgroundSize = backgroundControlDefaults.backgroundSize,
    backgroundPositionX = backgroundControlDefaults.backgroundPositionX,
    backgroundPositionY = backgroundControlDefaults.backgroundPositionY,
    storageKey = DEFAULT_STORAGE_KEY,
    ...rest
  } = args;

  return (
    <DroppableImage
      storageKey={storageKey}
      imageProps={{
        ...rest,
        style: buildImageStyle(
          {
            border: `4px solid ${brand.colors.primary}`,
            ...(style || {}),
          },
          backgroundSize,
          backgroundPositionX,
          backgroundPositionY
        ),
      }}
    />
  );
};

export const FeedImage = Template.bind({});
FeedImage.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 1350,
  text: '1080x1350',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const PageProfilePhotoDesktop = Template.bind({});
PageProfilePhotoDesktop.args = {
  ...backgroundControlDefaults,
  width: 176,
  height: 176,
  text: '176x176',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const PageProfilePhotoMobile = Template.bind({});
PageProfilePhotoMobile.args = {
  ...backgroundControlDefaults,
  width: 196,
  height: 196,
  text: '196x196',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const PageCoverPhoto = Template.bind({});
PageCoverPhoto.args = {
  ...backgroundControlDefaults,
  width: 851,
  height: 315,
  text: '851x315',
  storageKey: DEFAULT_STORAGE_KEY,
};


