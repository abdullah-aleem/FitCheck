const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();
const Product=require('./models/Product.js')
const Category=require('./models/Category.js')
//middleware 
app.use(cors({
    credentials:true,  
    origin:'http://localhost:5173'
}))
app.use(express.json());

//connect to database
const connectToDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connected to server')
    }).catch((err)=>{
        console.error(err)
        setTimeout(connectToDatabase,5000) 
    })
}

connectToDatabase();





//routes 
app.get("/", (req, res) => {
    res.send("Hello World!");

});

app.post("/addProduct",async (req, res) => {
    console.log(req.body)
     Product.create(req.body).then((product)=>{
        res.json(product)
     }).catch((err)=>{
        console.log(err)
        res.status(202).json("some problem with the server")})

});

app.post("/addCategory",async (req, res) => {
    console.log(req.body)
     Category.create(req.body).then((product)=>{
        res.json(product)
     }).catch((err)=>{
        console.log(err)
        res.status(202).json("some problem with the server")})

});
app.post("/getProducts",async (req, res) => {
    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
        res.status(202).json("some problem with the server")
    })
});
app.post("/getSingleProduct",async (req, res) => {
    console.log(req.body)
    Product.findById(req.body._id).then((product)=>{
        console.log(product)
        res.json(product)
    }).catch((err)=>{
        console.log(err)
        res.status(202).json("some problem with the server")
    })
})



app.post("/getCategories",async (req, res) => {
    console.log(req.body)
    Category.find().then((products)=>{
        
        res.json(products)
        console.log(products)
    }).catch((err)=>{   
        console.log(err)
        res.status(202).json("some problem with the server")
    })
})


app.post("/checkout",async (req, res) => {
    console.log(req.body)
    res.json("redirect to Stripe")
})






//port listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
