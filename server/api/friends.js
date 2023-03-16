const router = require("express").Router();
const {
  models: { User_Friend },
} = require("../db");

// GET /api/friends/
// Retrieves all friends for a specified user
router.get("/", async (req, res, next) => {
  try {
    // const friends = await User_Friend.findAll({
    //   where: { userId: req.params.id },
    // });
    const friends = await User_Friend.findAll();
    res.json(friends);
  } catch (err) {
    next(err);
  }
});

// POST /api/friends
// To add a few friend
router.post("/", async (req, res, next) => {
  try {
    const friend = await User_Friend.create(req.body);
    res.json(friend);
  } catch (err) {
    next(err);
  }
});

// POST /api/friends
// To remove a friend
router.delete("/:id", async (req, res, next) => {
  try {
    const friend = await User_Friend.findByPk(req.params.id);
    await friend.destroy();
    res.send(friend);
  } catch (err) {
    res.status(500).json({
      message: "Error deleting the specified friend",
      error: err.message,
    });
  }
});

module.exports = router;
