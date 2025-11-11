import mongoose, { Schema } from "mongoose";

const featuredbooksSchema = new Schema({
    titlefb: {
        type: String,
        required: true
    },
    authorfb: {
        type: String,
        required: true,
    },
    imagefb: {
        type: String,
        default: ""
    },

}, { timestamps: true });

const Featuredbooks = mongoose.models.Fbooks || mongoose.model("Fbooks", featuredbooksSchema);

export default Featuredbooks;