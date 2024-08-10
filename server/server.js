const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const cors=require('cors');
require('dotenv').config();

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
        console.error("cannot connect to mongo dp")
        setTimeout(connectToDatabase,5000) 
    })
}

connectToDatabase();





//routes
app.get("/", (req, res) => {
    res.send("Hello World!");

});

app.post("/add", (req, res) => {
    console.log(req.body)
    res.send("Hello World!");

});















//port listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
