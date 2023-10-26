import { gql } from "@apollo/client";

export const ADD_ACTIVITY = gql`
  mutation Mutation($activityInput: ActivityInput) {
    createActivity(activityInput: $activityInput)
  }
`;

export const GET_ACTIVITIES = gql`
    query Query {
      getActivities {
        name
        _id
      }
    }
  `;



