const mongoose=require('mongoose');

const applyingSchema=new mongoose.Schema({
    Name:String,
    Age:Number,
    Email:String,
    Created:Date
})

const Apply=mongoose.model('employee',applyingSchema);

module.exports={Apply};