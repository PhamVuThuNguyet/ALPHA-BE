const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')
mongoose.plugin(mongoose_delete, { deletedAt: true, overrideMethods: true })

const accountSchema = require('./schemas/account.schema')
const userSchema = require('./schemas/user.schema')
const doctorSchema = require('./schemas/doctor.schema')
const notificationSchema = require('./schemas/notification.schema')
const meetSchema = require('./schemas/meet.schema')
const diagnosisSchema = require('./schemas/diagnosis.schema')
const imageSchema = require('./schemas/image.schema')

module.exports = {
  Account: mongoose.model('Account', accountSchema),
  User: mongoose.model('User', userSchema),
  Doctor: mongoose.model('Doctor', doctorSchema),
  Notification: mongoose.model('Notification', notificationSchema),
  Meet: mongoose.model('Meet', meetSchema),
  Diagnosis: mongoose.model('Diagnosis', diagnosisSchema),
  Image: mongoose.model('Image', imageSchema),
}
