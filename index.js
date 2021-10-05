const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require ("morgan");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
require("./db/connection");



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);


app.listen(5000, ()=>{
    console.log("Backend connected")
})