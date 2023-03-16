const router = require("express").Router();
const {
  models: { User_Friend },
} = require("../db");

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
