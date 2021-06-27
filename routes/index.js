var express = require('express');
var router = express.Router();
const campgroundsCtrl = require('../controllers/campground');


/* GET home page. */
router.get('/', campgroundsCtrl.index);
router.get('/makecampground', campgroundsCtrl.create);

module.exports = router;
