const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());

// using routes
app.use(require('./routes/route.js'));

app.listen(port, () => {
  console.log(`Nodemon is happy on port: ${port}`)
})

