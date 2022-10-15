import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';
import page from './TextInput.docs.mdx';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  parameters: {
    docs: { page },
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your e-mail address' />  
    ],
  },
};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder='Type your e-mail address' />
    ),
  },
};
