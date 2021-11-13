const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers');
// const auth = require('../middleware/auth');


router.get('/', userCtrl.findAll);
router.get('/:id', userCtrl.getOneUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', userCtrl.modifyUser);


module.exports = router;