const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'exploresl',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || '1212',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

module.exports = sequelize;
