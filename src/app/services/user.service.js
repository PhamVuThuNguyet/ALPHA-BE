const userRepo = require('../repositories/user.repository');

class UserService {
  getOneByAccountId(accountId) {
    const conditions = { acount: accountId };
    return userRepo.getOneByConditions(conditions);
  }
}

module.exports = new UserService();
