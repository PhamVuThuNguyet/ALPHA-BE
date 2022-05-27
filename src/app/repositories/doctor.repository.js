const { Doctor } = require('../models');

class DoctorRepository {
  getOneByConditions(conditions) {
    return Doctor.findOne(conditions);
  }

  createOne(data) {
    return Doctor.create(data);
  }
}

module.exports = new DoctorRepository();
