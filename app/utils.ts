import { DateTime } from 'ts-luxon';

import type { ShiftDateTime } from '~/types/form/ScheduleCoverageRequirementSubmission';

/**
 * Convert the value from a input[type='datetime-local'] to an ISO string.
 */

const dtlocalFormat = "yyyy-MM-dd'T'HH:mm";

export const datetimeLocalToISO = (dt: string) =>
  DateTime.fromFormat(dt, dtlocalFormat).toISO();

export const isoToDatetimeLocal = (iso: string) =>
  DateTime.fromISO(iso, { setZone: true }).toFormat(dtlocalFormat);

export const datetimeLocalToShiftDateTime = (dt: string): ShiftDateTime => {
  const shiftDate = DateTime.fromFormat(dt, dtlocalFormat);

  return {
    year: shiftDate.year,
    month: shiftDate.month,
    day: shiftDate.day,
    hours: shiftDate.hour,
    minutes: shiftDate.minute,
  };
};
