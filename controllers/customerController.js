const Customer = require("../models/Customer");
const CustomersProperty = require("../models/CustomerProperty");

exports.getCustomerDetails = async (req, res) => {
    try {
       
        const customer = await Customer.findById(req.params.id);
        
        const customersProperty = await CustomersProperty.find({ customerId : customer._id.toString()});

        res.status(201).json({
            customer,
            customersProperty
        });
    } catch (err) {
        return res.status(400).json(err);
    }
}
