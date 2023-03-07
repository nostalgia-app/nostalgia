const Sequelize = require("sequelize");
const db = require("../db");

const User_Community = db.define(
  "users_communities",
  {},
  { timestamps: false }
);

module.exports = User_Community;
