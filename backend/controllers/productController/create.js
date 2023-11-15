const Product = require('../../models/Product')
const handleError = require('../../utils/errorHandler')

const create = async (req, res) => {
    try {

        const productData = {
            name: req.body.name,
            category: req.body.category_value,
            attributes: {
                condition: req.body.condition,
                color: req.body.color,
                size: req.body.size
            },
            price: req.body.price,
            description: req.body.description,
            vendor: req.body.vendor,
            qty: '1'
        }

        const product = new Product(productData)
        const result = await product.save()

        res.status(200).json({
            status: 'success',
            result: result,
            message: 'Item saved'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = create