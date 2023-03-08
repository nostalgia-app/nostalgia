const Sequelize = require("sequelize");
const db = require("../db");

const User_Community = db.define(
  "users_communities",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = User_Community;
