import mongoose, { Types } from "mongoose";

let whishListSchema = mongoose.Schema({
    
    
    user:{
        type: Types.ObjectId,
        ref: 'user',
        required: true
    }
    ,
    products:[
        {
            type: Types.ObjectId,
            ref: 'product',
            required: true
        }
    ]
    
})


export const whishListModel= mongoose.model('whishList', whishListSchema);