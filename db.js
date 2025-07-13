// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('exploresl', 'postgres', '1212', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
