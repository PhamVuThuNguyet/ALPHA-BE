const authRoute = require('./auth.route');
const appointmentRoute = require('./appointment.route');

module.exports = function routes(app) {
  app.use('/api/auth', authRoute);
  app.use('/api/appointment', appointmentRoute);
};
