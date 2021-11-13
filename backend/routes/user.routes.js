const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers');


router.get("/", userCtrl.findAll);
router.post('/signup', userCtrl.signup);
// router.post('/login', userCtrl.login);


module.exports = router;