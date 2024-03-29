const express = require('express');
const router = express.Router();
const {
  models: { Artifact },
} = require('../db');

//Get all artifacts
router.get('/', async (req, res, next) => {
  try {
    const artifacts = await Artifact.findAll();
    res.send(artifacts);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting all of the artifacts',
      error: err.message,
    });
  }
});

//Get single artifact
router.get('/:id', async (req, res, next) => {
  try {
    const artifact = await Artifact.findByPk(req.params.id);
    res.send(artifact);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting artifact',
      error: err.message,
    });
  }
});

//Create an artifact
router.post('/', async (req, res, next) => {
  try {
    const artifact = await Artifact.create(req.body);
    res.send(artifact);
  } catch (err) {
    res.status(500).json({
      message: 'Error creating artifact',
      error: err.message,
    });
  }
});

//Edit an artifact
router.put('/:id', async (req, res, next) => {
  try {
    await Artifact.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const artifact = await Artifact.findByPk(req.params.id);
    res.json(artifact);
  } catch (err) {
    res.status(500).json({
      message: 'Error updating artifact',
      error: err.message,
    });
  }
});

//Delete an artifact
router.delete('/:id', async (req, res, next) => {
  try {
    const artifact = await Artifact.findAll({
      where: {
        id: req.params.id,
      },
    });
    await Artifact.destroy({ where: { id: req.params.id } });
    res.json(artifact[0]);
  } catch (err) {
    res.status(500).json({
      message: 'Error deleting the specified artifact',
      error: err.message,
    });
  }
});

module.exports = router;
