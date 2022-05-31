const doctorService = require('../services/doctor.service');
const MESSAGE = require('../../constants/messages.constant');
const validateUtils = require('../utils/validate.util');

class DoctorConroller {
  // [GET] /api/doctor
  async index(req, res) {
    try {
      const doctors = await doctorService.getAll();
      res.json(doctors);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [GET] /api/doctor/:id
  async show(req, res, next) {
    try {
      if (!validateUtils.validateObjectId(req.params.id)) {
        res.statusMessage = MESSAGE.DOCTOR_NOT_FOUND;
        return res.sendStatus(404);
      }

      const doctor = await doctorService.getById(req.params.id);
      if (!doctor) {
        res.statusMessage = MESSAGE.DOCTOR_NOT_FOUND;
        return res.sendStatus(404);
      }

      res.json(doctor);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [PATCH] /api/user
  async update(req, res, next) {
    try {
      await doctorService.updateOne(req.user.id, req.body);
      res.statusMessage = MESSAGE.UPDATE_SUCCESSFUL;
      res.sendStatus(200);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new DoctorConroller();
