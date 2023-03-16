const Sequelize = require('sequelize');
const db = require('../db');

const Artifact = db.define('artifact', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
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
  fileName: {
    type: Sequelize.STRING,
    allowNull: true,
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
