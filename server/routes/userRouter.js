const Router = require('express').Router()
const userController = require('../controllers/userController')

Router.post('/register', userController.register)

Router.post('/activation', userController.activateEmail)



module.exports = Router