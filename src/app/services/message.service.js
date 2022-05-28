const messageRepo = require('../repositories/message.repository');

class MessageService {
  getByConversationId(conversationId) {
    const conditions = {
      conversation: conversationId,
    };
    return messageRepo.getAllByConditions(conditions);
  }

  createOne(data) {
    return messageRepo.createOne(data);
  }
}

module.exports = new MessageService();
