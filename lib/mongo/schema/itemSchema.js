import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,  
    },
    category:{
        type: String,
    },
    price:{
        type: String,
    },
    description:{
        type: String,
    },
    img:{
        type: String,
    },
}, { timestamps: true });

export default mongoose.models.Item || mongoose.model('Item', itemSchema) ;
