const router = require('express').Router();
const {
  models: { Image },
} = require('../db');

const path = require('path');
const multer = require('multer');

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const images = await Image.findAll();
    res.send(images);
  } catch (ex) {
    next(ex);
  }
});

// GET SINGLE (including all users & artifacts)
router.get('/:id', async (req, res, next) => {
  try {
    let image = await Image.findByPk(req.params.id);
    res.send(image);
  } catch (ex) {
    next(ex);
  }
});

const storageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/artifactUploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000 },
});

// CREATE NEW
router.post('/single', upload.single('file'), async (req, res, next) => {
  try {
    const image = await Image.create({
      title: req.body.title,
      description: req.body.description,
      fileName: req.file.filename,
      likes: req.file.likes,
      userId: req.body.userId,
    });
    res.send(image);
  } catch (err) {
    next(err);
  }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
  try {
    const image = await Image.findByPk(req.params.id);
    await image.update(req.body);
    res.json(image);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
