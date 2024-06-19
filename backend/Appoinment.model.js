/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Appointment = new Schema({
    aID: {
        type: String
    },
    Name: {
        type: String
    },
    Treatement: {
        type: String
    }
 
 },
  {
    collation: 'appointment'
});

module.exports = mongoose.model('Appointment',Appointment);