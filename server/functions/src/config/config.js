'use strict';

const admin = require('firebase-admin');
const serviceAccount = require('./config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gen-test-3618a.firebaseio.com"
});

const db = admin.database();
const tradingHoursRef = db.ref('/');

module.exports = {
  tradingHoursRef
};
