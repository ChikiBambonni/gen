'use strict';

const parsePagesize = pagesize => {
	if (pagesize === undefined || +pagesize > +process.env.MAX_PAGESIZE) {
		return +process.env.DEFAULT_PAGESIZE;
	} else if (+pagesize <= 0 || isNaN(+pagesize)) {
		throw new Error('INVALID_PAGESIZE');
	}

	return +pagesize;
};

const parsePage = page => {
	if (page === undefined) {
		return  +process.env.DEFAULT_PAGE;
	} else if (+page < 0 || isNaN(+page)) {
		throw new Error('INVALID_PAGE');
	}

	return +page;
};

const parseBool = val => val === 'true';

module.exports = {
  parsePagesize,
  parsePage,
  parseBool
};
