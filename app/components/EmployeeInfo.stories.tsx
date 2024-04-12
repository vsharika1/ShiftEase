import type { Meta, StoryObj } from '@storybook/react';

import EmployeeInfo from './EmployeeInfo';

const meta: Meta<typeof EmployeeInfo> = {
  component: EmployeeInfo,
  args: {
    user: {
      id: '1',
      email: 'user@email.com',
      first_name: 'John',
      last_name: 'Doe',
      phoneNumber: '123-456-7890',
      role: 'Employee',
    },
    availability: [
      {
        start: new Date(2024, 4, 10).toISOString().split('T')[0] ?? '',
        end: new Date(2024, 4, 12).toISOString().split('T')[0] ?? '',
      },
    ],
    shifts: [
      {
        start: new Date(2024, 4, 14).toISOString().split('T')[0] ?? '',
        end: new Date(2024, 4, 14).toISOString().split('T')[0] ?? '',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof EmployeeInfo>;

export const Primary: Story = {};
