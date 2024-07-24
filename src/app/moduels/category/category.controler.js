import slugify from "slugify";
import { categoryModel } from "../../../db/models/category.model.js";
import asyncHandler from "../../utils/asyncHandler.js";
import { v2 as cloudinary } from 'cloudinary';
import { nanoid } from "nanoid";


export const createCategory = asyncHandler(async (req, res, next) => {
    const { name } = req.body

    let customId = nanoid(5)
    const { secure_url, public_id } = await cloudinary.uploader.upload(req.file.path, {
        folder: `commerce/categories/${customId}`
    })

    console.log(secure_url , public_id );

    const category = await categoryModel.create({
        name,
        slug: slugify(name,{replacement:'-',lower : true}),
        image: { secure_url, public_id },
        createdBy: req.user._id ,
        customId
    })

    res.status(201).json({ msg: 'category created', category })
})