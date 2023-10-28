import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect, Types } from 'mongoose';
import { GraphQLScalarType, Kind } from 'graphql';
import typeDefs from "./schema.js";
import resolvers from "./resolver.js";

const MONGODB = 'mongodb+srv://Admin:5cDbX2LHgKsxjvet@socialappcluster.t1hwjnt.mongodb.net/Activity?retryWrites=true&w=majority'

await connect(MONGODB);

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const port = Number.parseInt(process.env.PORT) || 4000;
  const { url } = await startStandaloneServer(server, {
      listen: { port: port }
  });
  console.log("Server is ready at ${url}");