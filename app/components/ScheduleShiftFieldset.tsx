import { useState } from 'react';

import type { UseFieldArrayReturn } from 'react-hook-form';
import type { useRemixForm } from 'remix-hook-form';

import type {
  RequirementPayload,
  ShiftFormData,
} from '~/types/form/ScheduleShiftSubmission';
import { datetimeLocalToISO } from '~/utils';

type ShiftFormMethods = ReturnType<typeof useRemixForm<ShiftFormData>>;
type ShiftFieldArray = UseFieldArrayReturn<ShiftFormData, 'shifts'>;

interface Props<R> {
  requirements?: RequirementPayload;
  register: R;
  index: number;
  value: ShiftFormData['shifts'][number];
  remove: ShiftFieldArray['remove'];
  errors: ShiftFormMethods['formState']['errors'];
}

export default function ShiftFieldset<R extends ShiftFormMethods['register']>({
  requirements,
  register,
  index,
  remove,
  errors,
  value,
}: Props<R>) {
  const handleToggleRequirements = () => {
    setShowRequirements(!showRequirements);
  };
  const [showRequirements, setShowRequirements] = useState(false);

  const validateShiftDuration = () => {
    const startTime = new Date(value.start).getTime();
    const endTime = new Date(value.end).getTime();
    const durationInHours = Math.abs(endTime - startTime) / 36e5; // Convert milliseconds to hours
    return durationInHours <= 24;
  };
  const datetimeRegisterOpts = {
    setValueAs: (value: string) => datetimeLocalToISO(value),
    validate: validateShiftDuration,
  };

  return (
    <fieldset className="flex gap-4 items-center justify-between p-4 border border-gray-300 rounded-lg relative mb-4">
      {value.id && <input type="hidden" {...register(`shifts.${index}.id`)} />}

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">
          Start
          <input
            type="datetime-local"
            {...register(`shifts.${index}.start`, datetimeRegisterOpts)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        {errors.shifts?.[index]?.start && (
          <p className="text-red-500 text-xs mt-1">
            {errors.shifts[index]?.start?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-gray-700">
          End
          <input
            type="datetime-local"
            {...register(`shifts.${index}.end`, datetimeRegisterOpts)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </label>
        {errors.shifts?.[index]?.end && (
          <p className="text-red-500 text-xs mt-1">
            {errors.shifts[index]?.end?.message}
          </p>
        )}
      </div>

      {!showRequirements && (
        <button
          type="button"
          onClick={handleToggleRequirements}
          className="text-blue-500 hover:text-blue-700 uppercase font-bold bg-transparent hover:bg-blue-100 px-3 py-2 rounded"
        >
          Add Requirements
        </button>
      )}

      {showRequirements &&
        (requirements && requirements.length > 0 ? (
          <div className="flex flex-col">
            <select
              {...register(`shifts.${index}.coverageRequirementId`)}
              className="block w-full mt-1 px-6 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option key={index} value="">
                None
              </option>
              {requirements.map((r, rIndex) => (
                <option
                  key={rIndex}
                  value={r.name}
                  selected={value.coverageRequirementId === r.name}
                >
                  {r.name}
                </option>
              ))}
            </select>
            {errors.shifts?.[index]?.coverageRequirementId && (
              <p className="text-red-500 text-xs mt-1">
                {errors.shifts[index]?.coverageRequirementId?.message}
              </p>
            )}
          </div>
        ) : (
          <h6 className="text-gray-700">No Requirements Available</h6>
        ))}

      <button
        type="button"
        onClick={() => remove(index)}
        className="text-red-500 hover:text-red-700 uppercase font-bold bg-transparent hover:bg-red-100 px-3 py-2 rounded"
      >
        Delete
      </button>
    </fieldset>
  );
}
