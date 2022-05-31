const treatmentRepo = require('../repositories/treatment.repository');

class TreatmentService {
  getById(id) {
    return treatmentRepo.getById(id);
  }

  getByUserId(userId) {
    const conditions = {
      user: userId,
    };
    return treatmentRepo.getAllByConditions(conditions);
  }

  getByDoctorId(doctorId) {
    const conditions = {
      doctor: doctorId,
    };
    return treatmentRepo.getAllByConditions(conditions);
  }

  createOne(data) {
    return treatmentRepo.createOne(data);
  }
}

module.exports = new TreatmentService();
