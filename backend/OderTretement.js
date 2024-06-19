/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


TreatementOder = new Schema({
    OName: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    tretement: {
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
    collation: 'treatementOder'
});

module.exports = mongoose.model('TreatementOder',TreatementOder);