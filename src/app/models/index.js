const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');
mongoose.plugin(mongoose_delete, { deletedAt: true, overrideMethods: true });
mongoose.plugin(require('mongoose-autopopulate'));

const accountSchema = require('./schemas/account.schema');
const userSchema = require('./schemas/user.schema');
const doctorSchema = require('./schemas/doctor.schema');
const notificationSchema = require('./schemas/notification.schema');
const appointmentSchema = require('./schemas/appointment.schema');
const diagnosisSchema = require('./schemas/diagnosis.schema');
const imageSchema = require('./schemas/image.schema');
const majorSchema = require('./schemas/major.schema');
const treatmentSchema = require('./schemas/treatment.schema');
const conversationSchema = require('./schemas/conversation.schema');
const messageSchema = require('./schemas/message.schema');

module.exports = {
  Account: mongoose.model('Account', accountSchema),
  User: mongoose.model('User', userSchema),
  Doctor: mongoose.model('Doctor', doctorSchema),
  Notification: mongoose.model('Notification', notificationSchema),
  Appointment: mongoose.model('Appointment', appointmentSchema),
  Diagnosis: mongoose.model('Diagnosis', diagnosisSchema),
  Image: mongoose.model('Image', imageSchema),
  Major: mongoose.model('Major', majorSchema),
  Treatment: mongoose.model('Treatment', treatmentSchema),
  Conversation: mongoose.model('Conversation', conversationSchema),
  Message: mongoose.model('Message', messageSchema),
};
