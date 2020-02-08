'use strict';

const express = require('express');

const { getInstruments } = require('../controllers/instruments.controllers');

const router = express.Router();

router.get(`/iapi/instruments`, getInstruments);

module.exports = router;
