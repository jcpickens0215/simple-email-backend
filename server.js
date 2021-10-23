const express = require('express');
const dotenv = require('dotenv');
const { sender } = require('./sender');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
