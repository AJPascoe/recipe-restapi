const mongoose = require("mongoose");
require("dotenv").config();


const connection = async ()=>{
    try {
       await mongoose.connect(
            process.env.MONGO_URI,
            {useNewURLParser: true, useUnifiedTopology: true},
            () => {
                console.log("Connected to MongoDB")
            }
        );
        
    } catch (error) {
        console.log(error)
    }
}


connection();