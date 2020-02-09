'use strict';

const { mGetHailstoneSeries } = require('../utils/hailstone.utils');

const getHailstone = async (req, res, next) => {
  try {
    const a = +req.query.a;

    if (a <= 0 || isNaN(a)) {
      throw new Error('INVALID_PARAMS');
    }

    const series = mGetHailstoneSeries(a);
    return res.send({
      totalStoppingTime: series
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getHailstone
};
