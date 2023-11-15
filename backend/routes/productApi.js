const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const { authenticate } = require('../middleware/auth')

router.post('/create', authenticate, productController.create)
router.get('/vendor/:vendor', productController.getProductsByVendor)
router.get('/:id', productController.getProductById)

module.exports = router