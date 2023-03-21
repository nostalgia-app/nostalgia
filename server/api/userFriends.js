const router = require("express").Router();
const {
  models: { User_Friend, User },
} = require("../db");

// GET /api/userfriends/user/:id
// Retrieves all users with friend status for the current user
router.get("/user/:id", async (req, res, next) => {
  try {
    const friends = await User_Friend.findAll({
      where: { userId: req.params.id },
      include: [{ model: User, attributes: { exclude: ["password"] } }],
    });
    res.json(friends);
  } catch (err) {
    next(err);
  }
});

// GET /api/userfriends/:id
// Retrieves a relationship between a user and friend based on the relationship Id
router.get("/:id", async (req, res, next) => {
  try {
    const friends = await User_Friend.findAll({
      where: { id: req.params.id },
      include: [{ model: User, attributes: { exclude: ["password"] } }],
    });
    res.json(friends);
  } catch (err) {
    next(err);
  }
});

// POST /api/userfriends
// To add a few friend
router.post("/", async (req, res, next) => {
  try {
    const friend = await User_Friend.create(req.body);
    res.json(friend);
  } catch (err) {
    next(err);
  }
});

// POST /api/userfriends
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
