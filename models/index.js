const db = require("../db/connection").db;

const User = require("./User");
const Profile = require("./Profile");
const Post = require("./Post");
const Comment = require("./Comment");
const Like = require("./Like");

// Define associations
User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Like, { through: "UserLikes" });
Like.belongsToMany(User, { through: "UserLikes" });

module.exports = {
  db,
  User,
  Profile,
  Post,
  Comment,
  Like,
};
