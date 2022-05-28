const appointmentRepo = require('../repositories/appointment.repository');
const mongoose = require('mongoose');

class AppointmentService {
  getById(id) {
    return appointmentRepo.getById(id);
  }

  getNotId(id) {
    return appointmentRepo.getNotId(id);
  }

  isScheduled(doctor, time, id) {
    time = Number(time);
    const conditions = {
      doctor,
      appointmentAt: {
        $gt: time - 3600000,
        $lt: time + 3600000,
      },
    };
    if (id) {
      conditions['_id'] = {
        $ne: id,
      };
    }
    return appointmentRepo.getOneByConditions(conditions);
  }

  getAppointmentByDoctor(doctor) {
    const conditions = { doctor };
    return appointmentRepo.getAllByConditions(conditions);
  }

  getAppointmentByUser(user) {
    const conditions = { user };
    return appointmentRepo.getAllByConditions(conditions);
  }

  createOne(data) {
    return appointmentRepo.createOne(data);
  }

  update(id, data) {
    return appointmentRepo.update(id, data);
  }

  deleteById(id) {
    return appointmentRepo.deleteById(id);
  }
}

module.exports = new AppointmentService();
