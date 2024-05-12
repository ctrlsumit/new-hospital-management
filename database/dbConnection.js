import mongoose from "mongoose";

export const dbConnection = () => (
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERNHOSPITAL"

    }).then(() => {
        console.log("connected to data base")
    }).catch(err=>{
        console.log(err)
    })
)
