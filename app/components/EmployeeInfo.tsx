import { AvailabilityCalendar, ShiftsCalendar } from './WeekCalendar';

interface User {
  id: string;
  email: string;
  role: string;
  first_name: string;
  last_name: string;
  phoneNumber: string;
}

interface AvailabilityProps {
  start: string;
  end: string;
}

interface ShiftProps {
  start: string;
  end: string;
}

interface EmployeeDataProps {
  user: User;
  availability: AvailabilityProps[];
  shifts: ShiftProps[];
}

export default function EmployeeInfoData({
  user,
  availability,
  shifts,
}: EmployeeDataProps) {
  return (
    <div className="max-w-4xl p-5 bg-white rounded-lg shadow relative">
      <h1 className="text-2xl font-semibold mb-6 mt-0 border-b pb-2">
        More Info
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-gray-400 block mb-1">User ID:</div>
          <div className="text-gray-800">{user.id}</div>
        </div>
        <div>
          <div className="text-gray-400 block mb-1">Role:</div>
          <div className="text-gray-800">{user.role}</div>
        </div>
        <div>
          <div className="text-gray-400 block mb-1">First Name:</div>
          <div className="text-gray-800">{user.first_name}</div>
        </div>
        <div>
          <div className="text-gray-400 block mb-1">Last Name:</div>
          <div className="text-gray-800">{user.last_name}</div>
        </div>
        <div>
          <div className="text-gray-400 block mb-1">Email:</div>
          <div className="text-gray-800">{user.email}</div>
        </div>
        <div>
          <div className="text-gray-400 block mb-1">Contact Number:</div>
          <div className="text-gray-800">{user.phoneNumber}</div>
        </div>
        <div className="md:col-span-2">
          <div className="text-gray-400 block mb-1">Availability:</div>
          <div className="max-w-4xl mx-auto mt-3 relative">
            <AvailabilityCalendar availability={availability} />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="text-gray-400 block mb-1">Upcoming Shifts:</div>
          <div className="max-w-4xl mx-auto mt-3 relative">
            <ShiftsCalendar shifts={shifts} />
          </div>
        </div>
      </div>
    </div>
  );
}
