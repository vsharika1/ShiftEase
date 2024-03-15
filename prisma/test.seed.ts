// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'],
// });

// void (await prisma.ingredient.createMany({
//   data: [
//     { name: 'Miyazaki Wagyu A5' },
//     { name: 'Heirloom Beefsteak Tomato' },
//     { name: 'D.O.P. Balsamic Vinegar from Moderna' },
//     { name: 'Osmo Smoked Kosher Salt' },
//     { name: 'Peppercorn' },
//   ],
// }));

// void (await prisma.recipe.create({
//   data: {
//     title: "The best steak you'll ever make.",
//     instructions:
//       'Using a ripping-hot pan, sear the wagyu steak on both sides. Then sprinkle on the smoked salt and freshly cracked peppercorn.',
//     ingredients: {
//       create: [
//         { ingredientName: 'Miyazaki Wagyu A5', quantity: 1 },
//         { ingredientName: 'Osmo Smoked Kosher Salt', quantity: 0 },
//         { ingredientName: 'Peppercorn', quantity: 1 },
//       ],
//     },
//   },
// }));

// void (await prisma.recipe.create({
//   data: {
//     title: 'Only tomatoes.',
//     instructions:
//       'With a high quality, heirloom beefsteak tomato, you will want to eat it alone with nothing else but salt, pepper, and a sear on both sides.',
//     ingredients: {
//       create: [
//         { ingredientName: 'Heirloom Beefsteak Tomato', quantity: 1 },
//         { ingredientName: 'Osmo Smoked Kosher Salt', quantity: 1 },
//         { ingredientName: 'Peppercorn', quantity: 1 },
//       ],
//     },
//   },
// }));
