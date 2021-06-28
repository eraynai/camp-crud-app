const Campground = require('../models/campground');


async function index (req, res){
    const campground = await Campground.find({});
    console.log(campground);
    res.render('campgrounds/index', { campground });
}

module.exports = {
    index,
}