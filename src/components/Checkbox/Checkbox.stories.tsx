import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from '../Text';
import page from './Checkbox.docs.mdx';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: { page },
  },
  argTypes: {
    asChild: {
      table: { disable: true },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          { Story() }
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {};
