import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/reddit/image';

export default {
  title: 'Platforms/Reddit',
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

export const CommunityIcon = Template.bind({});
CommunityIcon.args = {
  ...backgroundControlDefaults,
  width: 300,
  height: 300,
  text: '300x300',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const CommunityBannerDesktop = Template.bind({});
CommunityBannerDesktop.args = {
  ...backgroundControlDefaults,
  width: 1072,
  height: 128,
  text: '1072x128',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const CommunityBannerMobile = Template.bind({});
CommunityBannerMobile.args = {
  ...backgroundControlDefaults,
  width: 1080,
  height: 128,
  text: '1080x128',
  storageKey: DEFAULT_STORAGE_KEY,
};
