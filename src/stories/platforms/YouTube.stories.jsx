import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const STORAGE_KEYS = {
  default: 'platforms/youtube/shared',
  channelBanner: 'platforms/youtube/channel-banner',
  channelBannerSafeArea: 'platforms/youtube/channel-banner-safe-area',
  videoThumbnail: 'platforms/youtube/video-thumbnail',
  channelIcon: 'platforms/youtube/channel-icon',
};

export default {
  title: 'Platforms/YouTube',
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
    storageKey = STORAGE_KEYS.default,
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

export const ChannelBanner = Template.bind({});
ChannelBanner.args = {
  ...backgroundControlDefaults,
  width: 2560,
  height: 1440,
  text: '2560x1440',
  storageKey: STORAGE_KEYS.channelBanner,
};

export const ChannelBannerSafeArea = Template.bind({});
ChannelBannerSafeArea.args = {
  ...backgroundControlDefaults,
  width: 1235,
  height: 338,
  text: 'Safe Area 1235x338',
  storageKey: STORAGE_KEYS.channelBannerSafeArea,
};

export const VideoThumbnail = Template.bind({});
VideoThumbnail.args = {
  ...backgroundControlDefaults,
  width: 1280,
  height: 720,
  text: '1280x720',
  storageKey: STORAGE_KEYS.videoThumbnail,
};

export const ChannelIcon = Template.bind({});
ChannelIcon.args = {
  ...backgroundControlDefaults,
  width: 800,
  height: 800,
  text: 'High-res Icon',
  style: {
    borderRadius: '50%',
  },
  storageKey: STORAGE_KEYS.channelIcon,
};
