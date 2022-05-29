const express = require('express');
const router = express.Router();
const doctorController = require('../app/controllers/doctor.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get('/:id', authenticate.authenticateToken, doctorController.show)
router.patch('/', authenticate.authenticateToken, authorize.authorizeDoctor, doctorController.update);

module.exports = router;
