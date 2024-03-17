import type { Meta, StoryObj } from '@storybook/react';

import HelloWorldComponent from '~/components/HelloWorld';

const meta: Meta<typeof HelloWorldComponent> = {
  component: HelloWorldComponent,
  args: {
    children: 'one',
  },
  argTypes: {
    children: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HelloWorldComponent>;

export const Basic: Story = {};
