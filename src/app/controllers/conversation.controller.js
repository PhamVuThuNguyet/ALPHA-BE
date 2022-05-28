const conversationService = require('../services/conversation.service');
const MESSAGE = require('../../constants/messages.constant');

class ConversationController {
  // [GET] /api/conversation
  async index(req, res, next) {
    try {
      const conversations = await conversationService.getAll();
      res.json(conversations);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [GET] /api/conversation/user
  async userConversation(req, res, next) {
    try {
      const conversation = await conversationService.getByUserId(req.user.id);
      res.json(conversation);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [GET] /api/conversation/user/:targetId
  async userConversationWithTarget(req, res, next) {
    try {
      const isExisted = await conversationService.checkIsExisted(
        req.user.id,
        req.params.targetId
      );
      if (isExisted) return res.json(isExisted);

      req.body.user = [req.user.id, req.params.targetId];
      const newConversation = await conversationService.createOne(req.body);
      res.json(newConversation);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [POST] /api/conversation
  async create(req, res, next) {
    try {
      const isExisted = await conversationService.checkIsExisted(
        req.user.id,
        req.body.user
      );
      if (isExisted) {
        res.statusMessage = MESSAGE.CONVERSATION_EXISTED;
        return res.sendStatus(409);
      }

      req.body.user = [req.user.id, req.body.user];
      const newConversation = await conversationService.createOne(req.body);
      res.json(newConversation);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new ConversationController();
