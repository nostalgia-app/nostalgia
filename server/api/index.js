const router = require("express").Router();
module.exports = router;

<<<<<<< HEAD
router.use("/users", require("./users"));
router.use("/artifacts", require("./artifacts"));
router.use("/communities", require("./communities"));
router.use("/comment", require("./comment"));
router.use("/userCommunity", require("./userCommunity"));
router.use("/userfriends", require("./userfriends"));
=======
router.use('/users', require('./users'));
router.use('/artifacts', require('./artifacts'));
router.use('/communities', require('./communities'));
router.use('/comment', require('./comment'));
router.use('/userCommunity', require('./userCommunity'));
router.use('/profilePic', require('./profilePic'));
>>>>>>> main

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
