import { useFieldArray, type UseFieldArrayReturn } from 'react-hook-form';
import type { useRemixForm } from 'remix-hook-form';

import {
  Role,
  type ScheduleCoverageRequirementsFormData,
} from '~/types/form/ScheduleCoverageRequirementSubmission';

type ScheduleCoverageFormMethods = ReturnType<
  typeof useRemixForm<ScheduleCoverageRequirementsFormData>
>;
type ScheduleCoverageFieldArray = UseFieldArrayReturn<
  ScheduleCoverageRequirementsFormData,
  'coverageRequirements'
>;

interface Props<R> {
  register: R;
  index: number;
  errors: ScheduleCoverageFormMethods['formState']['errors'];
  control: ScheduleCoverageFormMethods['control'];
  removeCoverage: ScheduleCoverageFieldArray['remove'];
}

export default function ScheduleCoverageFieldset<
  R extends ScheduleCoverageFormMethods['register'],
>({ register, control, index, removeCoverage }: Props<R>) {
  const {
    fields: roleFields,
    append: appendRole,
    remove: removeRole,
  } = useFieldArray({
    control,
    name: `coverageRequirements.${index}.roleRequirements`,
  });

  return (
    <fieldset className="border p-4 rounded mb-4">
      <legend className="font-bold mb-2">
        Coverage Requirement {index + 1}
      </legend>
      <div className="mb-3">
        <label
          htmlFor={`coverageRequirements.${index}.name`}
          className="block mb-2"
        >
          Name
        </label>
        <input
          id={`coverageRequirements.${index}.name`}
          type="text"
          {...register(`coverageRequirements.${index}.name`)}
          className="border p-1 w-full"
        />
      </div>
      <div>
        <h4 className="font-bold">Role Requirements</h4>
        {roleFields.map((field, roleIndex) => (
          <div key={field.id} className="mb-2">
            <label>Role ID</label>
            <select
              {...register(
                `coverageRequirements.${index}.roleRequirements.${roleIndex}.role`,
              )}
              className="border p-1 ml-2"
            >
              <option value={Role.Manager}>Manager</option>
              <option value={Role.Associate}>Associate</option>
            </select>
            <label className="ml-4">Target Employee Count</label>
            <input
              type="number"
              {...register(
                `coverageRequirements.${index}.roleRequirements.${roleIndex}.targetEmployeeCount`,
                { valueAsNumber: true },
              )}
              className="border p-1 ml-2"
            />
            <label className="ml-4">Priority</label>
            <select
              {...register(
                `coverageRequirements.${index}.roleRequirements.${roleIndex}.priority`,
              )}
              className="border p-1 ml-2"
            >
              <option value="PRIORITY_HIGH">High</option>
              <option value="PRIORITY_LOW">Low</option>
            </select>
            <button
              type="button"
              onClick={() => removeRole(roleIndex)}
              className="ml-4 bg-red-500 text-white p-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            appendRole({
              role: Role.Associate,
              targetEmployeeCount: 1,
              priority: 'PRIORITY_LOW',
            })
          }
          className="mt-2 bg-blue-500 text-white p-1 rounded"
        >
          Add Role Requirement
        </button>
      </div>
      <button
        type="button"
        onClick={() => removeCoverage(index)}
        className="text-red-500 uppercase font-bold"
      >
        Delete
      </button>
    </fieldset>
  );
}
