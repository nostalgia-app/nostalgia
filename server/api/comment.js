const express = require('express')
const router = express.Router();
const {models:{Comment, User}} = require('../db')
module.exports = router

//get all comments from our entire database just for testing **works
router.get('/', async (req, res, next) => {
    try {
      const comment = await Comment.findAll();
      //console.log("this is comment", Comment)
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
        include: [User]
      });
      res.json(comment);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error getting the comment', error: err.message });
    }
  });

//create comment **works
router.post('/:artifactId/:userId', async(req,res,next)=>{
    try {
        const data = {
            ...req.body,
            artifactId: req.params.artifactId,
            userId: req.params.userId
        };
        const newEntry = await Comment.create(data);
        const newComment = await Comment.findByPk(newEntry.id, {include: [User]})
        res.send(newComment)
        
    } catch (error) {
        res.status(500).json({
            message: "ERROR CREATING THIS COMMENT",
            error: error.message
        })
    }
})
//edit a comment

//delete a commment