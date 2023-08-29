import type {
  MutationResolvers,
  MutationUpdateServiceArgs,
} from "./../../../types.generated";
interface UpdateServiceTypeArgs {
  type_name: string;
  description?: string;
  updatedAt: string;
}

export const updateServiceType: NonNullable<
  MutationResolvers["updateServiceType"]
> = async (_parent, args, ctx) => {
  const { id, type_name, description } = args;
  const updateDate: UpdateServiceTypeArgs = {
    type_name,
    updatedAt: new Date().toISOString(),
  };
  if (description != undefined) {
    updateDate.description = description;
  }

  const reservedType = await ctx.prisma.reservedType.update({
    where: {
      id: id,
    },
    data: updateDate,
  });
  return reservedType;
};
