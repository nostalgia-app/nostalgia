const router = require('express').Router();
const {
  db,
  models: { User, Artifact },
} = require('../db');
const path = require('path');
const multer = require('multer');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/artifacts', async (req, res, next) => {
  try {
    const users = await Artifact.findAll({
      where: { userId: req.params.id },
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get('/userfriends/user/:id', async (req, res, next) => {
  try {
    const friends = await db.query(
      `select users.*, "friendInd", "userFriendId" from users left join (select "friendId","id" as "userFriendId", 'Y' as "friendInd" from users_friends where users_friends."userId" = ?) as friends on users.id = friends."friendId" `,
      {
        replacements: [req.params.id],
      }
    );
    res.json(friends);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
