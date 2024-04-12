import { DateTime, Info } from 'ts-luxon';

interface AvailabilityRange {
  start: string;
  end: string;
}

interface AvailabilityCalendarProps {
  availability: AvailabilityRange[];
}

interface Shift {
  start: string;
  end: string;
}

interface ShiftsCalendarProps {
  shifts: Shift[];
}

interface CalendarGridProps {
  dates: DateTime[];
  highlightCondition: (date: DateTime) => boolean;
}

const getNextSevenDays = (): DateTime[] =>
  Array.from({ length: 7 }).map((_, index) =>
    DateTime.now().plus({ days: index }),
  );

const formatDate = (date: DateTime): string =>
  date.toLocaleString({ month: 'short', day: 'numeric' });

const CalendarGrid = ({ dates, highlightCondition }: CalendarGridProps) => {
  const daysOfWeek = Info.weekdays('short');

  return (
    <div className="grid grid-cols-7 gap-4">
      {dates.map((date, index) => {
        const dayOfWeek = daysOfWeek[date.weekday - 1] ?? '';
        const isHighlighted = highlightCondition(date);
        return (
          <div
            key={index}
            className={`border p-4 h-auto min-h-[100px] rounded-lg shadow ${isHighlighted ? 'bg-blue-400' : 'bg-gray-300'}`}
          >
            <div className="font-bold text-center">{dayOfWeek}</div>
            <div className="text-center">{formatDate(date)}</div>
          </div>
        );
      })}
    </div>
  );
};

function highlightConditionForAvailability(availability: AvailabilityRange[]) {
  return function highlightCondition(date: DateTime): boolean {
    return availability.some(({ start, end }) => {
      const startDate = DateTime.fromISO(start).startOf('day');
      const endDate = DateTime.fromISO(end).endOf('day');
      return date >= startDate && date <= endDate;
    });
  };
}

function highlightConditionForShifts(shifts: Shift[]) {
  return function highlightCondition(date: DateTime): boolean {
    return shifts.some(({ start, end }) => {
      const shiftDate = DateTime.fromISO(start).startOf('day');
      const shiftEndDate = end ? DateTime.fromISO(end).endOf('day') : shiftDate;
      return date >= shiftDate && date <= shiftEndDate;
    });
  };
}

export function AvailabilityCalendar({
  availability,
}: AvailabilityCalendarProps) {
  const highlightCondition = highlightConditionForAvailability(availability);

  return (
    <CalendarGrid
      dates={getNextSevenDays()}
      highlightCondition={highlightCondition}
    />
  );
}

export function ShiftsCalendar({ shifts }: ShiftsCalendarProps) {
  const highlightCondition = highlightConditionForShifts(shifts);
  return (
    <CalendarGrid
      dates={getNextSevenDays()}
      highlightCondition={highlightCondition}
    />
  );
}
