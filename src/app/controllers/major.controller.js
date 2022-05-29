const majorService = require('../services/major.service');
const MESSAGE = require('../../constants/messages.constant');
const validateUtils = require('../utils/validate.util');

class MajorController {
  // [GET] /api/major
  async index(req, res, next) {
    try {
      const major = await majorService.getAll();
      res.json(major);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [POST] /api/major
  async create(req, res, next) {
    try {
      const isExisted = await majorService.getOneByTitle(req.body.title);
      if(isExisted) {
        res.statusMessage = MESSAGE.MAJOR_EXISTED;
        return res.sendStatus(409);
      }

      const newMajor = await majorService.createOne(req.body);
      res.json(newMajor);

    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new MajorController();
