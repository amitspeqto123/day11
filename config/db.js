import mongoose from "mongoose";

export const database = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/day11Session")
        console.log("Database connected Successfully..")
    }catch(error){
        console.log("Database connection failded..", error);
    }
}