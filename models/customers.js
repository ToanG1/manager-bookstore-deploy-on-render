const mongoose = require('mongoose');

// const autoIncrement = require('mongoose-auto-increment');

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    customerPhone: {
        type: String
    },
    shippingAddressId: {
        type: Object
    },
    billingAddressId:{
        type: Object
    },
    userEmailId: {
        type: Object
    },
    cartId:{
        type: Object
    }
});
// autoIncrement.initialize(mongoose.connection);

// customerSchema.plugin(autoIncrement.plugin, 'customers');
const Customers = mongoose.model('Customers',customerSchema,'customers');

module.exports = {
    Customers
}
