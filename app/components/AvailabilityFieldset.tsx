import type { UseFieldArrayReturn } from 'react-hook-form';
import type { useRemixForm } from 'remix-hook-form';

import type { AvailabilityFormData } from '~/types/form/AvailabilitySubmission';
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
    <fieldset className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-center relative bg-white p-4 rounded-md shadow mb-2">
      {value.id && (
        <input type="hidden" {...register(`availability.${index}.id`)} />
      )}
      <div className="flex-1 min-w-[160px]">
        <label className="block text-sm font-medium text-gray-700">
          Start
          <input
            type="datetime-local"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register(`availability.${index}.start`, datetimeRegisterOpts)}
          />
          {errors.availability?.[index]?.start && (
            <p className="mt-2 text-sm text-red-600">
              {errors.availability[index]?.start?.message}
            </p>
          )}
        </label>
      </div>
      <div className="flex-1 min-w-[160px]">
        <label className="block text-sm font-medium text-gray-700">
          End
          <input
            type="datetime-local"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            {...register(`availability.${index}.end`, datetimeRegisterOpts)}
          />
          {errors.availability?.[index]?.end && (
            <p className="mt-2 text-sm text-red-600">
              {errors.availability[index]?.end?.message}
            </p>
          )}
        </label>
      </div>
      <div className="flex h-[66px]">
        <button
          type="button"
          onClick={() => remove(index)}
          className="inline-flex items-center justify-center px-4 py-2 border-2 border-red-600 rounded-md shadow-sm text-red-600 font-medium hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in-out duration-150"
        >
          Delete
        </button>
      </div>
    </fieldset>
  );
}
