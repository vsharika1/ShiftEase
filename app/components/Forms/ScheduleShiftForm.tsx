import { Form, useNavigation } from '@remix-run/react';

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
    <Form action={formAction} onSubmit={handleSubmit}>
      <h1>Edit Shifts</h1>
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
      <button
        type="button"
        onClick={() => {
          const dt = new Date(Date.now()).toISOString();
          append({
            start: isoToDatetimeLocal(dt),
            end: isoToDatetimeLocal(dt),
          });
        }}
        className="text-blue-500 uppercase font-bold"
      >
        Add Shift
      </button>
      <button disabled={isSubmitting}>Save</button>
    </Form>
  );
}
