const express = require('express');
const router = express.Router();
const {
  models: { Comment, User },
} = require('../db');
module.exports = router;

//get all comments from our entire database just for testing **works
router.get('/', async (req, res, next) => {
  try {
    const comment = await Comment.findAll();
    res.json(comment);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the comment', error: err.message });
  }
});
//get all comments for a specific artifact **works
router.get('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findAll({
      where: { artifactId: req.params.id },
      include: [User],
    });
    res.json(comment);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the comment', error: err.message });
  }
});

//create comment **works
router.post('/', async (req, res, next) => {
  try {
    const data = {
      ...req.body,
    };
    const newEntry = await Comment.create(data);
    const newComment = await Comment.findByPk(newEntry.id, { include: [User] });
    res.send(newComment);
  } catch (error) {
    res.status(500).json({
      message: 'ERROR CREATING THIS COMMENT',
      error: error.message,
    });
  }
});
//edit a comment
router.put('/:id', async (req, res, next) => {
  try {
    await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    newComment = Comment.findByPk(req.params.id);
    res.send(newComment);
  } catch (error) {
    res.status(500).json({
      message: 'ERROR EDITING THIS COMMENT',
      error: error.message,
    });
  }
});

//delete a commment
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedComment = await Comment.findByPk(req.params.id);
    await deletedComment.destroy();
    res.json(deletedComment);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error deleting the comment', error: err.message });
  }
});
