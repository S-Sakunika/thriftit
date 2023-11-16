const Product = require('../models/Product')
const slugify = (name) => name.toLowerCase().split(' ').join('-');

const isUniqueSlug = async (slug) => {
    const product = await Product.findOne({ slug: slug });
    return !product;
};

const generateUniqueSlug = async (name) => {
    let slug = slugify(name);
    let count = 1;

    while (!(await isUniqueSlug(slug))) {
        slug = `${slugify(name)}-${count}`;
        count++;
    }

    return slug;
};

module.exports = { slugify, isUniqueSlug, generateUniqueSlug }