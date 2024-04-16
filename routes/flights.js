const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsController.index);
// GET new flights page
router.get('/new', flightsController.new);
// GET individual flight information
router.get('/:id', flightsController.show)
// POST new flight to index
router.post('/', flightsController.create);

module.exports = router;
