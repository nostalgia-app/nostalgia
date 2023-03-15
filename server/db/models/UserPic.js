const { UUID, UUIDV4, STRING } = require('sequelize');
const db = require('../db');

const UserPic = db.define('userPic', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  fileName: {
    type: STRING,
  },
  userId: {
    type: STRING,
  },
});

module.exports = UserPic;
