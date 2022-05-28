const express = require('express');
const router = express.Router();
const messageController = require('../app/controllers/message.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get(
  '/conversation/:id',
  authenticate.authenticateToken,
  messageController.conversationMessage
);
router.post('/', authenticate.authenticateToken, messageController.create);

module.exports = router;
