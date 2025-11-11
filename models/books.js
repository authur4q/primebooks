import mongoose, { Schema } from "mongoose";


const bkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    rating:{
        type:Number,
        required:true
    }
    

}, { 
    timestamps: true 
});


const Books = mongoose.models.Bk || mongoose.model("Bk", bkSchema);

export default Books;