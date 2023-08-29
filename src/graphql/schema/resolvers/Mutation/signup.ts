import type { MutationResolvers } from "../../../../types.generated";
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

  console.log(defaultRole.id);



  const user = await ctx.prisma.user.create({
    data: {
      ...args,
      password,
      roles: {
        connect: {
          id: 1,
        }
      }
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
