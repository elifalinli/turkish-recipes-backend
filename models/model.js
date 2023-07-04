const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the soup's name"],
        },
        ingredients: {
            type: Array,
            required: true,
            default: 0,
        },
        instructions: {
            type: String,
            required: true
        },
        hints: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Soup', productSchema);
const ProductMain = mongoose.model('Main', productSchema);

module.exports = Product;
module.exports = ProductMain