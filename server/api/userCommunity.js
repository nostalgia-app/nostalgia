const express = require('express')
const router = express.Router();
const {models:{User_Community, Community}} = require('../db')
module.exports = router

//20cd5978-2105-4c23-a115-16ab44162f39 - cody
//Find a all of a User's Communities
router.get('/:id', async (req, res, next) => {
  try {
    const userCommunityyy = await User_Community.findAll({
      where: { userId: req.params.id },include : Community
    });
    res.send(userCommunityyy);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the users community', error: err.message });
  }
});
//Find a specific userCommunity id
router.get('/:commId/:userId', async (req, res, next) => {
  try {
    const userCommunityyy = await User_Community.findAll({where:{
      userId: req.params.userId,
      communityId: req.params.commId
    }});
    res.send(userCommunityyy);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the specific user community', error: err.message });
  }
});


//Join a community
// router.post('/:communityId/:userId', async (req, res, next) => {
//     try {
//         const data = {
//             ...req.body,
//             communityId: req.params.communityId,
//             userId: req.params.userId
//         };
//         const newEntry = await User_Community.create(data);
//         const newUser_CommunityJoined = await User_Community.findByPk(newEntry.id, {include: [User]})
//       res.json(newUser_CommunityJoined);
//     } catch (err) {
//       res
//         .status(500)
//         .json({ message: 'Error Joining the Community', error: err.message });
//     }
//   });
  router.post("/:communityId/:userId", async (req, res, next) => {
    try {
      //console.log("userComm", req.body);
      const data = {
        ...req.params,
        communityId: req.params.communityId,
        userId: req.params.userId
    };
    console.log('communityId --> ', req.params.communityId)
      console.log('this is userCommm', req.params)
      res.status(201).send(await User_Community.create(data));
    } catch (err) {
      res.json({message: "unable to join the comm", error: err.message})
      next(err);
    }
  });

//Leave a community
router.delete('/:commId/:userId', async (req, res, next) => {
    try {
      const userRemovedfromCommunity = await User_Community.findOne({where:{
        communityId : req.params.commId, userId: req.params.userId
      }})
       await userRemovedfromCommunity.destroy()
      res.send(userRemovedfromCommunity);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error leaving the user community', error: err.message });
    }
  });

