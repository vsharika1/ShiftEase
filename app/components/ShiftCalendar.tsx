import type { ReactNode } from 'react';

import { DateTime, Info, Interval } from 'ts-luxon';
import { getWeekStartByLocale } from 'weekstart/full';

interface Props {
  // https://en.wikipedia.org/wiki/ISO_week_date
  weekYear: number;
  weekNumber: number;
  locale: string;
  today: string;
}

type IntervalWithStartAndEnd = Interval & { start: DateTime; end: DateTime };

function intervalHasStartAndEnd(int: Interval): int is IntervalWithStartAndEnd {
  return Boolean(int.start && int.end);
}

function checkInterval(int: Interval): IntervalWithStartAndEnd {
  if (!intervalHasStartAndEnd(int))
    throw new Error('Interval does not have start and end');

  return int;
}

function getWeekInterval(
  locale: string,
  weekYear: number,
  weekNumber: number,
): IntervalWithStartAndEnd {
  const weekStart = DateTime.fromObject({ weekYear, weekNumber }, { locale });
  const result = checkInterval(
    Interval.fromDateTimes(weekStart, weekStart.endOf('week')),
  );

  return result;
}

function getLargestOverlappedMonthRangeEnd(
  int: IntervalWithStartAndEnd,
): DateTime {
  const { start, end } = int;

  if (int.hasSame('month')) {
    return start;
  }

  const splitPoint = end.startOf('month');
  const [before, after] = int.splitAt(splitPoint);

  if (!before || !after)
    throw new Error('Did not split interval correctly somehow');

  return before.length('days') > after.length('days')
    ? checkInterval(before).start
    : checkInterval(after).end;
}

function rotate<T>(arr: T[], n: number) {
  return arr.slice(n, arr.length).concat(arr.slice(0, n));
}

export default function ShiftCalendar({
  weekYear,
  weekNumber,
  locale,
  today,
}: Props) {
  const weekInterval = getWeekInterval(locale, weekYear, weekNumber);
  const titleDT = getLargestOverlappedMonthRangeEnd(weekInterval);
  const todayDT = DateTime.fromISO(today, { setZone: true, locale });

  const weekDays = rotate(
    Info.weekdaysFormat('short', { locale }),
    getWeekStartByLocale(locale) - 1,
  ).map((name, index) => (
    <div key={name} className="flex items-center justify-center py-3">
      <span className="">
        {name}&nbsp;
        <span
          className={
            'font-bold ' +
            (name === todayDT.weekdayShort
              ? 'inline-flex items-center justify-center ml-1.5 w-8 h-8 rounded-full bg-blue-500 text-white'
              : '')
          }
        >
          {weekInterval.start.plus(index).toLocaleString({ day: 'numeric' })}
        </span>
      </span>
    </div>
  ));

  const rowEles: ReactNode[] = [];

  for (let i = 0; i < 48; ++i) {
    rowEles.push(
      <div key={i} className="grid grid-cols-subgrid col-start-1 col-span-1" />,
    );
  }

  return (
    <div className="flex flex-col items-stretch min-w-[768px]">
      <header className="flex items-stretch p-4">
        <div className="grow font-bold">
          {titleDT.toLocaleString({ year: 'numeric', month: 'long' })}
        </div>
        <div className="min-h-9">ACTIONS</div>
      </header>

      <div className="relative overflow-y-auto grid grid-cols-[3.5rem_repeat(7,1fr)_2rem]">
        <div className="sticky top-0 shadow z-30 grid grid-cols-subgrid col-span-9">
          <div className="h-14 divide-x grid grid-cols-subgrid col-start-2 col-span-7">
            {weekDays}
          </div>
        </div>
        <div className="grid grid-cols-subgrid col-start-2 col-span-7 grid-rows-[1.75rem_repeat(288,minmax(0px,1fr))]">
          <div />
        </div>
      </div>
    </div>
  );
}
