const routes = require('express').Router();
const controller = require('../controllers/controller.js')

routes.route('/api/categories')
  .post(controller.createCategories)
  .get(controller.getCategories)

routes.route('/api/transaction')
  .post(controller.createTransaction)
  .get(controller.getTransaction)
  .delete(controller.deleteTransaction)

module.exports = routes;