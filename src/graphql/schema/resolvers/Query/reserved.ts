import type { QueryResolvers } from "./../../../types.generated";
export const reserved: NonNullable<QueryResolvers["reserved"]> = async (
  _parent,
  args,
  ctx,
) => {

  const reserved = await ctx.prisma.reserved.findMany();
  return reserved;
};
