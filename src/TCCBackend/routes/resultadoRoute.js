const express = require('express');
const router = express.Router();
const controller = require('../controllers/resultadoController')

router.post('/all', controller.getUserResults);
router.post('/date', controller.getDateRange);

module.exports = router;