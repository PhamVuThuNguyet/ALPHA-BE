const { Account } = require('../models');

class AccountRepository {
  getById(id) {
    return Account.findById(id);
  }

  getOneByConditions(conditions) {
    return Account.findOne(conditions);
  }

  createOne(data) {
    return Account.create(data);
  }
}

module.exports = new AccountRepository();
