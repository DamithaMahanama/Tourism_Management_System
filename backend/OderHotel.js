/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


HotelOder = new Schema({
    OName: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    hotel: {
        type: String
    },
    price: {
        type: String
    },
    Qty: {
        type: String
    },
    status: {
        type: String
    }
 },
  {
    collation: 'hotelOder'
});

module.exports = mongoose.model('HotelOder',HotelOder);