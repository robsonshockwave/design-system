import { Text, TextProps } from '@robsonshockwave/react/src';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Surfaces/Text',
  component: Text,

  args: {
    children: 'lorem ipsum dolor sit amet',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
};
