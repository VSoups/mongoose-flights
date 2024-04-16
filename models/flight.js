const mongoose = require('mongoose');

// shorthand we can use when creating a new schema
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Southwest', 'Hawaiian', 'United', 'Jetblue'] },
    airport: { type: String, enum: ['LAX', 'SFO', 'ATL', 'DBX', 'LHR', 'HND'], default: 'SFO' },
    flightNum: { type: Number, min: 10, max: 9999, required: true },
    departs: { type: Date, default: function() { // function to set default time
        const today = new Date(); // save full date
        const year = today.getFullYear(); // save only year from the previous line
        return today.setFullYear(year + 1); // return the full date we saved but add 1 to the year (as default if nothing is chosen by the user)
    } },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);