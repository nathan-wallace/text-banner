import React from 'react';
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder/ImageWithPlaceholder';
import DroppableImage from '../../components/DroppableImage/DroppableImage';
import { brand } from '../../brand';
import {
  backgroundControlArgTypes,
  backgroundControlDefaults,
  buildImageStyle,
} from './storyControls';

const DEFAULT_STORAGE_KEY = 'platforms/linkedin/image';

export default {
  title: 'Platforms/LinkedIn',
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

export const PersonalProfileBackground = Template.bind({});
PersonalProfileBackground.args = {
  ...backgroundControlDefaults,
  width: 1584,
  height: 396,
  text: '1584x396',
  storageKey: DEFAULT_STORAGE_KEY,
};

export const PersonalProfilePhoto = Template.bind({});
PersonalProfilePhoto.args = {
  ...backgroundControlDefaults,
  width: 400,
  height: 400,
  text: '400x400',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const CompanyLogo = Template.bind({});
CompanyLogo.args = {
  ...backgroundControlDefaults,
  width: 300,
  height: 300,
  text: '300x300',
  style: {
    borderRadius: '50%',
  },
  storageKey: DEFAULT_STORAGE_KEY,
};

export const CompanyCover = Template.bind({});
CompanyCover.args = {
  ...backgroundControlDefaults,
  width: 1128,
  height: 191,
  text: '1128x191',
  storageKey: DEFAULT_STORAGE_KEY,
};
