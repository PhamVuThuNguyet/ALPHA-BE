const { User } = require('../models');

class UserRepository {
  getOneByConditions(conditions) {
    return User.findOne(conditions);
  }

  createOne(data) {
    return User.create(data);
  }
}

module.exports = new UserRepository();
