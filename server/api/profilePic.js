const express = require('express');
const router = express.Router();
const {
  models: { ProfilePic },
} = require('../db');
const multer = require('multer');

//FETCH ALL
router.get('/', async (req, res, next) => {
  try {
    const profilePics = await ProfilePic.findAll();
    res.send(profilePics);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting all of the profile pics',
      error: err.message,
    });
  }
});

//FETCH SINGLE
router.get('/:id', async (req, res, next) => {
  try {
    const profilePic = await ProfilePic.findByPk(req.params.id);
    res.send(profilePic);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting profile pic',
      error: err.message,
    });
  }
});

const storageEngine = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'public/profilePicUploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000 },
});

//Create an profile Pic
router.post('/', upload.single('file'), async (req, res, next) => {
  try {
    const profilePic = await ProfilePic.create({
      fileName: req.file.filename,
      userId: req.body.userId,
    });
    res.send(profilePic);
  } catch (err) {
    res.status(500).json({
      message: 'Error creating profile pic',
      error: err.message,
    });
  }
});

module.exports = router;
