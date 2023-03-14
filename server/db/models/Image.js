const { UUID, UUIDV4, STRING, TEXT, INTEGER } = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  title: {
    type: STRING,
  },
  description: {
    type: TEXT,
  },
  fileName: {
    type: STRING,
  },
  likes: {
    type: INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  artifactId: {
    type: UUID,
  },
  userId: {
    type: UUID,
  },
  cummunityId: {
    type: UUID,
  },
});

module.exports = Image;
