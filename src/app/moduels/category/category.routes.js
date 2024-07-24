import { Router } from "express";
import { createCategory } from "./category.controler.js";
import { multerHost } from "../../glopalMiddelWares/multer.js";
import auth from "../../glopalMiddelWares/auth.js";
import GValidator from "../../glopalMiddelWares/GValidator.js";
import { createCategorySchema } from "./categorySchemas.js";


let categoryRouter = Router()

categoryRouter.post('/createCategory',auth(["admin"]),multerHost().single("photo"),GValidator(createCategorySchema),createCategory)

export default categoryRouter