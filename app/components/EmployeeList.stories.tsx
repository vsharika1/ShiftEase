import type { Meta, StoryObj } from '@storybook/react';

import EmployeeList from './EmployeeList';

// Define your example users according to the User interface
const exampleUsers = [
  {
    id: '1',
    email: 'john.doe@example.com',
    role: 'Administrator',
    first_name: 'John',
    last_name: 'Doe',
    phoneNumber: '123-456-7890',
  },
  {
    id: '2',
    email: 'jane.doe@example.com',
    role: 'User',
    first_name: 'Jane',
    last_name: 'Doe',
    phoneNumber: '098-765-4321',
  },
  {
    id: '3',
    email: 'user3@example.com',
    role: 'Administrator',
    first_name: 'First3',
    last_name: 'Last3',
    phoneNumber: '100-200-3030',
  },
  {
    id: '4',
    email: 'user4@example.com',
    role: 'User',
    first_name: 'First4',
    last_name: 'Last4',
    phoneNumber: '100-200-3040',
  },
  {
    id: '5',
    email: 'user5@example.com',
    role: 'Administrator',
    first_name: 'First5',
    last_name: 'Last5',
    phoneNumber: '100-200-3050',
  },
  {
    id: '6',
    email: 'user6@example.com',
    role: 'User',
    first_name: 'First6',
    last_name: 'Last6',
    phoneNumber: '100-200-3060',
  },
  {
    id: '7',
    email: 'user7@example.com',
    role: 'Administrator',
    first_name: 'First7',
    last_name: 'Last7',
    phoneNumber: '100-200-3070',
  },
  {
    id: '8',
    email: 'user8@example.com',
    role: 'User',
    first_name: 'First8',
    last_name: 'Last8',
    phoneNumber: '100-200-3080',
  },
  {
    id: '9',
    email: 'user9@example.com',
    role: 'Administrator',
    first_name: 'First9',
    last_name: 'Last9',
    phoneNumber: '100-200-3090',
  },
  {
    id: '10',
    email: 'user10@example.com',
    role: 'User',
    first_name: 'First10',
    last_name: 'Last10',
    phoneNumber: '100-200-3010',
  },
];

const meta: Meta<typeof EmployeeList> = {
  component: EmployeeList,
  args: {
    users: exampleUsers,
  },
};
export default meta;

type Story = StoryObj<typeof EmployeeList>;

export const Primary: Story = {
  render: (args) => <EmployeeList {...args} />,
};
