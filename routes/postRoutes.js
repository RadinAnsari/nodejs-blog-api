const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const {check} = require('express-validator')
const auth = require('../middleware/auth')

router.get('/:pid',postController.getPostById)

router.use(auth)


router.post('/api/v1/posts/',
[check('title').not().isEmpty(),
check('title').isLength({min:5})
],
postController.createPost)


router.delete('/api/v1/posts/:pid',postController.deletePost)

module.exports = router