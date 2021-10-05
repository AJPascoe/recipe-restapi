const router = require("express").Router();

router.get("/api/user", (req, res)=>{
    res.send("hey its the user route")
})

module.exports = router;