const Campground = require('../models/campground');

function index (req, res){
    res.render('home');
}

async function create (req, res){
    const camp = new Campground({ title: 'My Backyard '});
    await camp.save();
    res.send(camp);
}

module.exports = {
    index,
    create,
}