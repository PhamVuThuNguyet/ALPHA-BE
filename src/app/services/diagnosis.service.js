const diagnosisRepo = require('../repositories/diagnosis.repository');

class DiagnosisService {
  getById(id) {
    return diagnosisRepo.getById(id);
  }

  getByUserId(userId) {
    const conditions = {
      user: userId,
    };
    return diagnosisRepo.getAllByConditions(conditions);
  }

  createOne(data) {
    return diagnosisRepo.createOne(data);
  }
}

module.exports = new DiagnosisService();
