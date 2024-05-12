import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"first Name Must Contain At Least 3 Character"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last Name Must Contain At Least 3 Character"]
    },
    email:{
        type:String,
        required:true,
        validate :[validator.isEmail,"Please provide a valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number Must Contain At Least 10 Digit"],
        maxLength:[10,"Phone number Must Contain At Least 10 Digit"]

    },
    message:{
        type:String,
        required:true,
        minLength:[10,"last Name Must Contain At Least 10 Character"]
    }
    
})

export const Message = mongoose.model("Message",messageSchema);