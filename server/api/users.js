const router = require("express").Router();
const {
  db,
  models: { User, User_Friend },
} = require("../db");

// GET ALL
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET SINGLE
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// CREATE USER
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// UPDATE USER
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/userfriends/user/:id
// Retrieves all users with friend status for the current user
router.get("/userfriends/user/:id", async (req, res, next) => {
  try {
    const friends = await User.findAll({
      include: [
        {
          model: User_Friend,
          where: { userId: req.params.id },
          required: false,
        },
      ],
    });
    res.json(friends);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
