const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
}

async function create(req, res) {
    // console.log('logs start');
    const flightObj = await Flight.findById(req.params.id);
    req.body.flight = flightObj;
    try {
        const ticket = await Ticket.create(req.body);
        await ticket.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect(`/flights/${req.params.id}`);
}

function newTicket(req, res) {
    res.render('tickets/new', { title: 'New Ticket', flightId: req.params.id });
}
