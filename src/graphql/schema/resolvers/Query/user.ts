import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  args,
  ctx,
) => {
  const user = await ctx.prisma.user.findUnique({
    where: { id: args.userId },
  });
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
