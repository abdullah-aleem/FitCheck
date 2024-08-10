
const mongoose=require('mongoose');
const {Schema}=mongoose
//create Schema
const ProductSchema=new Schema({
    id:{type:String,unique:true},
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
