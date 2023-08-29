/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { AuthPayload } from "./schema/resolvers/AuthPayload";
import { createReserved as Mutation_createReserved } from "./schema/resolvers/Mutation/createReserved";
import { createReservedType as Mutation_createReservedType } from "./schema/resolvers/Mutation/createReservedType";
import { deleteReserved as Mutation_deleteReserved } from "./schema/resolvers/Mutation/deleteReserved";
import { deleteReservedType as Mutation_deleteReservedType } from "./schema/resolvers/Mutation/deleteReservedType";
import { login as Mutation_login } from "./schema/resolvers/Mutation/login";
import { signup as Mutation_signup } from "./schema/resolvers/Mutation/signup";
import { updateReserved as Mutation_updateReserved } from "./schema/resolvers/Mutation/updateReserved";
import { updateReservedType as Mutation_updateReservedType } from "./schema/resolvers/Mutation/updateReservedType";
import { reserved as Query_reserved } from "./schema/resolvers/Query/reserved";
import { reservedById as Query_reservedById } from "./schema/resolvers/Query/reservedById";
import { reservedType as Query_reservedType } from "./schema/resolvers/Query/reservedType";
import { reservedTypes as Query_reservedTypes } from "./schema/resolvers/Query/reservedTypes";
import { user as Query_user } from "./schema/resolvers/Query/user";
import { Reserved } from "./schema/resolvers/Reserved";
import { ReservedType } from "./schema/resolvers/ReservedType";
import { User } from "./schema/resolvers/User";
export const resolvers: Resolvers = {
  Query: {
    reserved: Query_reserved,
    reservedById: Query_reservedById,
    reservedType: Query_reservedType,
    reservedTypes: Query_reservedTypes,
    user: Query_user,
  },
  Mutation: {
    createReserved: Mutation_createReserved,
    createReservedType: Mutation_createReservedType,
    deleteReserved: Mutation_deleteReserved,
    deleteReservedType: Mutation_deleteReservedType,
    login: Mutation_login,
    signup: Mutation_signup,
    updateReserved: Mutation_updateReserved,
    updateReservedType: Mutation_updateReservedType,
  },

  AuthPayload: AuthPayload,
  Reserved: Reserved,
  ReservedType: ReservedType,
  User: User,
};
