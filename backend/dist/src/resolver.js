import Activity from "../models/activity.js";
const resolvers = {
    Query: {
        async getActivity(_, { ID }) {
            return await Activity.findById(ID);
        },
        async getActivities(_, { limit }) {
            return await Activity.find().limit(limit);
        }
    },
    Mutation: {
        async createActivity(_, { activityInput: { name, description, date } }) {
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
export default resolvers;
