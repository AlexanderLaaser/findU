import {Schema, model} from 'mongoose';

interface IActivity {
    id?: String, 
    name: String, 
    description: String, 
    date: Date;
}

const ActivitySchema = new Schema<IActivity>({
    id: String, 
    name: {type: String, required: true}, 
    description: {type: String, required: true},
    date: {type: Date, required: true},
});

const Activity = model<IActivity>('Activities', ActivitySchema);

export default Activity;