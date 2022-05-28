const express = require('express');
const router = express.Router();
const conversationController = require('../app/controllers/conversation.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get(
  '/user',
  authenticate.authenticateToken,
  conversationController.userConversation
);
router.get(
  '/user/:targetId',
  authenticate.authenticateToken,
  conversationController.userConversationWithTarget
);
router.get('/', authenticate.authenticateToken, conversationController.index);
router.post('/', authenticate.authenticateToken, conversationController.create);

module.exports = router;
