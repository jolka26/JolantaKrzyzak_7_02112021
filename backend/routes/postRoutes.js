const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postControllers');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');


router.get('/',  postsCtrl.getAllPosts);
router.get('/:id',  postsCtrl.getOnePostId)
// router.get('/:id', auth, postsCtrl.getAllFromOneUser)
router.post('/create',  postsCtrl.createNewPost);
router.put('/modify/:id',  postsCtrl.modifyOnePost);
router.delete('/:id',  postsCtrl.deleteOnePost);
 

module.exports = router;