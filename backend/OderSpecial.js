/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


SpecialOder = new Schema({
    Hotel: {
        type: String
    },
    vehicle: {
        type: String
    },
    room: {
        type: String
    },
    treatement: {
        type: String
    },
    Qty: {
        type: String
    },
    status: {
        type: String
    },
    price: {
        type: String
    },
    email: {
        type: String
    }
 },
  {
    collation: 'specialOder'
});

module.exports = mongoose.model('SpecialOder',SpecialOder);