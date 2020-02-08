'use strict';

const parseFirebaseData = data => Object.keys(data).map(key => data[key]);
const applyPaging = (data, pagesize, page) => data.slice((page - 1) * pagesize, page * pagesize);

module.exports = {
  parseFirebaseData,
  applyPaging
};
