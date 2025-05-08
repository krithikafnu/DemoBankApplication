const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// 2️⃣ GET client by account number (specific match)
router.get('/:account', async (req, res) => {
  try {
    console.log('Full Request Object:', req);

    // 1. Get the account number from URL parameter
    const accountNumber = req.params.account;
    console.log(req.params.account);
    
    // 2. Search database for exact match
    const client = await Client.findOne({ account: accountNumber });
    
    // 3. Handle response
    if (!client) {
      return res.status(404).json({
        found: false,
        message: `No client found with account number: ${accountNumber}`
      });
    }
    
    res.json({
      found: true,
      client: client
    });
    
  } catch (err) {
    console.error('Error searching for client:', err);
    res.status(500).json({
      error: true,
      message: 'Server error while searching for client'
    });
  }
});

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

