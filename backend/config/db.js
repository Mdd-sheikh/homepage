import mongoose from "mongoose";

const ConnectDb = async (req, res) => {
   try {
    await mongoose.connect("mongodb+srv://longtimemusic1_db_user:longtimemusic@cluster0.0ec52bv.mongodb.net/?appName=Cluster0");
    console.log("connected");
    
   } catch (error) {
     console.log("disconnected",error);
     
   }
}

export default ConnectDb;