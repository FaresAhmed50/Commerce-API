import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config()

let connection = await mongoose.connect(process.env.URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

export default connection   