const userRepo = require('../repositories/user.repository');

class UserService {
  getOneByAccountId(accountId) {
    const conditions = { acount: accountId };
    return userRepo.getOneByConditions(conditions);
  }

  getById(id) {
    return userRepo.getById(id);
  }
}

module.exports = new UserService();
