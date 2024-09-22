import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    Age:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    email: {
      type: String,
      required: true,
     
    },
    Address:{
        type:String,
        required:true
    }, 
    
    isCompleted:{
      type:String,
    
    },
    date: {
      type: Date,
       required: true 
      },
    timeSlot: {
    type: String,
     required: true 
    },
    user:{
        type:String,
        required:true
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },

  });
  
  export const History = mongoose.model("History", schema);