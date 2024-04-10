import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'ts-luxon';

import DaySchedule from './DaySchedule';

interface StoryArgs extends ComponentProps<typeof DaySchedule> {
  date: number;
}

type Story = StoryObj<StoryArgs>;

const meta: Meta<StoryArgs> = {
  component: DaySchedule,
  args: {
    date: DateTime.fromISO('2024-03-16T12:00:00').toMillis(),
  },
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
  },
};
export default meta;

export const Full: Story = {
  render: ({ date }) => {
    const dt = DateTime.fromMillis(date);
    const start = dt.startOf('day').toISO();
    const end = dt.endOf('day').toISO();
    return <DaySchedule {...{ start, end }} />;
  },
};

export const StartOfDay: Story = {
  render: ({ date }) => {
    const dt = DateTime.fromMillis(date);
    const start = dt.startOf('day').toISO();
    const end = dt.toISO();
    return <DaySchedule {...{ start, end }} />;
  },
};

export const EndOfDay: Story = {
  render: ({ date }) => {
    const dt = DateTime.fromMillis(date);
    const start = dt.toISO();
    const end = dt.endOf('day').toISO();
    return <DaySchedule {...{ start, end }} />;
  },
};

export const MiddleOfDay: Story = {
  render: ({ date }) => {
    const offset = { hours: 6, minutes: 15 };
    const dt = DateTime.fromMillis(date);
    const start = dt.startOf('day').plus(offset).toISO();
    const end = dt.endOf('day').minus(offset).toISO();
    return <DaySchedule {...{ start, end }} />;
  },
};
