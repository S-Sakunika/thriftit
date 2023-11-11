const Category = require('../../models/Category')
const handleError = require('../../utils/errorHandler')

const getCategoriesByParent = async (req, res) => {
    try {
        const parentSlug = req.params.parentSlug;
        const parentCat = await Category.findOne({slug: parentSlug})

        if(!parentCat) {
            return res.status(400).json({
                status: 'failed',
                result: null,
                message: 'Parent category not found'
            })
        }

        const childCategories = await Category.find({parentCategory: parentCat._id}, { _id: 1, name: 1, slug: { $concat: [parentSlug, "/", "$slug"] }, imageFileName: 1 })

        if(!childCategories.length) {
            return res.status(400).json({
                status: 'failed',
                result: null,
                message: 'Sub categories not found'
            })
        }

        res.status(200).json({
            status: 'success',
            result: childCategories,
            message: 'Categories found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = { getCategoriesByParent }