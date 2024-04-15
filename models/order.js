const mongoose = require('mongoose');

// const autoIncrement = require('mongoose-auto-increment');

const orderSchema = new mongoose.Schema({
    customer_id: {
        type: Object
    },
    shippingAddress_id: {
        type: Object
    },
    totalPrice: {
        type: Number
    },
    status: {
        type: String
    }
});

// autoIncrement.initialize(mongoose.connection);

// orderSchema.plugin(autoIncrement.plugin, 'salesOrder');

const Order = mongoose.model('Order', orderSchema, 'salesOrder');

module.exports = {
    Order
}
