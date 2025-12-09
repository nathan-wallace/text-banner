import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/twitter/image';

export default {
  title: 'Platforms/X (Twitter)',
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

export const InStreamImage = Template.bind({});
InStreamImage.args = {
  ...backgroundControlDefaults,
  width: 1200,
  height: 675,
  text: '1200x675',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const ProfilePhoto = Template.bind({});
ProfilePhoto.args = {
  ...backgroundControlDefaults,
  width: 400,
  height: 400,
  text: '400x400',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const HeaderImage = Template.bind({});
HeaderImage.args = {
  ...backgroundControlDefaults,
  width: 1500,
  height: 500,
  text: '1500x500',
  storageKey: DEFAULT_STORAGE_KEY,
};
