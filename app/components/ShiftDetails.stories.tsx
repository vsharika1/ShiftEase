import type { Meta, StoryObj } from '@storybook/react';

import ShiftDetails from './ShiftDetails';

const meta: Meta<typeof ShiftDetails> = {
  component: ShiftDetails,
  decorators: [
    (Story) => (
      <div className="border-slate-200 border-2 rounded min-w-72">
        <Story />
      </div>
    ),
  ],
  args: {
    users: [
      {
        user_id: '018e54ef-9dca-78e5-b614-95d6d602ae7f',
        nickname: 'Jane Doe',
        phone_number: '555-555-5555',
      },
      {
        user_id: '018e54f0-a78c-7e2a-8cb1-b165bb92fde3',
        nickname: 'Steve Jobs',
        phone_number: '555-555-5555',
      },
    ],
    relativeBase: new Date('2024-03-19T05:57:51.228Z'),
  },
};
export default meta;

type Story = StoryObj<typeof ShiftDetails>;

export const SpanSingleDay: Story = {
  args: {
    shift: {
      id: '018e54e1-6254-7c0b-8bde-90f82d310266',
      start: new Date('2024-03-17T14:00:00Z'),
      end: new Date('2024-03-17T20:00:00Z'),
      createdAt: new Date('2024-03-15T15:00:00Z'),
      updatedAt: new Date('2024-03-15T15:00:00Z'),
      createdById: '018e54e3-0520-7a91-8250-1d8f542c48e4',
    },
  },
};

export const Span25Hours: Story = {
  args: {
    shift: {
      id: '018e54e1-6254-7c0b-8bde-90f82d310266',
      start: new Date('2024-03-16T18:00:00Z'),
      end: new Date('2024-03-17T19:00:00Z'),
      createdAt: new Date('2024-03-15T15:00:00Z'),
      updatedAt: new Date('2024-03-15T15:00:00Z'),
      createdById: '018e54e3-0520-7a91-8250-1d8f542c48e4',
    },
  },
};
