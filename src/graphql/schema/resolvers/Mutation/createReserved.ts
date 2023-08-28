import type { MutationResolvers } from "./../../../types.generated";
export const createReserved: NonNullable<
  MutationResolvers["createReserved"]
> = async (_parent, args, ctx) => {
  try {
    const { name, description, availability_status, daily_price } = args;
    const reserved = await ctx.prisma.reserved.create({
      data: {
        name,
        description,
        availability_status,
        daily_price,
      },
    });
    return reserved;
  } catch (error) {
    throw new Error(error);
  }
};
