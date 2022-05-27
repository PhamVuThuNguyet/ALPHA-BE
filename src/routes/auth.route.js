const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/auth.controller');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/refresh-token', authController.refreshToken);
router.post('/verify-token', authController.verifyToken);
router.patch('/update-password', authController.updatePassword);

module.exports = router;
