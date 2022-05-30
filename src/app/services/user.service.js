const userRepo = require('../repositories/user.repository');

class UserService {
  getOneByAccountId(accountId) {
    const conditions = { account: accountId };
    return userRepo.getOneByConditions(conditions);
  }

  getById(id) {
    return userRepo.getById(id);
  }

  updateOne(id, data) {
    return userRepo.updateOne(id, data);
  }
}

module.exports = new UserService();
