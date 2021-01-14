const Router = require('express').Router()
const userController = require('../controllers/userController')
const authenticate = require('../middleware/authenticate')
const authAdmin = require('../middleware/authAdmin')
Router.post('/register', userController.register)

Router.post('/activation', userController.activateEmail)

Router.post('/login', userController.login)

Router.post('/refresh_token', userController.getAccessToken)

Router.post('/forgotPassword', userController.forgotPassword)

Router.post('/resetPassword', authenticate, userController.resetPassword)

Router.post('/infor', authenticate, userController.getUserInfor)

Router.post('/all_infor', authenticate, authAdmin, userController.getUsersAllInfor)

Router.post('/logout', userController.logout)

Router.patch('/update', authenticate, userController.updateUser)

Router.patch('/update_role/:id', authenticate, authAdmin, userController.updateUsersRole)

Router.delete('/delete/:id', authenticate, authAdmin, userController.deleteUser)

module.exports = Router