import type { Meta, StoryObj } from '@storybook/react';

import DaySchedule from './DaySchedule';

const meta: Meta<typeof DaySchedule> = {
  component: DaySchedule,
  args: {
    assignedShifts: {
      start_time: new Date('2024-03-16T08:00:00'),
      end_time: new Date('2024-03-16T15:30:00'),
    },
  },
};
export default meta;

type Story = StoryObj<typeof DaySchedule>;

export const Primary: Story = {
  render: (args) => <DaySchedule {...args} />,
};
