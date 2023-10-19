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

export default typeDefs;