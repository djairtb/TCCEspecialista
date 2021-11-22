const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')


router.post('/send', controller.sendForgotMail);
router.post('/change', controller.changePassword);

module.exports = router;