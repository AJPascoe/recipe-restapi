const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const helmet = require("helmet");
// const morgan = require ("morgan");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
    {useNewURLParser: true, useUnifiedTopology: true},
    () => {
        console.log("Connected to MongoDB")
    }
);



app.listen(6000, ()=>{
    console.log("Backend connected")
})