const router = require("express").Router();
const {
  db,
  models: { User },
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

module.exports = router;
