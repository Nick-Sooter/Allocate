const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
const dbConnect = require('./database/connect.js')

// using routes
app.use(require('./routes/route.js'));

dbConnect.then(db => {
  if (!db) return process.exit(1);

  // listen to the http server
  app.listen(port, () => {
    console.log(`Nodemon is listening on port: ${port}`)
  })
  app.on('error', err => console.log(`Failed to connect to server: ${err}`))
  // error in mongodb connection
}).catch(error => {
  console.log(`DB Connection Failed ${error}`);
})



