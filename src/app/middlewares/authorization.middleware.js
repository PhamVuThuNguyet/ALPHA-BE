const Roles = require('../../enums/roles.enum');
const MESSAGE = require('../../constants/messages.constant');

class AuthorizationMiddleware {

  authorizeDoctor(req, res, next) {
    try {
      const user = req.user;
      if(!user || user.role !== Roles.DOCTOR) {
        res.statusMessage = MESSAGE.NOT_AUTHORIZED;
        return res.sendStatus(403);
      }
      next();
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = mew AuthorizationMiddleware();
