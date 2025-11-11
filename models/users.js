import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength:8
  },
  tiktok: {
        type: String,
        default:"https://www.tiktok.com/login"
        
    },
    
    ig: {
        type: String,
        default:"https://www.instagram.com/accounts/login/?hl=en"
        
    },
  role: {
    type: String,
    default: "user"
  }
}, { timestamps: true });


if (mongoose.models.User) {
  delete mongoose.models.User;
}

const User = mongoose.model("User", userSchema);

export default User;
