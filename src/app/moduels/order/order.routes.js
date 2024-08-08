import { Router } from "express";
import auth from "../../glopalMiddelWares/auth.js";
// import GValidator from "../../glopalMiddelWares/GValidator.js";
import {cancelOrder, createOrder} from './order.controler.js'
import GValidator from "../../glopalMiddelWares/GValidator.js";
import { cancelOrderSchema, createOrderSchema } from "./orderSchemas.js";
// import { createCartSchema } from "./orderSchemas.js";


let orderRouter = Router()


orderRouter.post('/',auth(["admin" , "user"]),GValidator(createOrderSchema),createOrder)
orderRouter.put('/:id',auth(["admin" , "user"]),GValidator(cancelOrderSchema),cancelOrder)
// orderRouter.get('/',auth(["user" , "admin"]),getCart)
// orderRouter.delete('/',auth(["admin" , "user"]),clearCart)

export default orderRouter