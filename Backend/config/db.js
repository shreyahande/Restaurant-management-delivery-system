import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://fullstack:22223333@cluster0.2zjvcvt.mongodb.net/taste-tales';
        await mongoose.connect(MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}
