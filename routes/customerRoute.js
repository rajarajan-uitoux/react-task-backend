const Router = require('express').Router();

const { getCustomerDetails } = require('../controllers/customerController');

Router.route('/customer-details/:id').get(getCustomerDetails);

module.exports = Router;