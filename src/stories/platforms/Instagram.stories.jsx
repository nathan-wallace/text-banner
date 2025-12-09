import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/instagram/image';

export default {
  title: 'Platforms/Instagram & Threads',
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

export const PortraitFeed = Template.bind({});
PortraitFeed.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 1350,
  text: '1080x1350',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const SquareFeed = Template.bind({});
SquareFeed.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 1080,
  text: '1080x1080',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const LandscapeFeed = Template.bind({});
LandscapeFeed.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 566,
  text: '1080x566',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const StoriesAndReels = Template.bind({});
StoriesAndReels.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 1920,
  text: '1080x1920',
  storageKey: DEFAULT_STORAGE_KEY,
};
