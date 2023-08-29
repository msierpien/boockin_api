import type { ServiceResolvers } from "./../../types.generated";
export const Service: ServiceResolvers = {
  async service_type(parent, _args, ctx) {
    const itemType = await ctx.prisma.reservedType.findUnique({
      where: { id: parent.service_type_id },
    });
    return itemType;
  },
};
