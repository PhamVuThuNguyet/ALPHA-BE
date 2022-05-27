const authRoute = require('./auth.route');

module.exports = function routes(app) {
  app.use('/api/auth', authRoute);
};
