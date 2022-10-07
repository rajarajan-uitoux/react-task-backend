const mongoose = require('mongoose');

const CustomerPropertySchema = new mongoose.Schema({
    customerId: String,
    serveyNumber: String,
    type: String,
    plotNo: String,
    area: String,
    corners: String,
    date: Date
});

const CustomersProperty = mongoose.model('customersProperties', CustomerPropertySchema);

module.exports = CustomersProperty;