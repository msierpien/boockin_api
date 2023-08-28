import type { MutationResolvers } from "./../../../types.generated";
export const createReservedType: NonNullable<
  MutationResolvers["createReservedType"]
> = async (_parent, args, _ctx) => {
  /* Implement Mutation.createReservedType resolver logic here */
  const { type_name, description } = args;
  const reservedType = await _ctx.prisma.reservedType.create({
    data: {
      type_name,
      description,
      createdAt: new Date().toISOString(),
    },
  });
  return reservedType;
};
