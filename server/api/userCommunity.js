const express = require('express')
const router = express.Router();
const {models:{User_Community}} = require('../db')
module.exports = router

//Join a community
router.post('/:communityId/:userId', async (req, res, next) => {
    try {
        const data = {
            ...req.body,
            communityId: req.params.communityId,
            userId: req.params.userId
        };
        const newEntry = await User_Community.create(data);
        const newUser_CommunityJoined = await User_Community.findByPk(newEntry.id, {include: [User]})
      res.json(newUser_CommunityJoined);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error Joining the Community', error: err.message });
    }
  });

//Leave a community
router.delete('/:id', async (req, res, next) => {
    try {
      const userRemovedfromCommunity = await User_Community.findByPk(req.params.id)
      await userRemovedfromCommunity.destroy()
      res.json(userRemovedfromCommunity);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error leaving the community', error: err.message });
    }
  });

