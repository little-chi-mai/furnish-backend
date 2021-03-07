const mongoose = require('mongoose');

// const {Schema} = mongoose;

// {name: 'Chairy',
// description: 'Provide extreme comfort',
// price: 45,
// color: 'white',
// style: 'modern',
// category: 'living room',
// quantity: 100,
// image: 'https://www.jamessaid.com.au/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/1/111753_0.jpg'
// }
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Name cannot be blank'
        },
        desciption: {
            type: String
        },
        price: {
            type: Number,
            required: 'Price cannot be blank'
        },
        color: {
            type: String,
        },
        style: {
            type: String,
        },
        category: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        image: {
            type: String,
        }
    },
    {collection: 'product'}
);

module.exports = mongoose.model('Product', ProductSchema);

