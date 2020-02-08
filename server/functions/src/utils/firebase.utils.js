'use strict';

const parseFirebaseData = data => Object.keys(data).map(key => data[key]);

module.exports = {
  parseFirebaseData
};
