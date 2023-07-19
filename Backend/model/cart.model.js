const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Cart = new Schema({
    userId:{
        type:String
    },
    orderId:{
        type:String
    }
})

module.exports = mongoose.model('Carts',Cart);