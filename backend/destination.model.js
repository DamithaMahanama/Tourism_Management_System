/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Destination = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    detail: {
        type: String
    },
    image: {
        type: String
    }
 
 },
  {
    collation: 'destination'
});

module.exports = mongoose.model('Destination',Destination);