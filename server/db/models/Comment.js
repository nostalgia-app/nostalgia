const Sequelize = require('sequelize');
const db = require('../db');

const Comment = db.define('comment', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // artifactId: {
  //   type: Sequelize.STRING,
  // },
  // userId: {
  //   type: Sequelize.STRING,
  // },
  likes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Comment;
