const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthday: { type: String },
  type: { type: String },
  account: { type: String },
  balance: { type: Number },
  uuid: { type: String },
  phoneNumber: { type: String },
  status: { type: String, default: 'active' },
  password: { type: String },
  email: { type: String },
  state: { type: String },
  country: { type: String },
  zip: { type: String },
  credit_card_number: { type: String },
  debit_card_number: { type: String },
  outstanding_loan_amount: { type: String },
  member_since: { type: String }
});


const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
