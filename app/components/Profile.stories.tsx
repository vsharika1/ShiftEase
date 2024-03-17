import type { Meta, StoryObj } from '@storybook/react';

import Profile from './Profile';

const meta: Meta<typeof Profile> = {
  component: Profile,
  args: {
    user_id: 1,
    email: 'user@email.com',
    first_name: 'John',
    last_name: 'Doe',
    contact_number: '123-456-7890',
    role: {
      role_name: 'Employee',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {
  render: (args) => <Profile {...args} />,
};
