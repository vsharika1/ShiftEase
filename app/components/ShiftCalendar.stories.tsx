import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { default as Component } from './ShiftCalendar';

type StoryArgs = ComponentProps<typeof Component>;

const meta: Meta<StoryArgs> = {
  component: Component,
  args: {
    locale: 'en-US',
    weekYear: 2024,
    weekNumber: 20,
    today: '2024-W20-5',
  },
};
export default meta;

type Story = StoryObj<StoryArgs>;

export const Primary: Story = {};
