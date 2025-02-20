import mongoose from "mongoose";


const userSchema=new mongoose.Schema(
  {
    _id:{type:String,require:true},
    name:{type:String,require:true},
    email:{type:String,require:true},
    imageUrl:{type:String,require:true},
    enrolledCourses:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
      }
    ]
  }
) 
