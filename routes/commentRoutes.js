const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')
const {check} = require('express-validator')
const auth = require('../middleware/auth')





router.post('/',
    [check('title').not().isEmpty(),
    check('email').not().isEmpty(),
    check('email').isEmail(),
    check('name').not().isEmpty(),
    check('content').not().isEmpty()
], commentController.creatComment)


router.use(auth)


router.post('/api/v1/comments/getAllComments',commentController.getAllComments)
router.get('/api/v1/comments/:pid', commentController.getPostComments)
router.delete('/api/v1/comments/:cid', commentController.deleteComment)


module.exports = router
