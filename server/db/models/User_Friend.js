const Sequelize = require("sequelize");
const db = require("../db");

const User_Friend = db.define("users_friends", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = User_Friend;
