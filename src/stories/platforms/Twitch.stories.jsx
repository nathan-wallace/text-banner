import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/twitch/image';

export default {
  title: 'Platforms/Twitch',
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

export const ProfilePicture = Template.bind({});
ProfilePicture.args = {
  ...backgroundControlDefaults,
  width: 800,
  height: 800,
  text: 'Upload ≥800x800',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const ProfileBanner = Template.bind({});
ProfileBanner.args = {
  ...backgroundControlDefaults,
  width: 1920,
  height: 480,
  text: '1920x480',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const VideoPlayerBanner = Template.bind({});
VideoPlayerBanner.args = {
  ...backgroundControlDefaults,
  width: 1920,
  height: 1080,
  text: '1920x1080',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const Panel = Template.bind({});
Panel.args = {
  ...backgroundControlDefaults,
  width: 320,
  height: 400,
  text: '320px wide',
  storageKey: DEFAULT_STORAGE_KEY,
};
