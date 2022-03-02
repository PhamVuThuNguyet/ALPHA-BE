const authService = require('../services/auth.service')
class AuthController {
  // [POST] /api/auth/signup
  signup(req, res, next) {}

  // [POST] /api/auth/signin
  signin(req, res, next) {}

  // [POST] /api/auth/refresh-token
  refreshToken(req, res, next) {}

  // [POST] /api/auth/verify-token
  verifyToken(req, res, next) {}

  // [POST] /api/auth/update-password
  updatePassword(req, res, next) {}
}

module.exports = new AuthController()
