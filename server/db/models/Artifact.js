const Sequelize = require('sequelize');
const db = require('../db');

const Artifact = db.define('artifact', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  communityId: {
    type: Sequelize.UUID,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  public: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    defaultValue: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
      isUrl: true,
    },
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
    defaultValue: 0,
  },
});

module.exports = Artifact;
