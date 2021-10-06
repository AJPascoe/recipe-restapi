const router = require("express").Router();
const { createUser } = require("../controllers/auth");
const { deleteRecipe, updateRecipe, getRecipe, getTimelineRecipe } = require("../controllers/post");
const Post = require("../models/RecipePost");


//Create a post
router.post("/", createUser);

// Update a post
router.put("/:id", updateRecipe);

//Delete a post
router.delete("/:id", deleteRecipe); 

//Like a post

// router.put("/:id/like", async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       if (!post.likes.includes(req.body.userId)) {
//         await post.updateOne({ $push: { likes: req.body.userId } });
//         res.status(200).json("The post has been liked");
//       } else {
//         await post.updateOne({ $pull: { likes: req.body.userId } });
//         res.status(200).json("The post has been disliked");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//Get a post

router.get("/:id", getRecipe);

// Get Timeline posts
router.get("/timeline/all", getTimelineRecipe);
  

module.exports = router;