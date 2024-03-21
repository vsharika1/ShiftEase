import { DateTime } from 'ts-luxon';

/**
 * Convert the value from a input[type='datetime-local'] to an ISO string.
 */

const dtlocalFormat = "yyyy-MM-dd'T'HH:mm";

export const datetimeLocalToISO = (dt: string) =>
  DateTime.fromFormat(dt, dtlocalFormat).toISO();

export const isoToDatetimeLocal = (iso: string) =>
  DateTime.fromISO(iso, { setZone: true }).toFormat(dtlocalFormat);
