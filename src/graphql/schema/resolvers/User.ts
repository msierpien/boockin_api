import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  async roles(parent, _args, ctx) {
    const role = await ctx.prisma.role.findUnique({
      where: { id: parent.id },
    });
    return role;
  },
};
