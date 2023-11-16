const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const { authenticate } = require('../middleware/auth')
const upload = require('../middleware/upload')

router.post('/create', authenticate, upload.single('image'), productController.create)
router.post('/update/:id', authenticate, upload.single('image'), productController.update)
router.get('/vendor/:vendor', productController.getProductsByVendor)
router.get('/category/:category', productController.getProductsByCategory)
router.get('/:id', productController.getProductById)
router.get('/slug/:slug', productController.getProductBySlug)
router.delete('/:id', authenticate, productController.remove)

module.exports = router