'use strict';

const { tradingHoursRef } = require('../config/config');
const { parseFirebaseData, applyPaging } = require('../utils/firebase.utils');
const { transformItems } = require('../utils/instruments.utils');
const { parsePage, parsePagesize, parseBool } = require('../utils/params.utils');

const getInstruments = async (req, res, next) => {
  try {
    const page = parsePage(req.query.page);
    const pagesize = parsePagesize(req.query.pagesize);
    const openOnly = parseBool(req.query.openOnly);

    let hours = await tradingHoursRef
      .orderByKey()
      // .startAt(((page - 1) * pagesize + 1).toString())
      // .endAt((page * pagesize).toString())
      .once('value');

    hours = parseFirebaseData(hours.val());
    hours = transformItems(hours);
    if (openOnly) hours = hours.filter(element => element.isOpen);
    const totalElements = hours.length;
    hours = applyPaging(hours, pagesize, page, req.query.openOnly, openOnly);

    return res.send({
      totalPages: Math.ceil(totalElements/pagesize),
      totalElements,
      elements: hours,
      page,
      pagesize,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getInstruments
};
