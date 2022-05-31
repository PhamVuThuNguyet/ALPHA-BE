const { Major } = require('../models');

class MajorRepository {
  getAll() {
    return Major.find();
  }

  getById(id) {
    return Major.findById(id);
  }

  getOneByConditions(conditions) {
    return Major.findOne(conditions);
  }

  createOne(data) {
    return Major.create(data);
  }
}

module.exports = new MajorRepository();
