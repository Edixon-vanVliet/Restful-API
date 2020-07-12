const Customer = require("../models/Customers.model");

//Create
exports.addCustomer = async (req, res, next) => {
    const { firstName, lastName, email } = req.body;

    const customer = new Customer({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });

    try {
        const savedCustomer = await customer.save();
        res.status(201).json(savedCustomer);
    } catch (err) {
        res.status(403).json(err);
    }
};

//Read
exports.getCustomers = async (req, res, next) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Read one
exports.getCustomer = async (req, res, next) => {
    const { customerId } = req.params;

    try {
        const customer = await Customer.findById(customerId);
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Update
exports.updateCustomer = async (req, res, next) => {
    const { customerId } = req.params;
    const { email } = req.body;

    try {
        const updatedCustomer = await Customer.updateOne(
            { _id: customerId },
            { $set: { email: email } }
        );
        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(500).json(err);
    }
};

//Delete
exports.deleteCustomer = async (req, res, next) => {
    const { customerId } = req.params;

    try {
        const customer = await Customer.findByIdAndDelete(customerId);
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json(err);
    }
};
