import { Form, NavLink, useNavigation } from '@remix-run/react';

import { useFieldArray } from 'react-hook-form';
import { useRemixForm } from 'remix-hook-form';

import ScheduleCoverageFieldset from '~/components/ScheduleCoverageFieldset';
import {
  Role,
  scheduleCoverageRequirementsFormResolver,
  type CoverageRequirementPayload,
  type ScheduleCoverageRequirementsFormData,
} from '~/types/form/ScheduleCoverageRequirementSubmission';

interface Props {
  coverage?: CoverageRequirementPayload;
  formAction: string;
}

export default function ScheduleCoverageForm({ formAction }: Props) {
  const nav = useNavigation();
  const isSubmitting = nav.formAction === formAction;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useRemixForm<ScheduleCoverageRequirementsFormData>({
    resolver: scheduleCoverageRequirementsFormResolver,
    defaultValues: {
      coverageRequirements: [{ roleRequirements: [] }],
    },
    shouldUseNativeValidation: true,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'coverageRequirements',
  });

  console.dir(errors);

  return (
    <div className="max-w-6xl px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-y-auto max-h-[95vh]">
        {' '}
        <Form
          action={formAction}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-6xl"
        >
          {fields.map((field, index) => (
            <ScheduleCoverageFieldset
              key={field.id}
              register={register}
              index={index}
              removeCoverage={remove}
              control={control}
              errors={errors}
            />
          ))}
          <div className="flex justify-between items-center mt-6">
            <NavLink
              to="/schedule/coverage"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-md transition duration-300"
            >
              Cancel
            </NavLink>
            <button
              type="button"
              onClick={() => {
                append({
                  name: '',
                  roleRequirements: [
                    {
                      role: Role.Associate,
                      targetEmployeeCount: 1,
                      priority: '',
                    },
                  ],
                });
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-md transition duration-300"
            >
              Add Coverage Requirement
            </button>
            <button
              disabled={isSubmitting}
              className="bg-green-500 hover:bg-green-600 text-white font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-md transition duration-300 disabled:bg-green-300"
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
