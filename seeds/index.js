
const mongoose = require('mongoose');
const campground = require('../models/campground');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');

// load the env vars
require('dotenv').config();


// connect to MongoDB Database

require('../config/database');

const sample = function (array) {
 return array[Math.floor(Math.random() * array.length)];    
}


const seedDB = async function (){
    //delete everything
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
        })
        await camp.save(); 
    }
}

seedDB().then(function () {
    mongoose.connection.close();
});

