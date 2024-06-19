/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Activity = new Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    contactNo: {
        type: String
    },
    email: {
        type: String
    }
    ,
    category: {
        type: String,
        
    }
    ,
    information: {
        type: String,
        
    }
 
 },
  {
    collation: 'activity'
});

module.exports = mongoose.model('Activity',Activity);