const express = require('express')
const router = express.Router()
const usersController = require('../controllers/userController')

router.get('/api/v1/users/',usersController.getUsers)
router.post('/api/v1/users/login',usersController.login)
router.post('/api/v1/users/signup',usersController.signup)

module.exports = router