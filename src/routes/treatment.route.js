const express = require('express');
const router = express.Router();
const treatmentController = require('../app/controllers/treatment.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get('/user', authenticate.authenticateToken, authorize.authorizeUser, treatmentController.treatmentUser);
router.get('/doctor', authenticate.authenticateToken, authorize.authorizeDoctor, treatmentController.treatmentDoctor);
router.get('/:id', authenticate.authenticateToken, treatmentController.show);
router.post('/', authenticate.authenticateToken, authorize.authorizeDoctor, treatmentController.create);

module.exports = router;
