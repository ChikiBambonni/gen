'use strict';

const { tradingHoursRef } = require('../config/config');
const { parseFirebaseData } = require('../utils/firebase.utils');

const getInstruments = async (req, res, next) => {
  try {
    let hours = await tradingHoursRef.once('value');
    hours = parseFirebaseData(hours.val());

    res.send(hours);

  } catch (err) {
    return next(err);
  }
};

const getHailstone = async (req, res, next) => {
  try {

  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getInstruments,
  getHailstone
};
