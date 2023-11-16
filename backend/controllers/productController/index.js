const create = require('./create');
const update = require('./update');
const remove = require('./remove');
const { getProductsByVendor, getProductsByCategory, getProductById, getProductBySlug } = require('./read');

const productController = {
  create,
  update,
  getProductsByVendor,
  getProductsByCategory,
  getProductById,
  getProductBySlug,
  remove
};

module.exports = productController;
