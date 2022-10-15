import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import page from './Button.docs.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: { page },
  },
  argTypes: {
    children: {
      description: 'the content that will be rendered inside the component',
      control: 'text',
    },
    asChild: {
      description: 'flag that enables the `Slot` and allows the use of others tags',
      control: { disable: true },
    },
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Create account',
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <a>Create account</a>
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
