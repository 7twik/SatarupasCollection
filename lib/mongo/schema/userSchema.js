import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    Email: {
        type: String,
        required: true,  
    },
    Username:{
        type: String,
    },
    Phone:{
        type: String,
    },
});

export default mongoose.models.User || mongoose.model('User', userSchema) ;
