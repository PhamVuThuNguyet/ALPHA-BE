const doctorRepo = require('../repositories/doctor.repository');

class DoctorService {
  getOneByAccountId(accountId) {
    const conditions = { acount: accountId };
    return doctorRepo.getOneByConditions(conditions);
  }
}

module.exports = new DoctorService();
