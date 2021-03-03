const mongoose = require('mongoose');

const {Schema} = mongoose;

// {userId: ObjectId, productId: ObjectId}

const SaleSchema = new Schema(
    {
        product: {
            type: Schema.ObjectId,
            ref: 'Product',
            required: [true, 'Sale must belong to a Product!']
        }
    },
    {collection: 'sale'}
)

SaleSchema.pre(/^find/, function(next) {
    this.populate('product');
    next();
})

module.exports = mongoose.model('Sale', SaleSchema);