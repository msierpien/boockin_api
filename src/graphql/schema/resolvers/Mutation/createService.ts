import type { MutationResolvers } from "./../../../types.generated";
export const createService: NonNullable<
  MutationResolvers["createService"]
> = async (_parent, args, ctx) => {
  try {
    const {
      name,
      description,
      availability_status,
      daily_price,
      service_type_id,
    } = args;

    if (!ctx.user) {
      throw new Error("Not authenticated");
    }
    const service = await ctx.prisma.service.create({
      data: {
        name,
        description,
        availability_status,
        daily_price,
        service_type: {
          connect: {
            id: service_type_id,
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
    return service;
  } catch (error) {
    throw new Error(error);
  }
};
