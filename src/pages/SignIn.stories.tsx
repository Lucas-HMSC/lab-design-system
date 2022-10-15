import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { SignIn } from './SignIn';
import page from './SignIn.docs.mdx';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  parameters: {
    docs: { page },
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }));
        })
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'lucashms.carvalho@gmail.com', {
      delay: 100,
    });
    await userEvent.type(canvas.getByPlaceholderText('********'), '12345678', {
      delay: 100,
    });
    
    userEvent.click(canvas.getByLabelText('Lembrar de mim por 30 dias'));

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    });
  }
};
