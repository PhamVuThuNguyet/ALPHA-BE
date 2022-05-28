const { Appointment } = require('../models');

class AppointmentRepository {
  createOne(data) {
    return Appointment.create(data);
  }

  getById(id) {
    return Appointment.findById(id);
  }

  getOneByConditions(conditions) {
    return Appointment.findOne(conditions);
  }

  getAllByConditions(conditions) {
    return Appointment.find(conditions);
  }

  update(id, data) {
    return Appointment.findByIdAndUpdate(id, data);
  }

  deleteById(id) {
    return Appointment.delete({ _id: id });
  }
}

module.exports = new AppointmentRepository();
