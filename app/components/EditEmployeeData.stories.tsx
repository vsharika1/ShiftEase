import type { Meta, StoryObj } from '@storybook/react';

import EditEmployeeData from './EditEmployeeData';

const meta: Meta<typeof EditEmployeeData> = {
  component: EditEmployeeData,
  args: {
    user: {
      id: '1',
      email: 'test@email.com',
      role: 'test',
      first_name: 'test',
      last_name: 'test',
      phoneNumber: 'test',
    },
  },
};
export default meta;

type Story = StoryObj<typeof EditEmployeeData>;

export const Primary: Story = {
  render: (args) => <EditEmployeeData {...args} />,
};
