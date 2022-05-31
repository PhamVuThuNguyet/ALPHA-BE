const express = require('express');
const router = express.Router();
const diagnosisController = require('../app/controllers/diagnosis.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get(
  '/user',
  authenticate.authenticateToken,
  authorize.authorizeUser,
  diagnosisController.diagnosisUser
);
router.get('/:id', authenticate.authenticateToken, diagnosisController.show);
router.post('/', authenticate.authenticateToken, diagnosisController.create);

module.exports = router;
