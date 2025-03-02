import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"; // Ensure .js extension

import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5001;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`Server running on port : ${port}`));
