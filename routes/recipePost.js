const router = require("express").Router();
const Post = require("../models/RecipePost");


//Create a post
router.post("/", async (req, res)=>{
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a post


//Delete a post

//Like a post

//Get a post

// Get Timeline posts


module.exports = router;