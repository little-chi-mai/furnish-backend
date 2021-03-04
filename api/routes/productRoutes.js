const productBuilder = require('../controllers/productController');

module.exports = (app) => {
    app.route('/products')
        .get(productBuilder.list_all_products)
        .post(productBuilder.create_a_product)
}

