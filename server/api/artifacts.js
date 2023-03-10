const express = require('express')
const app = express.Router()
const { Artifact } = require('../db');

module.exports = app;

//Get all artifacts
app.get('/', async (req, res, next) => {
  try {
    const artifacts = await Artifact.findAll()
    res.send(artifacts);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting all of the artifacts',
      error: err.message,
    });
  }
});

//Get single artifact
app.get('/:id', async (req, res, next) => {
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
app.post('/', async (req, res, next) => {
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
app.put('/:id', async (req, res, next) => {
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
      message: "Error updating artifact", 
      error: err.message
    });
  }
});

//Delete an Artifact
app.delete('/:id', async (req, res, next) => {
  try {
    const artifact = await Artifact.findByPk(req.params.id);
    await artifact.destroy();
    res.send(artifact);
  } catch (err) {
    res.status(500).json({
      message: 'Error deleting the specified artifact',
      error: err.message,
    });
  }
});
