import type { Meta, StoryObj } from '@storybook/react';

import SwapRequest from './SwapRequest';

const meta: Meta<typeof SwapRequest> = {
  component: SwapRequest,
  args: {
    initiatorName: 'test person 1',
    targetName: 'test person 2',
    shiftInfo: {
      startTime: new Date(Date.now()),
      endTime: new Date(Date.now() + 100_000_000),
    },
  },
};
export default meta;

type Story = StoryObj<typeof SwapRequest>;

export const Primary: Story = {
  render: (args) => <SwapRequest {...args} />,
};
