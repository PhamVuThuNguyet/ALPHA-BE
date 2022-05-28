const conversationRepo = require('../repositories/conversation.repository');

class ConversationService {
  getAll() {
    return conversationRepo.getAll();
  }

  getById(id) {
    return conversationRepo.getById(id);
  }

  getByUserId(userId) {
    const conditions = {
      user: {
        $in: [userId],
      },
    };
    return conversationRepo.getAllByConditions(conditions);
  }

  checkIsExisted(user1, user2) {
    const conditions = {
      $or: [{ user: [user1, user2] }, { user: [user2, user1] }],
    };
    return conversationRepo.getOneByConditions(conditions);
  }

  createOne(data) {
    return conversationRepo.createOne(data);
  }
}

module.exports = new ConversationService();
