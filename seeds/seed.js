const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./userData.json");
const postData = require("./postData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
  });

  await Post.bulkCreate(postData, {
    individualHooks: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
  });

  process.exit(0);
};

seedDatabase();
