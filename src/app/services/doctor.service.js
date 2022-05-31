const doctorRepo = require('../repositories/doctor.repository');

class DoctorService {
  getAll() {
    return doctorRepo.getAll();
  }

  getOneByAccountId(accountId) {
    const conditions = { account: accountId };
    return doctorRepo.getOneByConditions(conditions);
  }

  getById(id) {
    return doctorRepo.getById(id);
  }

  updateOne(id, data) {
    return doctorRepo.updateOne(id, data);
  }
}

module.exports = new DoctorService();
