'use strict';

const transformItems = (items) => {
  const now = +new Date();
  items = items.map(element => ({
    instrumentID: element.instrumentID,
    name: element.name,
    isOpen: element.tradingHours.some(e => e.from <= now && e.to >= now)
  }));

  return items;
}

module.exports = {
  transformItems
};
