const express = require('express');
const router = express.Router();
const postsCtrl = require('../controllers/postControllers');


router.get('/', postsCtrl.getAllPosts);
router.get('/:id', postsCtrl.getOnePostId)
// router.get('/:id', postsCtrl.getOne)
router.post('/create', postsCtrl.createNewPost);
// router.put('/:id', postsCtrl.getOnePostId)
// router.delete('/:id', postsCtrl.deleteOne)
 

module.exports = router;