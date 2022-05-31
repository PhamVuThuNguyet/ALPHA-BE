const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/user.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get('/', authenticate.authenticateToken, userController.index);
router.get('/:id', authenticate.authenticateToken, userController.show);
router.patch(
  '/',
  authenticate.authenticateToken,
  authorize.authorizeUser,
  userController.update
);

module.exports = router;
