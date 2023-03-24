const router = require('express').Router();
const sequelize = require('sequelize');
const path = require('path');
const multer = require('multer');
const {
  models: { Community, User_Community, User, Artifact },
} = require('../db');

const artifactStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/artifactUploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const communityStorageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/communityUploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadArtifact = multer({
  storage: artifactStorageEngine,
  limits: { fileSize: 10000000 },
});

const uploadCommunityPic = multer({
  storage: communityStorageEngine,
  limits: { fileSize: 10000000 },
});

// GET /api/communities
router.get("/", async (req, res, next) => {
  try {
    const communities = await Community.findAll();
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
router.post('/', uploadCommunityPic.single('file'), async (req, res, next) => {
  try {
    if (req.file) {
      const imageUrl = `.././public/communityUploads/${req.file.filename}`;
      res.send(await Community.create({...req.body, imageUrl }));
    } 
  } catch (err) {
    next(err);
  }
});

// PUT /api/communities/:id
router.put('/:id', uploadCommunityPic.single('file'), async (req, res, next) => {
  try {
    const communityToUpdate = await Community.findByPk(req.params.id);
    if (req.file) {
      const imageUrl = `.././public/communityUploads/${req.file.filename}`;
      res.send(await communityToUpdate.update({...req.body, imageUrl }));
    } else {
      res.send(await communityToUpdate.update(req.body));
    }
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

// GET /api/communities/:id/artifacts
router.get("/:id/artifacts", async (req, res, next) => {
  try {
    const artifacts = await Artifact.findAll({
      where: { communityId: req.params.id },
    });
    res.send(artifacts);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/artifacts', uploadArtifact.single('file'), async (req, res, next) => {
  try {
    const community = await Community.findByPk(req.params.id);
    const artifact = await Artifact.create({
      name: req.body.name,
      description: req.body.description,
      fileName: req.file.filename,
      communityId: community.id,
      userId: req.body.userId,
    });
    res.send(artifact);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
