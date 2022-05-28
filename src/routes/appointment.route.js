const express = require('express');
const router = express.Router();
const appointmentController = require('../app/controllers/appointment.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get('/', authenticate.authenticateToken, appointmentController.index);
router.get(
  '/doctor/:id',
  authenticate.authenticateToken,
  appointmentController.doctorAppointment
);
router.get(
  '/user/:id',
  authenticate.authenticateToken,
  appointmentController.userAppointment
);
router.patch(
  '/:id',
  authenticate.authenticateToken,
  appointmentController.update
);
router.post(
  '/',
  authenticate.authenticateToken,
  authorize.authorizeUser,
  appointmentController.create
);
router.delete(
  '/:id',
  authenticate.authenticateToken,
  appointmentController.delete
);

module.exports = router;
