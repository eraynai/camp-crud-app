var express = require('express');
var router = express.Router();
const campgroundsCtrl = require('../controllers/campground');

router.get('/', campgroundsCtrl.index);

module.exports = router;