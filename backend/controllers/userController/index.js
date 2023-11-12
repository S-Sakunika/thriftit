const create = require('./create');
const getUser = require('./read')

const userController = {
  create,
  getUser
};

module.exports = userController;
