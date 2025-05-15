const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const User = db.define("User", {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;
