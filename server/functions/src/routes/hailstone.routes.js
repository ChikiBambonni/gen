//
'use strict';

const express = require('express');

const { getHailstone } = require('../controllers/hailstone.controllers');

const router = express.Router();

router.get(`/iapi/hailstone`, getHailstone);

module.exports = router;
