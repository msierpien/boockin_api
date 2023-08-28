import type { MutationResolvers } from "./../../../types.generated";
import bscrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login: NonNullable<MutationResolvers["login"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  const user = await _ctx.prisma.user.findUnique({
    where: { email: arg.email },
  });
  if (!user) {
    return null;
  }
  const valid = await bscrypt.compare(arg.password, user.password);
  if (!valid) {
    console.log("Invalid password");
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!, {
    expiresIn: process.env.TOKEN_EXPIRY_TIME,
  });

  return {
    token,
    user,
  };
};
