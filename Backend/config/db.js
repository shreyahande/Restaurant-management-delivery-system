import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fullstack:22223333@cluster0.2zjvcvt.mongodb.net/taste-tales');
        console.log("DB Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}
