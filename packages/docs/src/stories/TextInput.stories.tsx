import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@robsonshockwave/react/src';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        <Text size="sm">Email address</Text>
        <Story />
      </Box>
    ),
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Enter your username',
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
};
