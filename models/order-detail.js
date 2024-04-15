const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');

const orderDetailSchema = new mongoose.Schema({
    order_id: {
        type: Object
    },
    product_id: {
        type: Object
    },
    quantity: {
        type: Number
    }
});
autoIncrement.initialize(mongoose.connection);

orderDetailSchema.plugin(autoIncrement.plugin, 'orderDetail');

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema, 'orderDetail');

module.exports = {
    OrderDetail
}
