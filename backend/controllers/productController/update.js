const Product = require('../../models/Product')
const handleError = require('../../utils/errorHandler')
const { slugify, isUniqueSlug, generateUniqueSlug } = require('../../utils/slugHandler')

const update = async (req, res) => {
    try {

        const id = req.params.id
        const { name } = req.body;

        let slug = slugify(name);
        const currrentSlug = await Product.findById(id, 'slug -_id');

        if(slug !== currrentSlug.slug) {
            const isUnique = await isUniqueSlug(slug);

            if (!isUnique) {
                slug = await generateUniqueSlug(name);
            }
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
            image: req.file,
            slug: slug
        }

        const result = await Product.findByIdAndUpdate(
            id,
            { $set: productData },
            { new: true }
          );

        res.status(200).json({
            status: 'success',
            result: result,
            message: 'Item updated'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = update