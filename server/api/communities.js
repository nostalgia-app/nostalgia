const router = require("express").Router();
const sequelize = require("sequelize");
const {
  models: { Community, User_Community, User },
} = require("../db");
module.exports = router;

// GET /api/communities
router.get("/", async (req, res, next) => {
  try {
    const communities = await Community.findAll();
    res.send(communities);
  } catch (err) {
    next(err);
  }
});

// GET /api/communities/geography
router.get("/geography", async (req, res, next) => {
  try {
    const communities = await Community.findAll({
      attributes: [[sequelize.fn("DISTINCT", sequelize.col("state")), "state"]],
    });
    res.send(communities);
  } catch (err) {
    next(err);
  }
});

// GET /api/communities/:id
router.get("/:id", async (req, res, next) => {
  try {
    const communities = await Community.findByPk(req.params.id);
    res.send(communities);
  } catch (err) {
    next(err);
  }
});

// POST /api/communities
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Community.create(req.body));
  } catch (err) {
    next(err);
  }
});

// PUT /api/communities/:id
router.put("/:id", async (req, res, next) => {
  try {
    const communityToUpdate = await Community.findByPk(req.params.id);
    res.send(await communityToUpdate.update(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/communities/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const community = await Community.findByPk(req.params.id);
    await community.destroy();
    res.send(community);
  } catch (err) {
    next(err);
  }
});

// GET /api/communities/:id/users
router.get("/:id/users", async (req, res, next) => {
  try {
    // Returns all users in a specific community
    const usersInCommunity = await Community.findAll({
      where: { id: req.params.id },
      include: { model: User_Community, include: User },
    });
    res.send(usersInCommunity);
  } catch (err) {
    next(err);
  }
});
