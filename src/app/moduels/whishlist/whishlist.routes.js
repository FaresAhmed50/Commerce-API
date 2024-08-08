import { Router } from "express";
import auth from "../../glopalMiddelWares/auth.js";
import GValidator from "../../glopalMiddelWares/GValidator.js";
import { createWhisList } from './whishList.controler.js'
import { createWhisListSchema } from "./whishListSchemas.js";


let whishlistRouter = Router()


whishlistRouter.post('/',auth(["admin" , "user"]),GValidator(createWhisListSchema),createWhisList)
// whishlistRouter.put('/:productId',auth(["admin" , "user"]),removeFromWhisList)
// whishlistRouter.get('/',auth(["user" , "admin"]),getWhisList)
// whishlistRouter.delete('/',auth(["admin" , "user"]),clearWhisList)

export default whishlistRouter