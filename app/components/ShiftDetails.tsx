import type { Prisma } from '@prisma/client';
import * as luxon from 'ts-luxon';

type Shift = Prisma.ShiftGetPayload<{
  // include: { assignedTo: false; createdBy: false };
}>;

// TODO: remove when auth is implemented
// See: https://auth0.github.io/node-auth0/interfaces/management.GetUsers200ResponseOneOfInner.html
interface Auth0User {
  user_id: string;
  nickname: string;
  phone_number: string;
}

interface Props {
  shift: Shift;
  users: Auth0User[];
  relativeBase?: Date;
}

const LUXON_BASE_OPTS = { setZone: true } as const;

export default function ShiftDetails({ shift, users, relativeBase }: Props) {
  const base = relativeBase
    ? luxon.DateTime.fromJSDate(relativeBase, LUXON_BASE_OPTS)
    : undefined;
  const startDate = luxon.DateTime.fromJSDate(shift.start, LUXON_BASE_OPTS);
  const endDate = luxon.DateTime.fromJSDate(shift.end, LUXON_BASE_OPTS);
  const interval = luxon.Interval.fromDateTimes(startDate, endDate);
  const updatedAt = luxon.DateTime.fromJSDate(shift.updatedAt, LUXON_BASE_OPTS);

  return (
    <div className="px-6 py-6 text-slate-700 flex flex-col items-stretch">
      <div className="text-4xl font-medium first-letter:uppercase mb-3 text-slate-800">
        <div className="text-lg whitespace-nowrap">
          {startDate.toRelativeCalendar({ base })}
        </div>
        for{' '}
        {interval.toDuration().shiftTo('hours', 'minutes').toHuman({
          maximumFractionDigits: 0,
          listStyle: 'narrow',
          unitDisplay: 'long',
        })}
      </div>
      <div className="text-xs font-medium text-slate-400">
        {interval.toLocaleString(luxon.DateTime.DATETIME_SHORT)}
      </div>
      <div className="text-xs font-medium text-slate-400">
        Updated {updatedAt.toRelative({ base })}
      </div>
      {users.length && (
        <div className="mt-6">
          <div className="uppercase text-sm font-semibold ">Workers</div>
          <ul className="border-t border-slate-200 pt-2">
            {users.map((user) => (
              <li key={user.user_id} className="py-2 flex gap-4">
                <div className="grow">{user.nickname}</div>
                <div>{user.phone_number}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
