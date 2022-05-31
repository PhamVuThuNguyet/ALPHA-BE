const { Diagnosis } = require('../models');

class DiagnosisRepository {
  getById(id) {
    return Diagnosis.findById(id);
  }

  getAllByConditions(conditions) {
    return Diagnosis.find(conditions);
  }

  createOne(data) {
    return Diagnosis.create(data);
  }
}

module.exports = new DiagnosisRepository();
