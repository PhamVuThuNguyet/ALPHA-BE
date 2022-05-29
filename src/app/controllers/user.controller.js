const userService = require('../services/user.service');
const MESSAGE = require('../../constants/messages.constant');
const validateUtils = require('../utils/validate.util');

class UserConroller {
  // [GET] /api/user/:id
  async show(req, res, next) {
    try {
      if (!validateUtils.validateObjectId(req.params.id)) {
        res.statusMessage = MESSAGE.USER_NOT_FOUND;
        return res.sendStatus(404);
      }

      const user = await userService.getById(req.params.id);

      if (!user) {
        res.statusMessage = MESSAGE.USER_NOT_FOUND;
        return res.sendStatus(404);
      }

      res.json(user);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [PATCH] /api/user
  async update(req, res, next) {
    try {
      await userService.updateOne(req.user.id, req.body);
      res.statusMessage = MESSAGE.UPDATE_SUCCESSFUL;
      res.sendStatus(200);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new UserConroller();
