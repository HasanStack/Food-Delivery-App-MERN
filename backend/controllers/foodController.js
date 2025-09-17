import foodModel from "../models/foodmodel.js";
import fs from 'fs';

//Add food item with image
const addFood = async (req, res) => {
  try {
    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    //Basic validation (optional but useful)
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    //Get uploaded image filename
    const image_filename = req.file.filename;

    //Create and save food item
    const food = new foodModel({
      name,
      description,
      price,
      category,
      image: image_filename,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.error("Error while adding food:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


//Get all food items (food list)
const listfood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching food list" });
  }
};


//Remove food item and delete image
const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    // Validate id
    if (!id) {
      return res.status(400).json({ success: false, message: "ID is required" });
    }

    // Find the food item
    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }

    // Delete the image file safely
    const imagePath = `uploads/${food.image}`;
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("Failed to delete image:", err);
        // not sending error to user since it's not critical
      }
    });

    // Delete the food document
    await foodModel.findByIdAndDelete(id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log("Error deleting food:", error);
    res.json({ success: false, message: "Server Error" });
  }
};


//Export all controller functions
export { addFood, listfood, removeFood };

