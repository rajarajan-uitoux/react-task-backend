const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Can't Be Empty"],
    },
    phoneNo: {
        type: Number,
        unique: [true, "Mobile Number already taken"],
        required: [true, "Can't Be Empty"]
    },
    email: {
        type: String,
        required: [true, "Can't Be Empty"]
    },
    totalProperty: {
        type: Number,
        required: [true, "Can't Be Empty"],
    },
    commercial: {
        type: Number,
        required: [true, "Can't Be Empty"],
    },
    Industrial: {
        type: Number,
        required: [true, "Can't Be Empty"],
    },
    Agricultural: {
        type: Number,
        required: [true, "Can't Be Empty"],
    },
    Residential: {
        type: Number,
        required: [true, "Can't Be Empty"],
    }
});

const customer = mongoose.model('customers', CustomerSchema);

module.exports = customer;