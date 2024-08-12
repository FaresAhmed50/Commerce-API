import { Router } from "express";
import auth from "../../glopalMiddelWares/auth.js";
// import GValidator from "../../glopalMiddelWares/GValidator.js";
import {cancelOrder, createOrder, getOrder} from './order.controler.js'
import GValidator from "../../glopalMiddelWares/GValidator.js";
import { cancelOrderSchema, createOrderSchema } from "./orderSchemas.js";
// import { createCartSchema } from "./orderSchemas.js";


let orderRouter = Router()


orderRouter.post('/',auth(["admin" , "user"]),GValidator(createOrderSchema),createOrder)
orderRouter.put('/:id',auth(["admin" , "user"]),GValidator(cancelOrderSchema),cancelOrder)
orderRouter.get('/success/:id',auth(["user" , "admin"]),getOrder)
orderRouter.get('/cancel/:id',auth(["user" , "admin"]),getCanceled)
// orderRouter.delete('/',auth(["admin" , "user"]),clearCart)

export default orderRouter