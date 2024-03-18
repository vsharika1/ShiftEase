import type { Meta, StoryObj } from '@storybook/react';

import EditEmployeeData from './EditEmployeeData';

const meta: Meta<typeof EditEmployeeData> = {
  component: EditEmployeeData,
  args: {
    userId: 2,
  },
};
export default meta;

type Story = StoryObj<typeof EditEmployeeData>;

export const Primary: Story = {
  render: (args) => <EditEmployeeData {...args} />,
};
