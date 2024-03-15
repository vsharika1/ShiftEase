// import type { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

// import { zodResolver } from '@hookform/resolvers/zod';
// import type { Prisma } from '@prisma/client';
// import type { Any } from 'ts-toolbelt';
// import { z } from 'zod';

// export const IngredientsSubmission = z
//   .object({
//     name: z.string(),
//   })
//   .strict() satisfies z.Schema<Prisma.IngredientUncheckedCreateInput>;

// export const RecipeIngredientSubmission = z.object({
//   recipeId: z.string(),
//   ingredientName: z.string(),
//   quantity: z.number().finite(),
// }) satisfies z.Schema<Prisma.RecipeIngredientUncheckedCreateInput>;

// export const RecipeSubmission = z
//   .object({
//     title: z.string(),
//     instructions: z.string(),
//     ingredients: z.array(RecipeIngredientSubmission).nonempty(),
//   })
//   .strict() satisfies z.Schema<Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;

// export type RecipeFormData = z.infer<typeof RecipeSubmission>;

// export const recipeFormResolver: ReturnType<
//   typeof zodResolver<typeof RecipeSubmission>
// > = zodResolver(RecipeSubmission);

// export type RecipePayload = Any.Compute<
//   Jsonify<
//     Prisma.RecipeGetPayload<{
//       include: { ingredients: true };
//     }>
//   >
// >;
