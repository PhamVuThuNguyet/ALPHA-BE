const { Message } = require('../models');

class MessageRepository {
  getOneByConditions(conditions) {
    return Message.findOne(conditions);
  }

  getAllByConditions(conditions) {
    return Message.find(conditions);
  }

  createOne(data) {
    return Message.create(data);
  }
}

module.exports = new MessageRepository();
