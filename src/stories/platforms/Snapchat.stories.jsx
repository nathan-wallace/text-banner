import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/snapchat/image';

export default {
  title: 'Platforms/Snapchat',
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

export const StoriesOrAdsCanvas = Template.bind({});
StoriesOrAdsCanvas.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 1920,
  text: '1080x1920',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const StaticARFilter = Template.bind({});
StaticARFilter.args = {
  ...backgroundControlDefaults,
  width: 945,
  height: 2048,
  text: '945x2048',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const AnimatedARFilter = Template.bind({});
AnimatedARFilter.args = {
  ...backgroundControlDefaults,
  width: 720,
  height: 1560,
  text: '720x1560',
  storageKey: DEFAULT_STORAGE_KEY,
};
