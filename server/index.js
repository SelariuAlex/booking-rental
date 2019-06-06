const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./models/fake-db');

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seedDb();
});

const app = express();

app.get('/rentals', (req, res) => {
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Running');
});
