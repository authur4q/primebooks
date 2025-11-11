import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    
    userId: {
        type: String,
        
        required: true
    },
    
    reviewtext: {
        type: String,
        required: true
    },
    
    bookid: { 
        type: String,
       
        required: true
    },
    username: {
        type: String,
        required: true
    },

    

}, { timestamps: true });


const ReviewModel = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default ReviewModel;