const router = require("express").Router();
const {
  models: { Community },
} = require("../db");
module.exports = router;

// GET /api/communities
router.get("/", async (req, res, next) => {
  try {
    const communities = await Community.findAll();
    res.json(communities);
  } catch (err) {
    next(err);
  }
});

// GET /api/communities/:id
router.get("/:id", async (req, res, next) => {
  try {
    const communities = await Community.findByPk(req.params.id);
    res.json(communities);
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
    const communityToDelete = await Community.findByPk(req.params.id);
    res.send(await communityToDelete.destroy());
  } catch (err) {
    next(err);
  }
});
