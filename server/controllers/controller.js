const model = require('../models/model.js');

// POST '/api/categories'
async function createCategories(req, res) {
  // res.json('GET data from Categories');
  const Create = new model.Category({
    type: 'Investment',
    color: 'rgb(252, 190, 68)',
  })

  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res.status(400).json({ message: `Error creating categories ${err}` });
  })
}

// GET '/api/categories'
async function getCategories(req, res) {
  let data = await model.Category.find({})

  return res.json(data);
}

// POST '/api/transaction
async function createTransaction(req, res) {
  if (!req.body) return res.status(400).json('Post data not provided');
  let { name, type, amount } = req.body;

  const create = await new model.Transaction(
    {
      // name: name,
      // type: type,
      // amount: amount,
      name,
      type,
      amount,
      date: new Date()
    }
  );

  create.save(function (err) {
    if (!err) return res.json(create);
    return res.status(400).json({ message: `Error while creating transactio ${err}` });
  })
}

// GET '/api/transaction'
async function getTransaction(req, res) {
  let data = await model.Transaction.find({});
  return res.json(data);
}

module.exports = {
  createCategories,
  getCategories,
  createTransaction,
  getTransaction
}