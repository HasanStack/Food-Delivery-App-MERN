import mongoose from "mongoose";

// Define the schema for a food item
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },         // Name of the food
  description: { type: String, required: true },  // Description/details
  price: { type: Number, required: true },        // Price of the food
  image: { type: String, required: true },        // Image filename or path
  category: { type: String, required: true }      // Category (e.g. veg/non-veg)
});

// Create the model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
