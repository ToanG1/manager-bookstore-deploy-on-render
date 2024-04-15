const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const cartItemSchema = new mongoose.Schema({
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    cart_id: {
        type: Object
    },
    product_id: {
        type: Object
    }
});
// autoIncrement.initialize(mongoose.connection);

// cartItemSchema.plugin(autoIncrement.plugin, 'cartItem');

const CartItem = mongoose.model('CartItem', cartItemSchema, 'cartItem');

module.exports = {
    CartItem
}
