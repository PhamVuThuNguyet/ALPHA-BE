const doctorService = require('../services/doctor.service');
const appointmentService = require('../services/appointment.service');
const userService = require('../services/user.service');
const validateUtils = require('../utils/validate.util');
const MESSAGE = require('../../constants/messages.constant');
const Roles = require('../../enums/roles.enum');

class AppointmentController {
  // [GET] /api/appointment
  index(req, res, next) {
    res.json(req.user);
  }

  // [GET] /api/appointment/doctor/:id
  async doctorAppointment(req, res, next) {
    try {
      const appointments = await appointmentService.getAppointmentByDoctor(
        req.params.id
      );
      res.json(appointments);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [GET] /api/appointment/doctor/:id
  async userAppointment(req, res, next) {
    try {
      const appointments = await appointmentService.getAppointmentByUser(
        req.params.id
      );
      res.json(appointments);
    } catch (e) {
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [PATCH] /api/appointment
  async update(req, res, next) {
    try {
      const appointment = await appointmentService.getById(req.params.id);
      if (!appointment) {
        res.statusMessage = MESSAGE.APPOINTMENT_NOT_FOUND;
        return res.sendStatus(400);
      }
      const isScheduled = await appointmentService.isScheduled(
        appointment.doctor,
        req.body.appointmentAt,
        req.params.id
      );
      if (isScheduled) {
        res.statusMessage = MESSAGE.DOCTOR_HAS_SCHEDULED;
        return res.sendStatus(400);
      }
      await appointmentService.update(req.params.id, req.body);
      res.statusMessage = MESSAGE.UPDATE_SUCCESSFUL;
      res.sendStatus(204);
    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [POST] /api/appointment
  async create(req, res, next) {
    try {
      if(!validateUtils.validateObjectId(req.body.doctor)) {
        res.statusMessage = MESSAGE.DOCTOR_NOT_FOUND;
        return res.sendStatus(400);
      }

      const [doctor, user] = await Promise.all([
        doctorService.getById(req.body.doctor),
        userService.getById(req.user.id),
      ]);
      if (!doctor) {
        res.statusMessage = MESSAGE.DOCTOR_NOT_FOUND;
        return res.sendStatus(400);
      }
      req.body.user = user._id;
      req.body.title = `Online treatment between ${user.firstName} ${user.lastName} and Doctor ${doctor.firstName} ${doctor.lastName}`;
      const isScheduled = await appointmentService.isScheduled(
        req.body.doctor,
        req.body.appointmentAt
      );
      if (isScheduled) {
        res.statusMessage = MESSAGE.DOCTOR_HAS_SCHEDULED;
        return res.sendStatus(400);
      }
      const newAppointment = await appointmentService.createOne(req.body);
      res.json(newAppointment);
    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }

  // [DELETE] /api/appointment
  async delete(req, res) {
    try {
      const appointment = await appointmentService.getById(req.params.id);
      if (!appointment) {
        res.statusMessage = MESSAGE.APPOINTMENT_NOT_FOUND;
        return res.sendStatus(400);
      }

      if (
        !appointment.user.equals(req.user.id) &&
        appointment.doctor.equals(req.user.id) &&
        req.user.role !== Roles.ADMIN
      ) {
        res.statusMessage = MESSAGE.NOT_AUTHORIZED;
        return res.sendStatus(403);
      }

      await appointmentService.deleteById(req.params.id);
      res.statusMessage = MESSAGE.DELETE_SUCCESSFUL;
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.statusMessage = MESSAGE.SERVER_ERROR;
      res.sendStatus(500);
    }
  }
}

module.exports = new AppointmentController();
