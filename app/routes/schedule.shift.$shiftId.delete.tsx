import { redirect, type ActionFunctionArgs } from '@remix-run/node';

import { prisma } from '~/.server/db';

export async function action({ params }: ActionFunctionArgs) {
  await prisma.shift.delete({
    where: { id: params.shiftId },
  });
  return redirect('/schedule/shift');
}
