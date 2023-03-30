const Sequelize = require("sequelize");
const db = require("../db");

const Community = db.define("community", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  zipCode: {
    type: Sequelize.STRING,
  },
  category: {
    // type: Sequelize.ENUM(
    //   "Music & Audio",
    //   "Vehicle & Transportation",
    //   "Performing Arts",
    //   "Books & Literature",
    //   "Photography",
    //   "Fitness & Sports",
    //   "Animals & Pets",
    //   "Food & Drink",
    //   "Travel & Leisure",
    //   "Education",
    //   "Science & Tech",
    //   "Home & Garden",
    //   "Business & Commerce",
    //   "Neighborhood"
    // ),
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.TEXT,
  },
});

module.exports = Community;
