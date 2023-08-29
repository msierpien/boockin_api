import type { ReservedResolvers } from "./../../types.generated";
export const Reserved: ReservedResolvers = {
  async item_type(parent, _args, ctx) {
 
    const itemType = await ctx.prisma.reservedType.findUnique({
      where: { id: parent.item_type_id },
    });
    return itemType;
  },
};
