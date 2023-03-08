const express = require('express')
const app = express.Router()
const { Artifact} = require('../db');

module.exports = app;

//Get all artifacts
app.get('/', async (req, res, next) => {
  try {
    const allArtifact = await Artifact.findAll()
    res.send(allArtifact);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting all of the artifacts',
      error: err.message,
    });
  }
});

//Get single Artifact
app.get('/:id', async (req, res, next) => {
    try {
      const singleArtifact = await Artifact.findByPk(req.params.id);
  
      res.send(singleArtifact);
    } catch (err) {
      res.status(500).json({
        message: 'Error getting the single artifact',
        error: err.message,
      });
    }
  });


//Create an Artifact
app.post('/', async (req, res, next) => {
    try {
        const singleArtifact = await Artifact.create(req.body);
        res.send(singleArtifact);
      } catch (err) {
        res.status(500).json({
          message: 'Error creating the artifact',
          error: err.message,
        });
      }
});


//Edit an artifact
app.put('/:id', async (req, res, next) => {
    try {
        //{quantity: 8}
        await Artifact.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        const singleArtifact = await Artifact.findByPk(req.params.id);
    
        res.json(singleArtifact);
      } catch (err) {
        res.status(500).json({ 
            message: "Error updating the single artifact", 
            error: err.message });
      }
});

//delete an Artifact
router.delete('/:id', async (req, res, next) => {
    try {
      const singleArtifact = await Artifact.findByPk(req.params.id);
      await singleArtifact.destroy();
      res.send(singleArtifact);
    } catch (err) {
        res.status(500).json({
          message: 'Error deleting the specified artifact',
          error: err.message,
        });
      }
  });



