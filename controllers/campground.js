const Campground = require('../models/campground');


async function index (req, res){
    const campground = await Campground.find({});
    console.log(campground);
    res.render('campgrounds/index', { campground });
}

async function show (req, res){
    const singleCampground = await Campground.findById(req.params.id);
    res.render('campgrounds/show', { singleCampground });
}

module.exports = {
    index,
    show
}