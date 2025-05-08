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
