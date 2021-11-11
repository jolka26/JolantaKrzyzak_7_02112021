const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts.controlers');

router.get('/getAll', postsCtrl.getAll)
router.get('/getOne/:id', postsCtrl.getOne)
router.post('/createOne', postsCtrl.createOne)
router.put('/updateOne/:id', postsCtrl.updateOne)
router.delete('/deleteOne:/id', postsCtrl.deleteOne)


module.exports = router;