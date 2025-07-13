const sequelize = require('./db');
const User = require('./models/User');

async function start() {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL Connected');

    await sequelize.sync({ force: true }); // WARNING: this clears and recreates tables
    console.log('✅ User model synced!');

    process.exit();
  } catch (err) {
    console.error('❌ Error:', err);
  }
}

start();
