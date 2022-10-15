import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';
import page from './Text.docs.mdx';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: { page },
  },
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      description: 'options for the size of the text',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    children: {
      description: 'the content that will be rendered inside the component',
      control: 'text',
    },
    asChild: {
      description: 'flag that enables the `Slot` and allows the use of others tags',
      control: { disable: true },
    },
    className: {
      description: 'name of the classes that will be added to the component (can override the default styles applied)',
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
  argTypes: {
    asChild: {
      table: { disable: true },
    },
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
  argTypes: {
    asChild: {
      table: { disable: true },
    },
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    ),
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    asChild: {
      table: { disable: true },
    },
  },
};
