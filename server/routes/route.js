const routes = require('express').Router();
const controller = require('../controllers/controller.js')

routes.route('/api/categories')
  .get(controller.createCategories);

module.exports = routes;