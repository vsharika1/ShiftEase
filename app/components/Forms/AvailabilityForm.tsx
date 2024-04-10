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
    <>
      <h2 className="flex justify-center text-xl font-bold text-gray-800 my-5">
        Edit Availability
      </h2>
      <Form
        action={formAction}
        onSubmit={handleSubmit}
        className="space-y-4 mt-5"
      >
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
        <div className="flex justify-center gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              const dt = new Date(Date.now()).toISOString();
              append({ start: dt, end: dt });
            }}
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-xs rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:-translate-y-1 active:translate-y-0 uppercase font-semibold"
          >
            Add Availability
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 text-xs font-semibold uppercase rounded-md shadow ${isSubmitting ? 'bg-gray-500 text-gray-300' : 'bg-green-600 text-white hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out transform hover:-translate-y-1 active:translate-y-0`}
          >
            {isSubmitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </Form>
    </>
  );
}
