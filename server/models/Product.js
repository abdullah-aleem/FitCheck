
const mongoose=require('mongoose');
const { required } = require('nodemon/lib/config');
const {Schema}=mongoose
//create Schema
const ProductSchema=new Schema({
    
    name:String,
    subCategory:String,
    price:Number,
    inventory:Number,
    image:String,
    secondayImage:String,


})
//Create Model
const ProductModel=mongoose.model('product',ProductSchema)
module.exports=ProductModel
