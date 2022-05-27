const accountRepo = require('../repositories/account.repository');
const userRepo = require('../repositories/user.repository');
const doctorRepo = require('../repositories/doctor.repository');
const bcryptUtil = require('../utils/bcrypt.util');
const Roles = require('../../enums/roles.enum');

class AuthService {
  async signup(data) {
    if (data.role) {
      data.role = data.role === Roles.DOCTOR ? Roles.DOCTOR : Roles.USER;
    }
    data.password = bcryptUtil.hashPassword(data.password);
    const {
      email,
      password,
      role,
      provider = 'local',
      firstName,
      lastName,
    } = data;

    const newAccount = await accountRepo.createOne({
      email,
      password,
      role,
      provider,
    });
    newAccount.password = undefined;
    if (newAccount.role === Roles.USER) {
      await userRepo.createOne({
        account: newAccount._id,
        firstName,
        lastName,
      });
    } else {
      await doctorRepo.createOne({
        account: newAccount._id,
        firstName,
        lastName,
      });
    }
    return newAccount;
  }
}

module.exports = new AuthService();
