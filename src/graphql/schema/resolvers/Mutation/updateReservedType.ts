import type { MutationResolvers } from "./../../../types.generated";
interface UpdateReservedTypeArgs {
  type_name: string;
  description?: string;
  updatedAt: string;
}


export const updateReservedType: NonNullable<
  MutationResolvers["updateReservedType"]
> = async (_parent, args, ctx) => {
  const { id, type_name, description } = args;
  const updateDate: UpdateReservedTypeArgs = {
    type_name,
    updatedAt: new Date().toISOString(),
  }
  if (description != undefined) {
    updateDate.description = description;
  }

  const reservedType = await ctx.prisma.reservedType.update({
    where: {
      id: parseInt(id),
    },
    data: updateDate,

  });
  return reservedType;
};
