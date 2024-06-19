/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


RoomOder = new Schema({
    OName: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    room: {
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
    collation: 'roomOder'
});

module.exports = mongoose.model('RoomOder',RoomOder);