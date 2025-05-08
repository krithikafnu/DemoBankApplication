const connectToDatabase = require('../config/database');
const Client = require('../models/Client');
const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/clients.json');

async function seedClients() {
  await connectToDatabase();
  const clients = JSON.parse(fs.readFileSync(jsonPath));

  await Client.deleteMany({});
  await Client.insertMany(clients);

  console.log(`✅ Inserted ${clients.length} clients`);
  process.exit();
}

seedClients();
