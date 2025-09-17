import mongoose from "mongoose";

// Connect to MongoDB using Mongoose
export const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://ronymondal9609:fooddel@cluster0.x3a5q9p.mongodb.net/Food-Del-App'
  )
  .then(() => console.log("DB Connected")); // Successful connection log
};
