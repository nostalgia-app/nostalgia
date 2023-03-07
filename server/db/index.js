//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Community = require("./models/Community");
const User_Community = require("./models/User_Community");

//associations could go here!
Community.belongsTo(User, { foreignKey: "adminId" });
Community.belongsToMany(User, { through: User_Community });
User.belongsToMany(Community, { through: User_Community });

module.exports = {
  db,
  models: {
    User,
    Community,
    User_Community,
  },
};
