const authRoute = require('./auth.route');
const appointmentRoute = require('./appointment.route');
const conversationRoute = require('./conversation.route');
const messageRoute = require('./message.route');
const userRoute = require('./user.route');
const doctorRoute = require('./doctor.route');
const majorRoute = require('./major.route');
const treatmentRoute = require('./treatment.route');
const diagnosisRoute = require('./diagnosis.route');

module.exports = function routes(app) {
  app.use('/api/auth', authRoute);
  app.use('/api/appointment', appointmentRoute);
  app.use('/api/conversation', conversationRoute);
  app.use('/api/message', messageRoute);
  app.use('/api/user', userRoute);
  app.use('/api/doctor', doctorRoute);
  app.use('/api/major', majorRoute);
  app.use('/api/treatment', treatmentRoute);
  app.use('/api/diagnosis', diagnosisRoute);
};
