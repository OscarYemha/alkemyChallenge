const Sequelize = require('sequelize');

const db = new Sequelize("postgres://postgres@localhost:3000/alkemy", {
  logging: false,
});
module.exports = db;