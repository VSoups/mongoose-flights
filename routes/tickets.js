const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tickets');


// GET /flights/:id/tickets/new (get new ticket page)
router.get('/flights/:id/tickets/new', ticketController.new);
// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketController.create);

module.exports = router;
