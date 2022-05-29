
const express = require('express');
const router = express.Router();
const majorController = require('../app/controllers/major.controller');
const authenticate = require('../app/middlewares/authenticate.middleware');
const authorize = require('../app/middlewares/authorization.middleware');

router.get('/', authenticate.authenticateToken, majorController.index);
router.post('/', authenticate.authenticateToken, majorController.create);

module.exports = router;
