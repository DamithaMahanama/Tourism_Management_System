/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


ActivityOder = new Schema({
  
    email: {
        type: String
    },
    activity: {
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
    collation: 'activityOder'
});

module.exports = mongoose.model('ActivityOder',ActivityOder);