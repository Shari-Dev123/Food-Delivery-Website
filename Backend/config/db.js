import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://syedturabali:123456987@cluster0.anilxhi.mongodb.net/food-del').then(()=>console.log("DB Connected")
    );
}