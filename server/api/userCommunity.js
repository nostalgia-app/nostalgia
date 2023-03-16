const express = require('express')
const router = express.Router();
const {models:{User_Community}} = require('../db')
module.exports = router

//20cd5978-2105-4c23-a115-16ab44162f39 - cody
//Find a all of a User's Communities
router.get('/:id', async (req, res, next) => {
  try {
    const userCommunityyy = await User_Community.findAll({
      where: { userId: req.params.id },
    });
    res.send(userCommunityyy);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the users community', error: err.message });
  }
});


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

