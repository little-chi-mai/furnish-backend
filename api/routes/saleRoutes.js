const saleController = require('../controllers/saleController');

module.exports = (app) => {
    app.route('/checkout-session/:productId', saleController.getCheckoutSession)
}