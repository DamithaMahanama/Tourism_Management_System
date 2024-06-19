/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


OderAdd = new Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    email: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    days: {
        type: String
    },
    status: {
        type: String
    }
 },
  {
    collation: 'oderAdd'
});

module.exports = mongoose.model('OderAdd',OderAdd);