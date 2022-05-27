
class AppointmentController {

  index(req, res, next) {
    res.json(req.user);
  }

}

module.exports = new AppointmentController();
