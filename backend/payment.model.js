/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Payment = new Schema({
    bName: {
        type: String
    },
    cNumber: {
        type: String
    },
    exMonth: {
        type: String
    },
    expYear: {
        type: String
    },
    cvv: {
        type: String
    }
 
 },
  {
    collation: 'payment'
});

module.exports = mongoose.model('Payment',Payment);