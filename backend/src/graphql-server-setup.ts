import { ApolloServer } from "@apollo/server";
import { GraphQLScalarType, Kind } from 'graphql';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connect, Types } from 'mongoose';
import Activity from "../models/activity.js";

const MONGODB = 'mongodb+srv://Admin:5cDbX2LHgKsxjvet@socialappcluster.t1hwjnt.mongodb.net/Activity?retryWrites=true&w=majority'

const typeDefs = `#graphql
    
    scalar Date

    type Activity {
        _id: String
        name: String 
        description: String
        date: Date
    }    
    
    input ActivityInput{
        name: String
        description: String
        date: Date
    }

    type Query {
        getActivity(ID: ID!): Activity!
        getActivities(limit: Int): [Activity]
    }

    type Mutation {
        createActivity(activityInput: ActivityInput): String!
        updateActivity(ID: ID!, activityInput: ActivityInput): String!
        deleteActivity(ID: ID!): String!
    }
`;

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

const resolvers = {

    Query: {
        async getActivity(_,{ID}){
            return await Activity.findById(ID);
        },
        async getActivities(_,{limit}){
            return await Activity.find().limit(limit);
        }
    },
    Mutation: {
        async createActivity(_,{activityInput: {name, description, date}}){
            const res = await new Activity({
                name, description, date
            }).save();

            return res._id;
        },
        async updateActivity(_, { ID, activityInput: { name, description, date } }) {
            await Activity.updateOne({ _id: ID }, { $set: { name, description, date } });

            return ID;
        },
        async deleteActivity(_, { ID }) {
            await Activity.deleteOne({ _id: ID });
            return ID;
        }
    }
};
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