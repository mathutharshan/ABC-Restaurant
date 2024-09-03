import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mathu:17072001@cluster0.rulkn.mongodb.net/food-del').then(()=> console.log("DB Connected"));
}