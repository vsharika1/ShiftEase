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
    <fieldset className="border border-gray-300 p-4 rounded-lg mb-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <legend className="font-bold text-lg text-gray-800">
          Coverage Requirement {index + 1}
        </legend>
        <button
          type="button"
          onClick={() => removeCoverage(index)}
          className="bg-red-500 hover:bg-red-600 text-white uppercase font-bold p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      </div>
      <div className="mb-3">
        <label
          htmlFor={`coverageRequirements.${index}.name`}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Name
        </label>
        <input
          id={`coverageRequirements.${index}.name`}
          type="text"
          {...register(`coverageRequirements.${index}.name`)}
          className="border border-gray-300 p-2 w-full rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
      </div>
      <div>
        <h4 className="font-bold text-gray-800 mb-2">Role Requirements</h4>
        {roleFields.length > 0 ? (
          roleFields.map((field, roleIndex) => (
            <div key={field.id} className="mb-4 flex flex-wrap items-center">
              <label className="w-auto flex-none font-medium text-sm text-gray-700 mr-2">
                Role ID
              </label>
              <select
                {...register(
                  `coverageRequirements.${index}.roleRequirements.${roleIndex}.role`,
                )}
                className="border border-gray-300 p-2 px-8 rounded-md mr-4 text-gray-700"
              >
                <option value={Role.Manager}>Manager</option>
                <option value={Role.Associate}>Associate</option>
              </select>
              <label className="w-auto flex-none font-medium text-sm text-gray-700 mr-2">
                Target Employee Count
              </label>
              <input
                type="number"
                {...register(
                  `coverageRequirements.${index}.roleRequirements.${roleIndex}.targetEmployeeCount`,
                  { valueAsNumber: true },
                )}
                className="border border-gray-300 p-2 rounded-md mr-4 w-20"
              />
              <label className="w-auto flex-none font-medium text-sm text-gray-700 mr-2">
                Priority
              </label>
              <select
                {...register(
                  `coverageRequirements.${index}.roleRequirements.${roleIndex}.priority`,
                )}
                className="border border-gray-300 p-2 px-8 rounded-md mr-4 text-gray-700"
              >
                <option value="PRIORITY_HIGH">High</option>
                <option value="PRIORITY_LOW">Low</option>
              </select>
              <button
                type="button"
                onClick={() => removeRole(roleIndex)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-gray-600 font-semibold mt-4 mb-2 px-4 py-2 bg-gray-100 rounded border border-gray-300 shadow-sm">
            No role requirements added.
          </div>
        )}
        <button
          type="button"
          onClick={() =>
            appendRole({
              role: Role.Associate,
              targetEmployeeCount: 1,
              priority: 'PRIORITY_LOW',
            })
          }
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Role Requirement
        </button>
      </div>
    </fieldset>
  );
}
