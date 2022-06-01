const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.ATLAS_URI)
  .then(db => {
    console.log('DB Connected. Mongo is happy!')
    return db;
  }).catch(err => {
    console.log('Error Connecting. Mongo is sad.');
  })

module.exports = connection;
