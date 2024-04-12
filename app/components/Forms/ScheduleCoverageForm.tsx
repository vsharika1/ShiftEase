import { Form, useNavigation } from '@remix-run/react';

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
    <Form action={formAction} onSubmit={handleSubmit}>
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
      <button
        type="button"
        onClick={() => {
          append({
            name: '',
            roleRequirements: [
              { role: Role.Associate, targetEmployeeCount: 1, priority: '' },
            ],
          });
        }}
        className="text-blue-500 uppercase font-bold"
      >
        Add Coverage Requirement
      </button>
      <button disabled={isSubmitting}>Save</button>
    </Form>
  );
}
