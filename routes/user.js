const { updateUser, deleteUser, getUser, followUser, unfollowUser } = require("../controllers/user");

const router = require("express").Router();

//Update user
router.put("/:id", updateUser);
//Delete user

router.delete("/:id", deleteUser);

//Get user
router.get("/:id", getUser);

//follow a user
router.put("/:id/follow", followUser);

//unfollow a user
router.put("/:id/unfollow", unfollowUser);


router.get("/", (req, res) => {
  res.send("hey its user route");
});

module.exports = router;