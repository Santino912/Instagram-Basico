const { Sequelize } = require("sequelize");

export const sequelize = new Sequelize("instagramdb", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});
