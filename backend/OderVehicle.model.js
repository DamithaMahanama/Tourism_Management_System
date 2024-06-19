/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


VehicleOder = new Schema({
    OName: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    vehicle: {
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
    collation: 'vehicleOder'
});

module.exports = mongoose.model('VehicleOder',VehicleOder);