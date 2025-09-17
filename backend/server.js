import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js"; // ✅ MongoDB connection function
import foodRouter from "./routes/foodRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

//Support for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Express app initialization
const app = express();
const port = process.env.PORT || 4000;


//Connect to MongoDB database
connectDB();


//Serve static files from the 'uploads' folder (e.g. uploaded images)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


//Middleware setup

app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


//Food-related API routes
app.use("/api/food", foodRouter);

//Alternative static route for serving images (optional duplicate)
app.use("/images", express.static('uploads'));

app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);


//Basic test route to check if server is working
app.get("/", (req, res) => {
  res.send("API WORKING");
});

//Start the server
app.listen(port, () => {
  console.log(`🚀 Server Started On http://localhost:${port}`);
});
