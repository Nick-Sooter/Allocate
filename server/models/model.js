
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesModel = new Schema({
  type: { type: String, default: 'Investment' },
  color: { type: String, default: 'rgb(54, 162, 235)' }
})

const transactionModel = new Schema({
  name: { type: String, default: 'Anonymous' },
  type: { type: String, default: 'Investment' },
  amount: { type: Number },
  date: { type: Date, default: Date.now }
})

const Category = mongoose.model('categories', categoriesModel);
const Transaction = mongoose.model('transaction', transactionModel);

exports.default = Transaction;
module.exports = {
  Category,
  Transaction
}

