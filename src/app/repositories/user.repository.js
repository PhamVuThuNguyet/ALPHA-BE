const { User } = require('../models');

class UserRepository {
  getById(id) {
    return User.findById(id);
  }

  getOneByConditions(conditions) {
    return User.findOne(conditions);
  }

  createOne(data) {
    return User.create(data);
  }
}

module.exports = new UserRepository();
