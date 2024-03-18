import type { Meta, StoryObj } from '@storybook/react';

import EmployeeList from './EmployeeList';

// Define your example users according to the User interface
const exampleUsers = [
  {
    user_id: 1,
    email: 'john.doe@example.com',
    role: {
      role_name: 'Administrator',
    },
    first_name: 'John',
    last_name: 'Doe',
    contact_number: '123-456-7890',
  },
  {
    user_id: 2,
    email: 'jane.doe@example.com',
    role: {
      role_name: 'User',
    },
    first_name: 'Jane',
    last_name: 'Doe',
    contact_number: '098-765-4321',
  },
  {
    user_id: 3,
    email: 'user3@example.com',
    role: {
      role_name: 'Administrator',
    },
    first_name: 'First3',
    last_name: 'Last3',
    contact_number: '100-200-3030',
  },
  {
    user_id: 4,
    email: 'user4@example.com',
    role: {
      role_name: 'User',
    },
    first_name: 'First4',
    last_name: 'Last4',
    contact_number: '100-200-3040',
  },
  {
    user_id: 5,
    email: 'user5@example.com',
    role: {
      role_name: 'Administrator',
    },
    first_name: 'First5',
    last_name: 'Last5',
    contact_number: '100-200-3050',
  },
  {
    user_id: 6,
    email: 'user6@example.com',
    role: {
      role_name: 'User',
    },
    first_name: 'First6',
    last_name: 'Last6',
    contact_number: '100-200-3060',
  },
  {
    user_id: 7,
    email: 'user7@example.com',
    role: {
      role_name: 'Administrator',
    },
    first_name: 'First7',
    last_name: 'Last7',
    contact_number: '100-200-3070',
  },
  {
    user_id: 8,
    email: 'user8@example.com',
    role: {
      role_name: 'User',
    },
    first_name: 'First8',
    last_name: 'Last8',
    contact_number: '100-200-3080',
  },
  {
    user_id: 9,
    email: 'user9@example.com',
    role: {
      role_name: 'Administrator',
    },
    first_name: 'First9',
    last_name: 'Last9',
    contact_number: '100-200-3090',
  },
  {
    user_id: 10,
    email: 'user10@example.com',
    role: {
      role_name: 'User',
    },
    first_name: 'First10',
    last_name: 'Last10',
    contact_number: '100-200-3010',
  },
];


const meta: Meta<typeof EmployeeList> = {
  component: EmployeeList,
  args: {
    users: exampleUsers,
  }
};
export default meta;

type Story = StoryObj<typeof EmployeeList>;

export const Primary: Story = {
  render: (args) => <EmployeeList {...args} />,
};
