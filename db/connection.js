const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

module.exports = { db, DataTypes };
