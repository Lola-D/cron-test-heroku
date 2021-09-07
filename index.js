require('dotenv').config();
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const scheduler = require('./scheduler');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.CLIENT_PUBLIC_URL || 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`🚀 Server listening on: ${PORT}`);
});

scheduler.initCrons(config);