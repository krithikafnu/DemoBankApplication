const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthday: { type: String },
  type: { type: String },
  account: { type: String },
  balance: { type: Number },
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
