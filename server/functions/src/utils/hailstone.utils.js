'use strict';

const { memoize } = require('./core.utils');

const getHailstoneSeries = (a) => {
  const go = (n, series) => {
    if (n <= 1) {
      return [...series, n];
    } else {
      return go(n % 2 ? ((n * 3) + 1) : n / 2, [...series, n]);
    }
  };

  return go(a, []).length - 1;
};

const mGetHailstoneSeries = memoize(getHailstoneSeries);

module.exports = {
  getHailstoneSeries,
  mGetHailstoneSeries
};
