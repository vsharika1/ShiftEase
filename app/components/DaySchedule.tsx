import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import type { Prisma } from '@prisma/client';
import * as luxon from 'ts-luxon';

type Props = Jsonify<Pick<Prisma.ShiftGetPayload<undefined>, 'start' | 'end'>>;

const LUXON_BASE_OPTS = {
  setZone: true,
} as const;

export default function DaySchedule({ start, end }: Props) {
  const shiftStart = luxon.DateTime.fromISO(start, LUXON_BASE_OPTS);
  const shiftEnd = luxon.DateTime.fromISO(end, LUXON_BASE_OPTS);

  // Calculate total minutes in a day
  const totalMinutes = 24 * 60;
  // Calculate the start and end times in minutes from the beginning of the day
  const shiftStartMinutes = shiftStart
    .diff(shiftStart.startOf('day'))
    .as('minutes');
  // Calculate shift duration in minutes
  const shiftEndMinutes = shiftEnd.endOf('day').diff(shiftEnd).as('minutes');
  // Calculate the horizontal offsets of the green bar as a percentage of the total day
  const leftOffset = (shiftStartMinutes / totalMinutes) * 100;
  const rightOffset = (shiftEndMinutes / totalMinutes) * 100;

  // Format dates for display
  const formattedShiftStart = shiftStart.toLocaleString(
    luxon.DateTime.TIME_SIMPLE,
  );
  const formattedShiftEnd = shiftEnd.toLocaleString(luxon.DateTime.TIME_SIMPLE);
  const formattedDate = shiftStart.toLocaleString({
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  });
  const duration = shiftEnd.diff(shiftStart).shiftTo('hours', 'minutes');

  return (
    <div className="max-w-4xl p-5 bg-white rounded-lg shadow-lg">
      <div className="text-lg font-bold mb-5 text-left">{formattedDate}</div>
      <div className="relative overflow-hidden border-2 border-gray-300 rounded bg-gray-100 h-32 [container-type:size]">
        {/* Shift duration bar */}
        <div
          className="absolute inset-0 bg-green-500 text-black flex items-center justify-center px-2 py-1"
          style={{
            left: `${leftOffset}cqw`,
            right: `${rightOffset}cqw`,
          }}
        >
          <span className="text-xs font-bold">
            {duration.set({ minutes: Math.round(duration.minutes) }).toHuman({
              unitDisplay: 'short',
            })}
          </span>
        </div>
      </div>
      {/* Times container */}
      <div className="rounded mt-2 h-5 text-xs font-bold px-2 text-center">
        {/* Shift start time label */}
        {formattedShiftStart}
        &nbsp;-&nbsp;
        {/* Shift end time label */}
        {formattedShiftEnd}
      </div>
    </div>
  );
}
