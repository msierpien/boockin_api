import type { MutationResolvers } from "./../../../types.generated";
export const createServiceType: NonNullable<
  MutationResolvers["createServiceType"]
> = async (_parent, args, ctx) => {
  const { type_name, description } = args;
  const serviceType = await ctx.prisma.serviceType.create({
    data: {
      type_name,
      description,
      createdAt: new Date().toISOString(),
    },
  });
  return serviceType;
};
