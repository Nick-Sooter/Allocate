const mongoose = require('mongoose');
// require('dotenv').config()

const connection = mongoose.connect(process.env.ATLAS_URI)
  .then(db => {
    console.log('DB Connected Successfully...')
    return db;
  }).catch(err => {
    console.log('Error Connecting...');
  })

module.exports = connection;
