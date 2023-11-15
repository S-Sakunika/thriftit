const create = require('./create');
const { getProductsByVendor, getProductById } = require('./read');

const productController = {
  create,
  getProductsByVendor,
  getProductById
};

module.exports = productController;
