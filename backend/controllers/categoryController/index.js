const { getCategoriesByParent, getAllCategories } = require('./read')
const categoryController = {
    getCategoriesByParent,
    getAllCategories
}

module.exports = categoryController