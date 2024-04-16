const Flight = require('../models/flight');

module.exports = {
    index: getAll,
    new: newFlight,
    create,
}

async function getAll(req, res) {
    const flightListings = await Flight.find({});
    res.render('flights/index', { flightListings, title: 'All Flights' })
}

async function create(req, res) {
    // delete empty properties that were not inputted so the default values set in the model are chosen
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body)
        res.redirect('/flights');
    } catch (error) {
        console.log(error);
        res.render('flights/new', { errMsg: error.message, title: 'Add Flight' });
    }
}

function newFlight(req, res) {
    res.render('flights/new', { errMsg: '', title: 'Add Flight' })
}