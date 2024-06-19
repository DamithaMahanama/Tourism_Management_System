/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


GuideOder = new Schema({
    OName: {
        type: String
    },
    nic: {
        type: String
    },
    email: {
        type: String
    },
    guide: {
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
    collation: 'guideOder'
});

module.exports = mongoose.model('GuideOder',GuideOder);