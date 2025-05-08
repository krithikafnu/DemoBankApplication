const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// 3️⃣ PATCH client status (close account)
router.patch('/:account/close', async (req, res) => {
  try {
    const client = await Client.findOneAndUpdate(
      { account: req.params.account },
      { status: 'disabled' },
      { new: true }
    );
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json({ message: 'Account closed successfully', client });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all clients
router.get('/', async (req, res) => {
  const data = await Client.find();
  console.log(data)
  res.json(data);
  //console.log(data)
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

