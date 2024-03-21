import type { UseFieldArrayReturn } from 'react-hook-form';
import type { useRemixForm } from 'remix-hook-form';

import type { AvailabilityFormData } from '~/types/form/AvailibilitySubmission';
import { datetimeLocalToISO } from '~/utils';

type AvailabilityFormMethods = ReturnType<
  typeof useRemixForm<AvailabilityFormData>
>;
type AvailabilityFieldArray = UseFieldArrayReturn<
  AvailabilityFormData,
  'availability'
>;

interface Props<R> {
  register: R;
  index: number;
  value: AvailabilityFormData['availability'][number];
  remove: AvailabilityFieldArray['remove'];
  errors: AvailabilityFormMethods['formState']['errors'];
}

const datetimeRegisterOpts = {
  setValueAs: (value: string) => datetimeLocalToISO(value),
} as const;

export default function AvailabilityFieldset<
  R extends AvailabilityFormMethods['register'],
>({ register, index, remove, errors, value }: Props<R>) {
  return (
    <fieldset className="flex gap-8 relative">
      {value.id && (
        <input type="hidden" {...register(`availability.${index}.id`)} />
      )}
      <label>
        Start
        <input
          type="datetime-local"
          {...register(`availability.${index}.start`, datetimeRegisterOpts)}
        />
        {errors.availability?.[index]?.start && (
          <p>{errors.availability[index]?.start?.message}</p>
        )}
      </label>
      <label>
        End
        <input
          type="datetime-local"
          {...register(`availability.${index}.end`, datetimeRegisterOpts)}
        />
        {errors.availability?.[index]?.end && (
          <p>{errors.availability[index]?.end?.message}</p>
        )}
      </label>
      <button
        type="button"
        onClick={() => remove(index)}
        className="text-red-500 uppercase font-bold"
      >
        Delete
      </button>
    </fieldset>
  );
}
