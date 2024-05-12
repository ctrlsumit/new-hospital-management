import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
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
    AadharCardNumber :{
        type:String,
        required:true,
        minLength:[12,"Aadhar Card Number Must Contain Exact 12 Character"],
        maxLength:[12,"Aadhar Card Number Must Contain Exact 12 Character"]
    },
    dob:{
        type : Date,
        required:[true,"DOB is required!"]
    },
    gender:{
        type:String,
        required:true,
        enum:['Male','Female'],
    },
    password:{
        type:String,
        minLength:[8,"Phone number Must Contain At Least 8 Digit"],
        required:true,
        select:false // ye use isliye kiya hume sare info aa jayegi password ko chod ke
    },
    role:{
        type:String,
        required:true,
        enum:["Admin" ,"Patient","Doctor"],

    },
    doctorDepartment:{
        type:String,

    },
    docAvatar:{
        public_id :String,
        url:String,
    }

    
})

export const User = mongoose.model("User",userSchema);