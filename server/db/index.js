//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Community = require('./models/Community');
const User_Community = require('./models/User_Community');
const Image = require('./models/Image');
const Artifact = require('./models/Artifact');

//associations could go here!
Community.belongsTo(User, { foreignKey: 'adminId' });
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

module.exports = {
  db,
  models: {
    User,
    Artifact,
    Community,
    User_Community,
    Image,
  },
};
