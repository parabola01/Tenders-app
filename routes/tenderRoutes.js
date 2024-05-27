const express = require('express');
const router = express.Router();
const tenderController = require('../controllers/tenderController');

router.get('/', tenderController.getAllTenders);
router.get('/closed', tenderController.getClosedTenders);
router.get('/add', (req, res) => res.render('addTender'));
router.get('/:id', tenderController.getTenderDetails);
router.post('/', tenderController.addTender);

module.exports = router;
