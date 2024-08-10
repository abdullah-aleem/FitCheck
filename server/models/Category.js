const mongoose=require('mongoose');
const {Schema}=mongoose
//create Schema
const CategorySchema=new Schema({
    name:{type:String,unique:true},
    productIDs:Array,
    desc:String,

})
//Create Model
const CategoryModel=mongoose.model('category',CategorySchema)
module.exports=CategoryModel
