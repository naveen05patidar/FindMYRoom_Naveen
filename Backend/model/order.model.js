const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
    userId: String,
    orderId: String,
    category: String,
    price: Number,
    member: Number,
    foodPriority: String,
    freedom: String,
    mainCharge: Number,
    ocupation: String,
    merital: String,
    files: Array,
    description: String,
    date: String,
    parkingArea: String,
    address: {
        street: String,
        area: String,
        zipCode: String,
        landmark: String,
        country: String,
        mobile: String,
        altMobile: String
    }

})

module.exports = mongoose.model('Order', Order);