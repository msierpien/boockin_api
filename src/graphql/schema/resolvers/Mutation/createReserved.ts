import type { MutationResolvers } from "./../../../types.generated";
export const createReserved: NonNullable<
  MutationResolvers["createReserved"]
> = async (_parent, args, ctx) => {

  
  try {
    const {
      name,
      description,
      availability_status,
      daily_price,
      item_type_id,
    } = args;

    if (!ctx.user) {
      throw new Error("Not authenticated");
    }
    const reserved = await ctx.prisma.reserved.create({
      data: {
        name,
        description,
        availability_status,
        daily_price,
        item_type: {
          connect: {
            id: item_type_id,
          },
        },
        user: {
          connect: {
            id: ctx.user.userId,
          },
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
    return reserved;
  } catch (error) {
    throw new Error(error);
  }
};
