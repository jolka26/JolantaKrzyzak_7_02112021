const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts.controlers');

router.get('/', postsCtrl.getAll)
router.get('/:id', postsCtrl.getOne)
router.post('/', postsCtrl.createOne)
router.put('/:id', postsCtrl.updateOne)
router.delete('/:id', postsCtrl.deleteOne)


module.exports = router;