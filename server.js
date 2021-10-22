const express = require('express');
const dotenv = require('dotenv');
const { sender } = require('./sender');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/', (req, res) => {
  try {
    sender(req, res);
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
