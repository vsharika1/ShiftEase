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
    <fieldset className="flex gap-8 relative">
      {value.id && <input type="hidden" {...register(`shifts.${index}.id`)} />}
      <label>
        Start
        <input
          type="datetime-local"
          {...register(`shifts.${index}.start`, datetimeRegisterOpts)}
        />
        {errors.shifts?.[index]?.start && (
          <p>{errors.shifts[index]?.start?.message}</p>
        )}
      </label>
      <label>
        End
        <input
          type="datetime-local"
          {...register(`shifts.${index}.end`, datetimeRegisterOpts)}
        />
        {errors.shifts?.[index]?.end && (
          <p>{errors.shifts[index]?.end?.message}</p>
        )}
      </label>
      {!showRequirements && (
        <button
          type="button"
          onClick={handleToggleRequirements}
          className="text-blue-500 uppercase font-bold"
        >
          Add Requirements
        </button>
      )}
      {showRequirements &&
        (requirements && requirements.length > 0 ? (
          <div>
            <select {...register(`shifts.${index}.coverageRequirementId`)}>
              <option key={index} value="">
                None
              </option>
              {requirements.map((r, index) => (
                <option
                  key={index}
                  value={r.name}
                  selected={value.coverageRequirementId === r.name}
                >
                  {r.name}
                </option>
              ))}
            </select>
            {errors.shifts?.[index]?.coverageRequirementId && (
              <p>{errors.shifts[index]?.coverageRequirementId?.message}</p>
            )}
          </div>
        ) : (
          <h6>No Requirements Available</h6>
        ))}
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
