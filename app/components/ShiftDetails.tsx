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
    <div>
      {shifts.map((shift) => (
        <div key={shift.shift_id}>
          <p>
            Date: {shift.start_time.toLocaleDateString()} -{' '}
            {shift.end_time.toLocaleDateString()}
          </p>
          <p>
            Shift Assignee: {shift.assignedUser.first_name}{' '}
            {shift.assignedUser.last_name}
          </p>
          <p>
            Contact Info: Email: {shift.assignedUser.email}, Phone:{' '}
            {shift.assignedUser.contact_number}
          </p>
          <p>
            Timing: {shift.start_time.toLocaleTimeString()} -{' '}
            {shift.end_time.toLocaleTimeString()}
          </p>
        </div>
      ))}
    </div>
  );
}
