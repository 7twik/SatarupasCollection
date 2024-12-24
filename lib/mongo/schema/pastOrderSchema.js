import mongoose from 'mongoose';
const { Schema } = mongoose;

const pastOrderSchema = new Schema({
    Email: {
        type: String,
        required: true,  
    },
    Items:{
        type: String,
    },
    Phone:{
        type: String,
    },
    Username:{
        type: String,
    },
}, { timestamps: true });

export default mongoose.models.Past || mongoose.model('Past', pastOrderSchema) ;
