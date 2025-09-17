import express from "express";
import { addFood, listfood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from 'path';

const foodRouter = express.Router();

//Set up image storage configuration using multer
const storage = multer.diskStorage({

  destination: './uploads/', // Folder where images will be stored

  filename: function(req, file, cb) {
    // Unique filename format: image-<timestamp>.ext (e.g., image-1692902231.jpg)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

//Initialize multer with the storage engine
const upload = multer({ storage: storage });

//Route: Add new food item with image upload
// Expects multipart/form-data with a field named "image"
foodRouter.post("/add", upload.single("image"), addFood);

//Route: Get list of all food items
foodRouter.get("/list", listfood);

//Route: Remove food item by ID (passed in req.body)
foodRouter.post("/remove", removeFood);

export default foodRouter;
