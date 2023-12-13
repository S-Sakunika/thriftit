const Product = require('../../models/Product')
const Category = require('../../models/Category')
const handleError = require('../../utils/errorHandler')

const getProductsByVendor = async (req, res) => {
    try {
        const vendor = req.params.vendor;

        const products = await Product.find({vendor: vendor, removed: false}).sort({ createdAt: -1 }).exec();
        res.status(200).json({
            status: 'success',
            result: products,
            message: 'Products found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const categorySlug = req.params.category;

        const category = await Category.findOne({ slug: categorySlug });

        if (!category) {
            res.status(400).json({
                status: 'failed',
                result: null,
                message: 'Category not found',
            });
        }

        const products = await Product.find({ category: category._id, qty: { $gt: 0 }, removed: false });

        const result = {
            category: category,
            products: products
        }

        res.status(200).json({
            status: 'success',
            result: result,
            message: 'Products found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await Product.findOne({_id: id}).populate('category').exec();
        res.status(200).json({
            status: 'success',
            result: product,
            message: 'Products found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

const getProductBySlug = async (req, res) => {
    try {
        const slug = req.params.slug;

        const product = await Product.findOne({slug: slug}).populate('category').populate('vendor').exec();
        res.status(200).json({
            status: 'success',
            result: product,
            message: 'Products found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = { getProductsByVendor, getProductById, getProductsByCategory, getProductBySlug }