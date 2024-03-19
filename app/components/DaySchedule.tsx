import * as luxon from 'ts-luxon';

interface Props {
  assignedShifts: {
    start_time: Date;
    end_time: Date;
  };
}

export default function DaySchedule({ assignedShifts }: Props) {
  const { start_time, end_time } = assignedShifts;

  const shiftStart = luxon.DateTime.fromJSDate(start_time);
  const shiftEnd = luxon.DateTime.fromJSDate(end_time);

  // Calculate total minutes in a day
  const totalMinutes = 24 * 60;
  // Calculate the start and end times in minutes from the beginning of the day
  const shiftStartMinutes = shiftStart.hour * 60 + shiftStart.minute;
  const shiftEndMinutes = shiftEnd.hour * 60 + shiftEnd.minute;
  // Calculate shift duration in minutes
  const shiftDuration = shiftEndMinutes - shiftStartMinutes;
  // Calculate the left offset and width of the green bar as a percentage of the total day
  const leftOffset = (shiftStartMinutes / totalMinutes) * 100;
  const widthPercent = (shiftDuration / totalMinutes) * 100;

  // Format dates for display
  const formattedShiftStart = shiftStart.toFormat('HH:mm a');
  const formattedShiftEnd = shiftEnd.toFormat('HH:mm a');
  const formattedDate = shiftStart.toFormat('cccc, LLLL dd');
  const duration = shiftEnd.diff(shiftStart).toFormat("h 'hrs' m 'mins'");

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <div className="text-lg font-bold mb-5 text-left">{formattedDate}</div>
      <div
        className="relative border-2 border-gray-300 rounded overflow-hidden bg-gray-100"
        style={{ height: '128px', marginTop: '10px' }}
      >
        {/* Shift duration bar */}
        <div
          className="absolute top-0 bg-green-500 text-black flex items-center justify-center"
          style={{
            left: `${leftOffset.toString()}%`,
            width: `${widthPercent.toString()}%`,
            height: '100%',
          }}
        >
          <span className="rounded px-2 py-1 text-xs font-bold">
            {duration}
          </span>
        </div>
      </div>
      {/* Times container */}
      <div
        className="relative rounded overflow-hidden"
        style={{ height: '20px', marginTop: '10px' }}
      >
        <div
          className="absolute bottom-0 w-full flex px-2"
          style={{
            left: `${leftOffset.toString()}%`,
            width: `${widthPercent.toString()}%`,
            display: 'flex',
            justifyContent: 'space-between',
            height: '20px',
          }}
        >
          {/* Shift start time label */}
          <span className="text-xs font-bold">{formattedShiftStart}</span>

          {/* Shift end time label */}
          <span className="text-xs font-bold">{formattedShiftEnd}</span>
        </div>
      </div>
    </div>
  );
}
