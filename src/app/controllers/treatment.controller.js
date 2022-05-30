const treatmentService = require('../services/treatment.service');
const validateUtils = require('../utils/validate.util');
const MESSAGE = require('../../constants/messages.constant');

class TreatmentController {
  // [GET] /treatment
  async index(req, res) {}

  // [GET] /treatment/:id
  async show(req, res) {
    try {
      if (!validateUtils.validateObjectId(req.params.id)) {
        res.statusMessage = MESSAGE.TREATMENT_NOT_FOUND;
        return res.sendStatus(404);
      }
      const treatment = await treatmentService.getById(req.params.id);
      if (!treatment) {
        res.statusMessage = MESSAGE.TREATMENT_NOT_FOUND;
        return res.sendStatus(404);
      }
      res.json(treatment);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [GET] /treatment/user
  async treatmentUser(req, res) {
    try {
      const treatments = await treatmentService.getByUserId(req.user.id);
      res.json(treatments);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  async treatmentDoctor(req, res) {
    try {
      const treatments = await treatmentService.getByDoctorId(req.user.id);
      res.json(treatments);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [POST] /treatment
  async create(req, res) {
    try {
      if(!req.body.user || !validateUtils.validateObjectId(req.body.user)) {
        res.statusMessage = MESSAGE.USER_NOT_FOUND;
        return res.sendStatus(400);
      }

      if(!req.body.diagnosis) {
        res.statusMessage = MESSAGE.DIAGNOSIS_NOT_EMPTY;
        return res.sendStatus(400);
      }

      if(!req.body.symtomps) {
        res.statusMessage = MESSAGE.SYMPTOMS_NOT_EMPTY;
        return res.sendStatus(400);
      }

      if(!req.body.treatment) {
        res.statusMessage = MESSAGE.TREATMENT_NOT_EMPTY;
        return res.sendStatus(400);
      }

      req.body.doctor = req.user.id;

      const newTreatment = await treatmentService.createOne(req.body);
      res.json(newTreatment);

    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new TreatmentController();
