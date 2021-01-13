const Router = require('express').Router()
const userController = require('../controllers/userController')

Router.post('/register', userController.register)

Router.post('/activation', userController.activateEmail)

Router.post('/login', userController.login)




module.exports = Router