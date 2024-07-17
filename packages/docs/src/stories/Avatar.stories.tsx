import { Avatar, AvatarProps } from '@robsonshockwave/react/src';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://avatars.dicebear.com/api/avataaars/john.svg',
    alt: 'John',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
