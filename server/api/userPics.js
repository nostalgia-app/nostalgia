const router = require('express').Router();
const {
  models: { UserPic },
} = require('../db');

const path = require('path');
const multer = require('multer');

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const userPics = await UserPic.findAll();
    res.send(userPics);
  } catch (ex) {
    next(ex);
  }
});

// GET SINGLE (including all users & artifacts)
router.get('/:id', async (req, res, next) => {
  try {
    let userPic = await UserPic.findByPk(req.params.id);
    res.send(userPic);
  } catch (ex) {
    next(ex);
  }
});

const storageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/userPicUploads');
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
    const file = req.file;
    console.log(file);
    const userPic = await UserPic.create({
      fileName: req.file.filename,
      userId: req.body.userId,
    });
    res.send(userPic);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
