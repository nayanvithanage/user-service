Tourism Platform – Microservice Architecture
🎯 GOAL (Phase 1)
Build a backend system for a tourism business platform in modular microservices:
✅ Start with:
	• User Service → manages users (traveler, provider, admin)
	• Built using: Node.js + PostgreSQL + Sequelize

🧱 WHAT YOU'LL LEARN & DO NOW

| Task |	What	| Tools | 
|------|--------|-------|
|Setup project folders	|Structure to organize services	|Manual|
|Initialize Node.js project	|Start backend code for User Service	|Node.js|
|Connect to PostgreSQL	|Store users data	|Sequelize ORM|
|Define your first model – User	|Data modeling	|Sequelize|
|Sync model with PostgreSQL database	|Create actual table in DB	|Sequelize|
|Test setup works	|Confirm DB + model working	|Node.js run|


🧩 REQUIREMENTS BEFORE YOU START
✅ Installed on your PC:
 - Node.js
 - PostgreSQL
 - Any code editor (like VS Code)

✅ STEP-BY-STEP SETUP
---
🗂 STEP 1: Setup Base Project Folders
Open a terminal / PowerShell window and run:

```
cd C:\Users\YourName\Documents
mkdir exploresl
cd exploresl
mkdir user-service
cd user-service
```
You now have this path:
C:\Users\YourName\Documents\exploresl\user-service
---

**⚙️ STEP 2: Initialize Node.js Project**

Run inside user-service:
```

npm init -y
```
This creates package.json — your project’s config file.

---
📦 STEP 3: Install Required Node.js Packages


```
npm install express sequelize pg pg-hstore
npm install sequelize-cli --save-dev
```
	• sequelize: ORM for PostgreSQL
	• pg, pg-hstore: PostgreSQL drivers
	• express: Web framework (will be used later)
 
---
🏗 STEP 4: Setup Folders and Files
Create this structure manually or in terminal:

```

mkdir models
type nul > db.js
type nul > index.js
type nul > models/User.js
```
You now have:

```
user-service/
├── db.js
├── index.js
├── models/
│   └── User.js
└── package.json
```

---
🧠 STEP 5: Connect to PostgreSQL (Edit db.js)

```
js

// db.js
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('exploresl', 'your_pg_username', 'your_pg_password', {
  host: 'localhost',
  dialect: 'postgres',
});
module.exports = sequelize;

```

🔁 Replace:
	• 'your_pg_username' → your actual PostgreSQL username (e.g., postgres)
	• 'your_pg_password' → your password
Also make sure you have created a database called exploresl in pgAdmin or terminal.

---
👤 STEP 6: Define User Model (Edit models/User.js)

```
js

const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('traveler', 'provider', 'admin'),
    defaultValue: 'traveler'
  }
}, {
  tableName: 'users',
  timestamps: true
});
module.exports = User;
```

---
🔄 STEP 7: Sync the Model with Database (Edit index.js)

```
js

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
```

---

▶️ STEP 8: Run Your Project
In terminal, from user-service folder:

```

node index.js

```
✅ Expected Output:

```

✅ PostgreSQL Connected
✅ User model synced!

```

Then check pgAdmin → Database exploresl → Table users created successfully.

🚀 You’re Done with the First Microservice Setup!
You now have:
- ✅ A working user-service
- ✅ Sequelize ORM
- ✅ User model with proper data types and constraints
- ✅ Data synced with PostgreSQL


