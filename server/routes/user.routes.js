const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');
const userValidate = require('../validates/user.validate');

router.route('/').post(userValidate.createUser, userController.createUser);
router.route('/login').post(userValidate.login, userController.login);

module.exports = router;
