const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userControllers');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');


router.get('/', userCtrl.findAll);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/:id',  userCtrl.getOneUser);
router.put('/modify/:id',   userCtrl.modifyUser);
router.delete('/:id',   userCtrl.deleteUser);


module.exports = router;