const express = require('express');
const router = express.Router();
const desController = require('../controllers/destinations');

// POST new destination
router.post('/flights/:id/destinations', desController.create);

module.exports = router;