const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const uploadController = require('../controllers/uploadController')
const authenticate = require('../middleware/authenticate')

router.post('/upload_avatar', uploadImage, uploadController.uploadAvatar)

module.exports = router