const authService = require('../services/auth.service');
const accountService = require('../services/account.service');
const userService = require('../services/user.service');
const doctorService = require('../services/doctor.service');
const validateUtil = require('../utils/validate.util');
const jwtUtil = require('../utils/jwt.util');
const bcryptUtil = require('../utils/bcrypt.util');
const MESSAGE = require('../../constants/messages.constant');
const Roles = require('../../enums/roles.enum');

class AuthController {
  // [POST] /api/auth/signup
  async signup(req, res, next) {
    try {
      const isValidEmail = validateUtil.validateEmail(req.body.email);
      if (!isValidEmail) {
        res.statusMessage = MESSAGE.EMAIL_INVALID;
        return res.sendStatus(422);
      }

      if (!req.body.firstName) {
        res.statusMessage = MESSAGE.FIRST_NAME_EMPTY;
        return res.sendStatus(400);
      }

      if (!req.body.lastName) {
        res.statusMessage = MESSAGE.LAST_NAME_EMPTY;
        return res.sendStatus(400);
      }

      if (!req.body.password) {
        res.statusMessage = MESSAGE.PASSWORD_EMPTY;
        return res.sendStatus(400);
      }

      const isExisted = await accountService.getOneByEmail(req.body.email);
      if (isExisted) {
        res.statusMessage = MESSAGE.EMAIL_EXISTED;
        return res.sendStatus(409);
      }

      const result = await authService.signup(req.body);
      return res.json(result);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      return res.sendStatus(500);
    }
  }

  // [POST] /api/auth/signin
  async signin(req, res, next) {
    try {
      const account = await accountService.getOneByEmail(req.body.email);
      if (!account) {
        res.statusMessage = MESSAGE.INVALID_ACCOUNT;
        return res.status(403).send();
      }
      const isMatchPassword = bcryptUtil.comparePassword(
        req.body.password,
        account.password
      );
      if (!isMatchPassword) {
        res.statusMessage = MESSAGE.INVALID_ACCOUNT;
        return res.status(403).send();
      }

      const token = jwtUtil.generateToken({ data: {
        id: account._id,
        email: account.email,
        role: account.role,
      }});
      let info = {};
      if (account.role === Roles.DOCTOR) {
        info = await doctorService.getOneByAccountId(account._id);
      } else {
        info = await userService.getOneByAccountId(account._id);
      }

      info = JSON.parse(JSON.stringify(info));

      return res.json({
        ...token,
        info: { ...info, email: account.email, role: account.role },
      });
    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      return res.status(500).send();
    }
  }

  // [POST] /api/auth/refresh-token
  refreshToken(req, res, next) {}

  // [POST] /api/auth/verify-token
  verifyToken(req, res, next) {}

  // [POST] /api/auth/update-password
  updatePassword(req, res, next) {}
}

module.exports = new AuthController();
