//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Community = require("./models/Community");
const Artifact = require("./models/Artifact");
const User_Community = require("./models/User_Community");
const Comment = require("./models/Comment");
const User_Friend = require("./models/User_Friend");

//associations could go here!
Community.belongsTo(User, { foreignKey: "adminId" });
Community.belongsToMany(User, { through: User_Community });
User.belongsToMany(Community, { through: User_Community });

User.hasMany(User_Community);
User_Community.belongsTo(User);
Community.hasMany(User_Community);
User_Community.belongsTo(Community);

Artifact.belongsTo(Community);
Community.hasMany(Artifact);
User.hasMany(Artifact);
Artifact.belongsTo(User);

Comment.belongsTo(Artifact);
Artifact.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Comment);

User.belongsToMany(User, {
  through: User_Friend,
  as: "user",
  foreignKey: "userId",
});
User.belongsToMany(User, {
  through: User_Friend,
  as: "friend",
  foreignKey: "friendId",
});
User.hasMany(User_Friend);
User_Friend.belongsTo(User, { foreignKey: "friendId" });

module.exports = {
  db,
  models: {
    User,
    Artifact,
    Community,
    User_Community,
    Comment,
    User_Friend,
  },
};
