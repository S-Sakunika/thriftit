const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.get('/:parentSlug', categoryController.getCategoriesByParent)

module.exports = router