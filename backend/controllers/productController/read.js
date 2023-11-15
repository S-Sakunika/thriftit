const Product = require('../../models/Product')
const handleError = require('../../utils/errorHandler')

const getProductsByVendor = async (req, res) => {
    try {
        const vendor = req.params.vendor;

        const products = await Product.find({vendor: vendor, removed: false})
        res.status(200).json({
            status: 'success',
            result: products,
            message: 'Products found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const products = await Product.findOne({_id: id})
        res.status(200).json({
            status: 'success',
            result: products,
            message: 'Products found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = { getProductsByVendor, getProductById }