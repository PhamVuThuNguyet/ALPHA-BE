const { Doctor } = require('../models');

class DoctorRepository {
  getAll() {
    return Doctor.find();
  }

  getOneByConditions(conditions) {
    return Doctor.findOne(conditions);
  }

  getById(id) {
    return Doctor.findById(id);
  }

  createOne(data) {
    return Doctor.create(data);
  }

  updateOne(id, data) {
    return Doctor.findByIdAndUpdate(id, data);
  }
}

module.exports = new DoctorRepository();
