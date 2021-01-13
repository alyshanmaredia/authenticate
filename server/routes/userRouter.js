const Router = require('express').Router()
const userController = require('../controllers/userController')
const authenticate = require('../middleware/authenticate')

Router.post('/register', userController.register)

Router.post('/activation', userController.activateEmail)

Router.post('/login', userController.login)

Router.post('/refresh_token', userController.getAccessToken)

Router.post('/forgotPassword', userController.forgotPassword)

Router.post('/resetPassword', authenticate, userController.resetPassword)

module.exports = Router