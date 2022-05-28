const { Doctor } = require('../models');

class DoctorRepository {
  getOneByConditions(conditions) {
    return Doctor.findOne(conditions);
  }

  getById(id) {
    return Doctor.findById(id);
  }

  createOne(data) {
    return Doctor.create(data);
  }
}

module.exports = new DoctorRepository();
