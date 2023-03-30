const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/artifacts", require("./artifacts"));
router.use("/communities", require("./communities"));
router.use("/comment", require("./comment"));
router.use("/userCommunity", require("./userCommunity"));
router.use("/profilePic", require("./profilePic"));
router.use("/userfriends", require("./userFriends"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
