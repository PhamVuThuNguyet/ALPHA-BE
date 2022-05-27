const express = require('express');
const router = express.Router();
const appointmentController = require('../app/controllers/appointment.controller');
const jwtMiddleware = require('../app/middlewares/jwt.middleware');

router.get('/', jwtMiddleware.authenticateToken, appointmentController.index);

module.exports = router;
