const db = require('../db');
const { UUID, UUIDV4, STRING, INTEGER, TEXT } = require('sequelize');

const ProfilePic = db.define('profilePic', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  fileName: {
    type: STRING,
    allowNull: true,
  },
  userId: {
    type: STRING,
  },
});

module.exports = ProfilePic;
