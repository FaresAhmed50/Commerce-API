import mongoose from "mongoose"

let connection = await mongoose.connect("mongodb://localhost:27017/commerce").then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
})

export default connection