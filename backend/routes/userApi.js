const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const { authenticate } = require('../middleware/auth')

router.post('/create', userController.create)
router.get('/', authenticate, userController.getUser)

module.exports = router