import type { MutationResolvers } from "../../../types.generated";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup: NonNullable<MutationResolvers["signup"]> = async (
  _parent,
  args,
  ctx,
) => {
  const password = await bcrypt.hash(args.password, 10);
  const defaultRole = await ctx.prisma.role.findFirst({
    where: {
      name: "CUSTOMER",
    },
  });

  if (!defaultRole) {
    throw new Error("Default role not found!");
  }

  const user = await ctx.prisma.user.create({
    data: {
      ...args,
      password,

    },
  });


  await ctx.prisma.userRole.create({
    data: {
      userId: user.id,
      roleId: defaultRole.id,
    },
  });

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!, {
    expiresIn: process.env.TOKEN_EXPIRY_TIME,
  });

  return {
    token,
    user,
  };
};
