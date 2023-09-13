import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type: String
    },
    password:{
        type: String
    }

})

export const User = mongoose.models.users ||  mongoose.model("users", userSchema)