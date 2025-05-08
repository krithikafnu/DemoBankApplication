/*const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const clientsPath = path.join(__dirname, '../data/clients.json');

// GET all clients
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(clientsPath));
  res.json(data);
});

// GET filtered clients by search criteria
router.get('/search', (req, res) => {
  const { name, birthday, type } = req.query;
  let data = JSON.parse(fs.readFileSync(clientsPath));

  if (name) {
    data = data.filter(client =>
      client.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (birthday) {
    data = data.filter(client =>
      client.birthday === birthday
    );
  }

  if (type) {
    data = data.filter(client =>
      client.type.toLowerCase() === type.toLowerCase()
    );
  }

  res.json(data);
});

module.exports = router;*/

const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// GET all clients
router.get('/', async (req, res) => {
  const data = await Client.find();
  res.json(data);
});

// GET filtered clients by query
router.get('/search', async (req, res) => {
  const { name, birthday, type } = req.query;
  let query = {};

  if (name) query.name = new RegExp(name, 'i');
  if (birthday) query.birthday = birthday;
  if (type) query.type = new RegExp(type, 'i');

  const data = await Client.find(query);
  res.json(data);
});

module.exports = router;
