import type { Meta, StoryObj } from '@storybook/react';

import ShiftDetails from './ShiftDetails';

const meta: Meta<typeof ShiftDetails> = {
  title: 'Components/ShiftDetails',
  component: ShiftDetails,
  args: {
    shifts: [
      {
        shift_id: 1,
        start_time: new Date('2024-03-17T09:00:00Z'),
        end_time: new Date('2024-03-17T17:00:00Z'),
        assigned_user_id: 1,
        assignedUser: {
          user_id: 1,
          email: 'jane.doe@example.com',
          first_name: 'Jane',
          last_name: 'Doe',
          contact_number: '555-1234',
        },
        is_approved: true,
      },
      {
        shift_id: 2,
        start_time: new Date('2024-03-17T09:00:00Z'),
        end_time: new Date('2024-03-17T17:00:00Z'),
        assigned_user_id: 2,
        assignedUser: {
          user_id: 2,
          email: 'steve.jobs@example.com',
          first_name: 'Steve',
          last_name: 'Jobs',
          contact_number: '555-1234',
        },
        is_approved: true,
      },
      // ... more shifts can be added here
    ],
  },
};
export default meta;

type Story = StoryObj<typeof ShiftDetails>;

export const Default: Story = {
  render: (args) => <ShiftDetails {...args} />,
};
