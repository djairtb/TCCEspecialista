const express = require('express');
const router = express.Router();
const controller = require('../controllers/resultadoController')

router.get('/all', controller.getUserResults);
router.get('/date', controller.getDateRange);

module.exports = router;