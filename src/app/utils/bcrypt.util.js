const bcrypt = require('bcrypt');

class BcryptUtils {
  hashPassword(password) {
    return bcrypt.hashSync(password, 15);
  }

  comparePassword(input, hash) {
    return bcrypt.compareSync(input, hash);
  }
}

module.exports = new BcryptUtils();
