import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  email: {
    type:String,
    required : true,
    unique: true,
    lowercase: true
  },
  password:{
      type:String,
      required: true
  },
  userType: {
    type: String,
    enum: ["user", "artist"],
    default: "user",
  },
});

let usermodel = mongoose.model("users", userSchema);

export default usermodel;
