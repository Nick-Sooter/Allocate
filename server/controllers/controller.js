const model = require('../models/model.js');

// POST '/api/categories'
async function createCategories(req, res) {
  // res.json('GET data from Categories');
  const Create = new model.Categories({
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
  let data = await model.Categories.find({})

  let filter = await data.map(val => Object.assign({}, { type: val.type, color: val.color }));
  return res.json(filter);
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
    return res.status(400).json({ message: `Error while creating transaction ${err}` });
  })
}

// GET '/api/transaction'
async function getTransaction(req, res) {
  let data = await model.Transaction.find({});
  return res.json(data);
}

// DELETE '/api/transaction'
async function deleteTransaction(req, res) {
  // use id paramater to delete
  if (!req.body) return res.status(400).json({ message: 'Request body not found' });

  await model.Transaction.deleteOne(req.body, function (err) {
    if (!err) return res.json('Transaction Deleted');
  }).clone().catch(function (err) { res.json('Error while deleting transaction') })
}

// GET '/api/labels'
// mongoose aggregate function to join routes for categories and transactions
// color properties from categories, data from transaction
async function getLabels(req, res) {

  model.Transaction.aggregate([
    {
      $lookup: {
        // collection to join
        from: "categories",
        // field from input documents
        localField: "type",
        // field from the documents of the "from" collection
        foreignField: "type",
        // name for output array field
        as: "categoriesInfo"
      }
    },
    {
      // Deconstructs an array field from the input documents to output a document for each element.
      $unwind: "$categoriesInfo"
    }
  ]).then(result => {
    // only need id, name, type, amount, and color for front end
    let data = result.map(val => Object.assign({}, { _id: val._id, name: val.name, type: val.type, amount: val.amount, color: val.categoriesInfo['color'] }));
    res.json(data);
  }).catch(error => {
    res.status(400).json("Lookup Error");
  })
}

module.exports = {
  createCategories,
  getCategories,
  createTransaction,
  getTransaction,
  deleteTransaction,
  getLabels
}