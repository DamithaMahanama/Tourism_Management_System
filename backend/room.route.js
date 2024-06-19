const express = require('express');
const roomRoutes = express.Router();

// Require the 'register.model' module and assign it to the variable 'Customer'
let Room = require('./room.model');
let OderRoom = require('./OderRoom');
// Define a route for adding a new customer
roomRoutes.route('/Add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let room = new Room(req.body);
     // Save the new customer to the database
     room.save()
        .then(room => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'room' : 'new room is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});
// *****************************************************************************************



roomRoutes.route('/rAdd').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let oderRoom = new OderRoom(req.body);
     // Save the new customer to the database
     oderRoom.save()
        .then(oderRoom => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'oderRoom' : 'new oderRoom is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});


//get all details
// Define a route for getting all customers
roomRoutes.route('/alloder/:id').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    OderRoom.find(function(err, vehicle) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vehicle);
        }
    });
});



roomRoutes.route('/oderdelete/:id').get(function(req,res){
    OderRoom.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});



//get all details
// Define a route for getting all ayurvedas
roomRoutes.route('/rgetall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    OderRoom.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});





roomRoutes.route('/redit/:id').get(function (req,res){
    let id = req.params.id;
    OderRoom.findById(id, function (err,register){
        res.json(register);
    });
});





roomRoutes.route('/oderupdate/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    OderRoom.findById(id, function (err, oderRoom){
        if(!oderRoom)
         // If no guide was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the guide's fields with the new data from the request body
            oderRoom.OName = req.body.OName;
            oderRoom.nic = req.body.nic;
            oderRoom.email = req.body.email;
            oderRoom.room = req.body.room;
            oderRoom.price = req.body.price;
            oderRoom.Qty = req.body.Qty;
            oderRoom.status = req.body.status;


       // Save the updated oderRoom to the database
            oderRoom.save().then(business => {
                // If the customer was updated successfully, return a success message
                res.json('Update Complete');
            })
                .catch(err =>{
                    // If there was an error updating the customer, return an error message
                    res.status(400).send("Unable to update data");
                });
        }
    });
});










// ********************************************************************************************

//get all details
// Define a route for getting all customers
roomRoutes.route('/getAll').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Room.find(function(err, room) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(room);
        }
    });
});





roomRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Room.findById(id, function (err,register){
        res.json(register);
    });
});
// Define a route for updating a customer with a given id
roomRoutes.route('/update/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    Room.findById(id, function (err, room){
        if(!room)
         // If no guide was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the guide's fields with the new data from the request body
            room.rId = req.body.rId;
            room.rType = req.body.rType;
            room.bType = req.body.bType;
            room.pnumber = req.body.pnumber;
            room.email = req.body.email;
       // Save the updated room to the database
            room.save().then(business => {
                // If the customer was updated successfully, return a success message
                res.json('Update Complete');
            })
                .catch(err =>{
                    // If there was an error updating the customer, return an error message
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

// Define a DELETE route at '/delete/:id'
roomRoutes.route('/delete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'Customer' model to delete a customer by ID
    Room.findByIdAndRemove({_id:req.params.id}, function (err, guide){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the customer is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});


roomRoutes.route('/mysearchorders/:pathParam1?/:pathParam2?').get(function (req, res){
    let search = req.params.pathParam1;
    let email = req.params.pathParam2;
    console.log("your search is "+search);
    console.log("your search is "+email);
    // Orders.find({$and:[{date : search},{email : email}]},function (err,srch){
        Room.find({$and:[{$or: [{rId: search}, {rType: search},{bType: search}]},{email: email}]},function (err,srch){ 
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });

});






module.exports = roomRoutes;