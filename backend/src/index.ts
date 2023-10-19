import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect, Types } from 'mongoose';
import { GraphQLScalarType, Kind } from 'graphql';
import typeDefs from "./schema.js";
import resolvers from "./resolver.js";

const MONGODB = 'mongodb+srv://Admin:5cDbX2LHgKsxjvet@socialappcluster.t1hwjnt.mongodb.net/Activity?retryWrites=true&w=majority'

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      if (value instanceof Date) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
      }
      throw Error('GraphQL Date Scalar serializer expected a `Date` object');
    },
    parseValue(value) {
      if (typeof value === 'number') {
        return new Date(value); // Convert incoming integer to Date
      }
      throw new Error('GraphQL Date Scalar parser expected a `number`');
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // Convert hard-coded AST string to integer and then to Date
        return new Date(parseInt(ast.value, 10));
      }
      // Invalid hard-coded value (not an integer)
      return null;
    },
  });

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