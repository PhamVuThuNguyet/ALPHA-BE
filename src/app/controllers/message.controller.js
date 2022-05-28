const messageService = require('../services/message.service');
const conversationService = require('../services/conversation.service');
const MESSAGE = require('../../constants/messages.constant');

class MessageController {
  // [GET] /api/message/conversation/:id
  async conversationMessage(req, res, next) {
    try {
      const isExisted = await conversationService.getById(req.params.id);
      if (!isExisted) {
        res.statusMessage = MESSAGE.CONVERSATION_NOT_FOUND;
        return res.sendStatus(400);
      }
      const messages = await messageService.getByConversationId(req.params.id);
      res.json(messages);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [POST] /api/message
  async create(req, res, next) {
    try {
      req.body.user = req.user.id;
      const newMessage = await messageService.createOne(req.body);
      res.json(newMessage);
    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new MessageController();
