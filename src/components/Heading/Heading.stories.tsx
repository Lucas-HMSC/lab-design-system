import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';
import page from './Heading.docs.mdx';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: { page },
  },
  args: {
    children: 'Lorem ipsum.',
  },
  argTypes: {
    size: {
      description: 'options for the size of the title',
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: 'md',
  },
};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
  argTypes: {
    asChild: {
      table: { disable: true },
    },
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
  argTypes: {
    asChild: {
      table: { disable: true },
    },
  },
};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1</h1>
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
