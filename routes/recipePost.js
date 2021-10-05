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
router.put("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("The post has been updated");
      } else {
        res.status(403).json("You can update only your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

//Delete a post

//Like a post

//Get a post

// Get Timeline posts


module.exports = router;