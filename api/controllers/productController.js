const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.list_all_products = (req, res) => {
    Product.find({}, (err, products) => {
        if(err) res.send(err);
        res.json(products);
    })
};

exports.create_a_product = (req, res) => {
    const newProduct = new Product(req.body);
    newProduct.save((err, product) => {
        if (err) res.send(err);
        res.json(product);
    })
}