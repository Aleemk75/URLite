import mongoose from "mongoose";

   export async function connectdb(url) {
         await mongoose.connect(url);
    }