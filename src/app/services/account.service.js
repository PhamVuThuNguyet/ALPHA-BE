const accountRepo = require('../repositories/account.repository');

class AccountService {
  createOne(data) {
    return accountRepo.createOne(data);
  }

  getOneByEmail(email) {
    const conditions = {
      email: email,
    };
    return accountRepo.getOneByConditions(conditions);
  }
}

module.exports = new AccountService();
