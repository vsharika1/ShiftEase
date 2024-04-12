import { Form, NavLink, useNavigation } from '@remix-run/react';

import { useFieldArray } from 'react-hook-form';
import { useRemixForm } from 'remix-hook-form';

import ScheduleShiftFieldset from '~/components/ScheduleShiftFieldset';
import {
  shiftFormResolver,
  type RequirementPayload,
  type ShiftFormData,
  type ShiftPayload,
} from '~/types/form/ScheduleShiftSubmission';
import { isoToDatetimeLocal } from '~/utils';

interface Props {
  shifts?: ShiftPayload;
  requirements?: RequirementPayload;
  formAction: string;
}

export default function ScheduleShiftForm({
  shifts,
  requirements,
  formAction,
}: Props) {
  const nav = useNavigation();
  const isSubmitting = nav.formAction === formAction;

  const defaultValues = shifts
    ? {
        shifts: shifts.map(({ id, start, end }) => ({
          id,
          start: isoToDatetimeLocal(start),
          end: isoToDatetimeLocal(end),
        })),
      }
    : { shifts: [] };

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
  } = useRemixForm<ShiftFormData>({
    resolver: shiftFormResolver,
    defaultValues,
    shouldUseNativeValidation: true,
  });

  const watchShift = watch('shifts');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'shifts',
  });

  return (
    <div className="max-w-6xl overflow-y-auto max-h-[95vh]">
      <Form
        action={formAction}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-gray-900 mt-0 mb-6">
          Edit Shifts
        </h1>
        <div className="pr-2">
          {' '}
          {fields.map((field, index) => (
            <ScheduleShiftFieldset
              key={field.id}
              requirements={requirements}
              register={register}
              index={index}
              remove={remove}
              value={watchShift[index]!}
              errors={errors}
            />
          ))}
        </div>
        <div className="flex justify-between items-center mt-6 space-x-4">
          <NavLink
            to="/schedule/shift"
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-md transition duration-300 ease-in-out"
          >
            Cancel
          </NavLink>
          <button
            type="button"
            onClick={() => {
              const dt = new Date(Date.now()).toISOString();
              append({
                start: isoToDatetimeLocal(dt),
                end: isoToDatetimeLocal(dt),
              });
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg transition duration-300 ease-in-out"
          >
            Add Shift
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-500 hover:bg-green-600 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg transition duration-300 ease-in-out disabled:bg-green-300"
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </Form>
    </div>
  );
}
