import glopalSchema from "../../glopalMiddelWares/glopalSchema.js";
import joi from 'joi'

export const createCategorySchema = {
    body: joi.object({
        name: joi.string().required(),
    }),

    headers: glopalSchema.headers,

    file:glopalSchema.file
} 