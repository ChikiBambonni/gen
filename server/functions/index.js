'use strict';

require('dotenv').config();

const functions = require('firebase-functions');
const express = require('express');

const app = express();
app
  .use(require('./src/routes/instruments.routes'))

/* app.get('/iapi/hailstone', (req, res) => {
  return res.send('hailstone');
}); */

exports.app = functions.https.onRequest(app);
