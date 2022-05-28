const { Conversation } = require('../models');

class ConversationRepository {
  getById(id) {
    return Conversation.findById(id);
  }

  getAll() {
    return Conversation.find();
  }

  getOneByConditions(conditions) {
    return Conversation.findOne(conditions);
  }

  getAllByConditions(conditions) {
    return Conversation.find(conditions);
  }

  createOne(data) {
    return Conversation.create(data);
  }
}

module.exports = new ConversationRepository();
