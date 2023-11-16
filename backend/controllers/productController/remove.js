const Product = require('../../models/Product')
const handleError = require('../../utils/errorHandler')

const remove = async (req, res) => {
    try {
        const id = req.params.id

        const result = await Product.findByIdAndRemove(id);

        res.status(200).json({
            status: 'success',
            result: result,
            message: 'Item deleted'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = remove