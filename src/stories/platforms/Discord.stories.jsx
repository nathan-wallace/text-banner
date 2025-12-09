import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/discord/image';

export default {
  title: 'Platforms/Discord',
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

export const ServerBanner = Template.bind({});
ServerBanner.args = {
  ...backgroundControlDefaults,
  width: 960,
  height: 540,
  text: '960x540',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const InviteSplash = Template.bind({});
InviteSplash.args = {
  ...backgroundControlDefaults,
  width: 1920,
  height: 1080,
  text: '1920x1080',
  storageKey: DEFAULT_STORAGE_KEY,
};
