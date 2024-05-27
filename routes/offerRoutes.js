const express = require('express');
const router = express.Router();
const offerController = require('../controllers/offerController');

router.post('/tender/:tenderId', offerController.addOffer);

module.exports = router;
