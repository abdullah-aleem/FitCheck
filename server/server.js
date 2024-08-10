const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require('dotenv').config();
const dbURI = process.env.MONGO_URL; // Replace with your MongoDB connection string

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.get("/", (req, res) => {
    res.send("Hello World!");

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
