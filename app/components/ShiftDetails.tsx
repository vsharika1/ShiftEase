interface User {
  user_id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  contact_number?: string;
}

interface Shift {
  shift_id: number;
  start_time: Date;
  end_time: Date;
  assigned_user_id: number;
  assignedUser: User;
  is_approved: boolean;
}

interface ShiftDetailsProps {
  shifts: Shift[];
}

export default function ShiftDetails({ shifts }: ShiftDetailsProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -m-2">
        {shifts.map((shift) => (
          <div key={shift.shift_id} className="p-2 w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
              <div className="p-4">
                <p className="text-gray-800 text-base mb-2">
                  Date: {shift.start_time.toLocaleDateString()} -{' '}
                  {shift.end_time.toLocaleDateString()}
                </p>
                <p className="text-gray-800 text-base mb-2">
                  Shift Assignee: {shift.assignedUser.first_name}{' '}
                  {shift.assignedUser.last_name}
                </p>
                <p className="text-gray-800 text-base mb-2">Contact Info:</p>
                <p className="text-gray-800 text-base mb-2">
                  Email: {shift.assignedUser.email}
                </p>
                <p className="text-gray-800 text-base mb-2">
                  Phone: {shift.assignedUser.contact_number}
                </p>
                <p className="text-gray-800 text-base mb-2">
                  Timing: {shift.start_time.toLocaleTimeString()} -{' '}
                  {shift.end_time.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
