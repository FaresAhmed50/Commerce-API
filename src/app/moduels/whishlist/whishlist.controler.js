import asyncHandler from "../../utils/asyncHandler.js";
import AppError from "../../utils/AppError.js";
import { productModel } from "../../../db/models/product.model.js";
import { cartModel } from "../../../db/models/cart.model.js";
import { whishListModel } from "../../../db/models/whishList.model.js";



// export const removeFromCart = asyncHandler(async (req, res, next) => {
//     let {productId} = req.params

//     let product = await productModel.findById(productId)

//     if(!product){
//         next(new AppError( 'product not found', 404))
//     }

//     let cart = await cartModel.findOneAndUpdate({user : req.user._id  , "products.productId" : productId}, {$pull: {products: {productId}}}, {new: true})

//     if (!cart) {
//         next(new AppError('cart not found', 404))
//     }

    
//     if(cart.products.length == 0){
//         await cartModel.deleteOne({user : req.user._id})
//     }

//     res.json({ msg: 'done', cart })
// })

// export const getCart = asyncHandler(async (req, res, next) => {
//     console.log(req.user);
//     const cart = await cartModel.findOne({user: req.user._id})
//     res.json({ msg: 'done', cart })
// })

export const createWhisList = asyncHandler(async (req, res, next) => {
    const { productId  } = req.body  

    let product = await productModel.findOne({_id:productId })
    if(!product){
        next(new AppError( 'product not found', 404))
    }

    let whishList = await whishListModel.findOneAndUpdate({user : req.user._id} , {$addToSet: {products: productId}}, {new: true})
    console.log(whishList);
    if (!whishListExist){
        whishList = await whishListModel.create({
            user: req.user._id,
            products: [productId]
        })
        
        req.data = {model : cartModel , id : cart._id}
    }


    res.status(201).json({ msg: 'product added to whishList' , whishList})
})

// export const clearCart = asyncHandler(async (req, res, next) => {

//    let cart = await cartModel.findOneAndDelete({user: req.user._id})
//     if(!cart){
//         return next(new AppError( 'cart not found', 404))
//     }
//     return res.json({ msg: 'done', cart })
// })

