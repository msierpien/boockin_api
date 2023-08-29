/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { AuthPayload } from "./schema/resolvers/AuthPayload";
import { createService as Mutation_createService } from "./schema/resolvers/Mutation/createService";
import { createServiceType as Mutation_createServiceType } from "./schema/resolvers/Mutation/createServiceType";
import { deleteService as Mutation_deleteService } from "./schema/resolvers/Mutation/deleteService";
import { deleteServiceType as Mutation_deleteServiceType } from "./schema/resolvers/Mutation/deleteServiceType";
import { login as Mutation_login } from "./schema/resolvers/Mutation/login";
import { signup as Mutation_signup } from "./schema/resolvers/Mutation/signup";
import { updateService as Mutation_updateService } from "./schema/resolvers/Mutation/updateService";
import { updateServiceType as Mutation_updateServiceType } from "./schema/resolvers/Mutation/updateServiceType";
import { reservedType as Query_reservedType } from "./schema/resolvers/Query/reservedType";
import { reservedTypes as Query_reservedTypes } from "./schema/resolvers/Query/reservedTypes";
import { services as Query_services } from "./schema/resolvers/Query/services";
import { servicesById as Query_servicesById } from "./schema/resolvers/Query/servicesById";
import { user as Query_user } from "./schema/resolvers/Query/user";
import { Role } from "./schema/resolvers/Role";
import { Service } from "./schema/resolvers/Service";
import { ServiceType } from "./schema/resolvers/ServiceType";
import { User } from "./schema/resolvers/User";
export const resolvers: Resolvers = {
  Query: {
    reservedType: Query_reservedType,
    reservedTypes: Query_reservedTypes,
    services: Query_services,
    servicesById: Query_servicesById,
    user: Query_user,
  },
  Mutation: {
    createService: Mutation_createService,
    createServiceType: Mutation_createServiceType,
    deleteService: Mutation_deleteService,
    deleteServiceType: Mutation_deleteServiceType,
    login: Mutation_login,
    signup: Mutation_signup,
    updateService: Mutation_updateService,
    updateServiceType: Mutation_updateServiceType,
  },

  AuthPayload: AuthPayload,
  Role: Role,
  Service: Service,
  ServiceType: ServiceType,
  User: User,
};
