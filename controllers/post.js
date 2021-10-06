const Post = require("../models/RecipePost");
const User = require("../models/User");

exports.createRecipe = async (req, res)=>{
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateRecipe =  async (req, res) => {
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
  };


exports.deleteRecipe = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
          await post.deleteOne();
          res.status(200).json("The post has been deleted");
      } else {
        res.status(403).json("You can only delete your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  exports.getRecipe = async (req, res)=>{
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  };


  exports.getTimelineRecipe =  async (req, res) => {
    try {
      const currentUser = await User.findById(req.body.userId);
      const userPosts = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find({ userId: friendId });
        })
      );
      res.json(userPosts.concat(...friendPosts))
    } catch (err) {
      res.status(500).json(err);
    }
  };

