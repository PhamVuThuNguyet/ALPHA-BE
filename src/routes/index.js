const authRoute = require('./auth.route');
const appointmentRoute = require('./appointment.route');
const conversationRoute = require('./conversation.route');
const messageRoute = require('./message.route');

module.exports = function routes(app) {
  app.use('/api/auth', authRoute);
  app.use('/api/appointment', appointmentRoute);
  app.use('/api/conversation', conversationRoute);
  app.use('/api/message', messageRoute);
};
