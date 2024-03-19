import type { Meta, StoryObj } from '@storybook/react';

import AddEmployeeForm from './AddEmployeeForm';

const meta: Meta<typeof AddEmployeeForm> = {
  component: AddEmployeeForm,
};
export default meta;

type Story = StoryObj<typeof AddEmployeeForm>;

export const Primary: Story = {
  render: () => <AddEmployeeForm />,
};
