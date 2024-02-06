const Product = require('../models/Product');

// Controller for creating a product
exports.createProduct = async (req, res) => {
    try {
        const data = new Product(req.body);
        const result = await data.save();
        console.log(result);
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Controller for listing all products
exports.listProducts = async (req, res) => {
    try {
        const data = await Product.find();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller for deleting a product by ID
exports.deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await Product.deleteOne({ _id });
        res.send("Data Deleted");
    } catch (error) {
        res.status(500).send(error);
    }
};

// Controller for updating a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const data = await Product.updateOne({ _id }, { $set: req.body });
        res.send("Data Updated");
    } catch (error) {
        res.status(500).send(error);
    }
};
