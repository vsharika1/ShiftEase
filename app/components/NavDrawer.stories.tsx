import type { Meta, StoryObj } from '@storybook/react';

import NavDrawer from './NavDrawer';

const meta: Meta<typeof NavDrawer> = {
  component: NavDrawer,
  args: {
    isManager: true,
  }
};
export default meta;

type Story = StoryObj<typeof NavDrawer>;

export const Primary: Story = {
  render: (args) => <NavDrawer {...args} />,
};
