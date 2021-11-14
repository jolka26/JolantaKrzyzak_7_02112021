const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postControllers');


router.get('/', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePostId)
// router.get('/:id', postsCtrl.getAllFromOneUser)
router.post('/create', postsCtrl.createNewPost);
router.put('/:id', postsCtrl.modifyOnePost);
router.delete('/:id', postsCtrl.deleteOnePost);
 

module.exports = router;