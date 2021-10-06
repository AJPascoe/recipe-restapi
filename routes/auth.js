const router = require("express").Router();
const { createUser, loginUser } = require("../controllers/auth");

// router.get("/api/auth", (req,res)=>{
//     res.send("Hey it the auth route")
// })


//Register 
router.post("/register", createUser);


//Login
router.post("/login", loginUser)

module.exports = router;