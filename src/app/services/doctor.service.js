const doctorRepo = require('../repositories/doctor.repository');

class DoctorService {
  getOneByAccountId(accountId) {
    const conditions = { acount: accountId };
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
