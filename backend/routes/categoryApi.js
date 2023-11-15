const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.get('/:parentSlug', categoryController.getCategoriesByParent)
router.get('/', categoryController.getAllCategories)

module.exports = router