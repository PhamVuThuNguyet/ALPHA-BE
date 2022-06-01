const diagnosisService = require('../services/diagnosis.service');
const validateUtils = require('../utils/validate.util');
const MESSAGE = require('../../constants/messages.constant');

class DiagnosisController {
  // [GET] /api/diagnosis
  async index(req, res) {}

  // [GET] /api/diagnosis/:id
  async show(req, res) {
    try {
      if (!validateUtils.validateObjectId(req.params.id)) {
        res.statusMessage = MESSAGE.DIAGNOSIS_NOT_FOUND;
        return res.sendStatus(404);
      }

      const diagnosis = await diagnosisService.getById(req.params.id);
      res.json(diagnosis);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [GET] /api/diagnosis/user
  async diagnosisUser(req, res) {
    try {
      const diagnosis = await diagnosisService.getByUserId(req.user.id);
      res.json(diagnosis);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [POST] /api/diagnosis
  async create(req, res) {
    try {
      if (!req.body.symtomps) {
        res.statusMessage = MESSAGE.SYMPTOMS_NOT_EMPTY;
        return res.sendStatus(400);
      }

      const diagnosis = await diagnosisService.createOne(req.body);
      res.json(diagnosis);
    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new DiagnosisController();
