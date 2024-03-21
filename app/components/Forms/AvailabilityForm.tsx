import { Form, useNavigation } from '@remix-run/react';

import { useFieldArray } from 'react-hook-form';
import { useRemixForm } from 'remix-hook-form';

import AvailabilityFieldset from '~/components/AvailabilityFieldset';
import {
  availabilityFormResolver,
  type AvailabilityFormData,
  type AvailabilityPayload,
} from '~/types/form/AvailibilitySubmission';
import { isoToDatetimeLocal } from '~/utils';

interface Props {
  availability?: AvailabilityPayload;
  formAction: string;
}

export default function AvailabilityForm({ availability, formAction }: Props) {
  const nav = useNavigation();
  const isSubmitting = nav.formAction === formAction;

  const defaultValues = availability
    ? {
        availability: availability.map(({ id, start, end }) => ({
          id,
          start: isoToDatetimeLocal(start),
          end: isoToDatetimeLocal(end),
        })),
      }
    : { availability: [] };

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
  } = useRemixForm<AvailabilityFormData>({
    resolver: availabilityFormResolver,
    defaultValues,
    shouldUseNativeValidation: true,
  });

  const watchAvailability = watch('availability');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'availability',
  });

  return (
    <Form action={formAction} onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <AvailabilityFieldset
          key={field.id}
          register={register}
          index={index}
          remove={remove}
          value={watchAvailability[index]!}
          errors={errors}
        />
      ))}
      <button
        type="button"
        onClick={() => {
          const dt = new Date(Date.now()).toISOString();
          append({ start: dt, end: dt });
        }}
        className="text-blue-500 uppercase font-bold"
      >
        Add availability
      </button>
      <button disabled={isSubmitting}>Save</button>
    </Form>
  );
}
