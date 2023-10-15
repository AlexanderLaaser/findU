import { Schema, model } from 'mongoose';
const ActivitySchema = new Schema({
    id: String,
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
});
const Activity = model('Activities', ActivitySchema);
export default Activity;
