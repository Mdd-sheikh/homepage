import mongoose, { Schema } from "mongoose";

const UserModel = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export default mongoose.model("user",UserModel)