import type { Meta, StoryObj } from '@storybook/react';

import ShiftDetails from './ShiftDetails';

interface ShiftDetailsProps {
  shifts: Shift[];
}

interface User {
  user_id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  contact_number?: string;
}

interface Shift {
  shift_id: number;
  start_time: Date;
  end_time: Date;
  assigned_user_id: number;
  assignedUser: User;
  is_approved: boolean;
}

const meta: Meta<ShiftDetailsProps> = {
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
      // ... more shifts can be added here
    ],
  },
};
export default meta;

type Story = StoryObj<ShiftDetailsProps>;

export const Default: Story = {
  render: (args) => <ShiftDetails {...args} />,
};
