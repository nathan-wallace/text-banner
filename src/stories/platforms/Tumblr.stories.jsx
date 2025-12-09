import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/tumblr/image';

export default {
  title: 'Platforms/Tumblr',
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

export const Avatar = Template.bind({});
Avatar.args = {
  ...backgroundControlDefaults,
  width: 128,
  height: 128,
  text: '128x128',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const HeaderImage = Template.bind({});
HeaderImage.args = {
  ...backgroundControlDefaults,
  width: 2048,
  height: 1152,
  text: '2048x1152',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const InlinePostImage = Template.bind({});
InlinePostImage.args = {
  ...backgroundControlDefaults,
  width: 540,
  height: 810,
  text: '540x810',
  storageKey: DEFAULT_STORAGE_KEY,
};
