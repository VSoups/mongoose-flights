const Flight = require('../models/flight');

module.exports = {
    create,
};

async function create(req, res) {
    // find flight that destination will be added to
    const flight = await Flight.findById(req.params.id);
    // add destination info to destination array parameter in flight object
    flight.destinations.push(req.body);
    try {
        // updates flight object with new destination inputted by user
        await flight.save();
    } catch (error) {
        console.log(error);
    }
    // return to show page
    res.redirect(`/flights/${req.params.id}`);
}