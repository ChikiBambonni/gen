'use strict';

require('dotenv').config();

const functions = require('firebase-functions');
const express = require('express');

const app = express();
app
  .use(require('./src/routes/instruments.routes'))
  .use(require('./src/routes/hailstone.routes'))
  .use((err, req, res, next) => {
    return res.status(err.status || 400).send({
      statusCode:  err.status || 400,
      ERROR: err.message
    });
  });

exports.app = functions.https.onRequest(app);
