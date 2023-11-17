const Product = require('../../models/Product')
const handleError = require('../../utils/errorHandler')
const { slugify, isUniqueSlug, generateUniqueSlug } = require('../../utils/slugHandler')

const create = async (req, res) => {
    try {
        const { name } = req.body;

        let slug = slugify(name);
        const isUnique = await isUniqueSlug(slug);

        if (!isUnique) {
            slug = await generateUniqueSlug(name);
        }

        const productData = {
            name: name,
            category: req.body.category_value,
            attributes: {
                condition: req.body.condition,
                color: req.body.color,
                size: req.body.size
            },
            price: req.body.price,
            description: req.body.description,
            vendor: req.body.vendor,
            image: req.file,
            qty: '1',
            slug: slug
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