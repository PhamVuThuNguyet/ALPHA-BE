const { Treatment } = require('../models');

class TreatmentRepository {
  getById(id) {
    return Treatment.findById(id);
  }

  getAllByConditions(conditions) {
    return Treatment.find(conditions);
  }

  createOne(data) {
    return Treatment.create(data);
  }
}

module.exports = new TreatmentRepository();
