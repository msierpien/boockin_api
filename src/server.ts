import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.generated.js";
import { resolvers } from "./graphql/resolvers.generated.js";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";


const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const prisma = new PrismaClient({
	log: ["query", "info", "warn", "error"],
	datasources: {
		db: {
			url: process.env.DATABASE_URL,
		},
	},
});


const getUser = async (token: string) => {

	try {
	  if (token) {
  
		const user = jwt.verify(token, process.env.APP_SECRET);
		return user;
	  }
	//   console.log("No token provided.");
	  return null;
	} catch (error) {

	  return null;
	}
  };



const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },

	context: async ({req}) => {
		const token  = req.headers.auth || '';
		const user = await getUser(token);

		return {
			prisma,
			user
		};
	},
});

console.log(`🚀  Server ready at: ${url}`);
