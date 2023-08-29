import { GraphQLResolveInfo } from "graphql";
import { Context, Mapper } from "../types.js";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  createReserved: Reserved;
  createReservedType?: Maybe<ReservedType>;
  deleteReserved?: Maybe<Array<Reserved>>;
  deleteReservedType?: Maybe<ReservedType>;
  login?: Maybe<AuthPayload>;
  signup?: Maybe<AuthPayload>;
  updateReserved: Reserved;
  updateReservedType?: Maybe<ReservedType>;
};

export type MutationCreateReservedArgs = {
  availability_status: Scalars["String"]["input"];
  daily_price: Scalars["Float"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  item_type_id: Scalars["Int"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationCreateReservedTypeArgs = {
  description: Scalars["String"]["input"];
  type_name: Scalars["String"]["input"];
};

export type MutationDeleteReservedArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteReservedTypeArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationSignupArgs = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationUpdateReservedArgs = {
  availability_status: Scalars["String"]["input"];
  daily_price: Scalars["Float"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  item_type_id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationUpdateReservedTypeArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  type_name: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  reserved: Array<Reserved>;
  reservedById: Reserved;
  reservedType?: Maybe<ReservedType>;
  reservedTypes?: Maybe<Array<Maybe<ReservedType>>>;
  user?: Maybe<User>;
};

export type QueryReservedByIdArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryReservedTypeArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryUserArgs = {
  userId: Scalars["Int"]["input"];
};

export type Reserved = {
  __typename?: "Reserved";
  availability_status: Scalars["String"]["output"];
  created_at: Scalars["String"]["output"];
  daily_price: Scalars["Float"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  item_type?: Maybe<ReservedType>;
  name: Scalars["String"]["output"];
  updated_at: Scalars["String"]["output"];
};

export type ReservedType = {
  __typename?: "ReservedType";
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  type_name: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type User = {
  __typename?: "User";
  Reserved?: Maybe<Array<Maybe<Reserved>>>;
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<Mapper<AuthPayload>>;
  String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
  Mutation: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<Mapper<Scalars["Float"]["output"]>>;
  Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
  ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
  Query: ResolverTypeWrapper<{}>;
  Reserved: ResolverTypeWrapper<Mapper<Reserved>>;
  ReservedType: ResolverTypeWrapper<Mapper<ReservedType>>;
  User: ResolverTypeWrapper<Mapper<User>>;
  Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: Mapper<AuthPayload>;
  String: Mapper<Scalars["String"]["output"]>;
  Mutation: {};
  Float: Mapper<Scalars["Float"]["output"]>;
  Int: Mapper<Scalars["Int"]["output"]>;
  ID: Mapper<Scalars["ID"]["output"]>;
  Query: {};
  Reserved: Mapper<Reserved>;
  ReservedType: Mapper<ReservedType>;
  User: Mapper<User>;
  Boolean: Mapper<Scalars["Boolean"]["output"]>;
};

export type AuthPayloadResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["AuthPayload"] = ResolversParentTypes["AuthPayload"],
> = {
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  createReserved?: Resolver<
    ResolversTypes["Reserved"],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateReservedArgs,
      "availability_status" | "daily_price" | "item_type_id" | "name"
    >
  >;
  createReservedType?: Resolver<
    Maybe<ResolversTypes["ReservedType"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateReservedTypeArgs, "description" | "type_name">
  >;
  deleteReserved?: Resolver<
    Maybe<Array<ResolversTypes["Reserved"]>>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReservedArgs, "id">
  >;
  deleteReservedType?: Resolver<
    Maybe<ResolversTypes["ReservedType"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteReservedTypeArgs, "id">
  >;
  login?: Resolver<
    Maybe<ResolversTypes["AuthPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationLoginArgs, "email" | "password">
  >;
  signup?: Resolver<
    Maybe<ResolversTypes["AuthPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationSignupArgs, "email" | "name" | "password">
  >;
  updateReserved?: Resolver<
    ResolversTypes["Reserved"],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpdateReservedArgs,
      "availability_status" | "daily_price" | "id" | "item_type_id" | "name"
    >
  >;
  updateReservedType?: Resolver<
    Maybe<ResolversTypes["ReservedType"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReservedTypeArgs, "id" | "type_name">
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  reserved?: Resolver<
    Array<ResolversTypes["Reserved"]>,
    ParentType,
    ContextType
  >;
  reservedById?: Resolver<
    ResolversTypes["Reserved"],
    ParentType,
    ContextType,
    RequireFields<QueryReservedByIdArgs, "id">
  >;
  reservedType?: Resolver<
    Maybe<ResolversTypes["ReservedType"]>,
    ParentType,
    ContextType,
    RequireFields<QueryReservedTypeArgs, "id">
  >;
  reservedTypes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ReservedType"]>>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "userId">
  >;
};

export type ReservedResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Reserved"] = ResolversParentTypes["Reserved"],
> = {
  availability_status?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  created_at?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  daily_price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  item_type?: Resolver<
    Maybe<ResolversTypes["ReservedType"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservedTypeResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["ReservedType"] = ResolversParentTypes["ReservedType"],
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  Reserved?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Reserved"]>>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reserved?: ReservedResolvers<ContextType>;
  ReservedType?: ReservedTypeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
