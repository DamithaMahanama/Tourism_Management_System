const express = require('express');
const destinationRoutes = express.Router();

// Require the 'register.model' module and assign it to the variable 'Customer'
let Destination = require('./destination.model');



destinationRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let destination = new Destination(req.body);
     // Save the new customer to the database
     destination.save()
        .then(hotel => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'destination' : 'new hotel is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});




//get all details
// Define a route for getting all customers
destinationRoutes.route('/alloder/:id').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Destination.find(function(err, vehicle) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vehicle);
        }
    });
});




//get all details
// Define a route for getting all ayurvedas
destinationRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    Destination.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});






destinationRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Destination.findById(id, function (err,register){
        res.json(register);
    });
});


// Define a route for updating a customer with a given id
destinationRoutes.route('/update/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    Destination.findById(id, function (err, destination){
        if(!destination)
         // If no destination was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the destination's fields with the new data from the request body
            destination.title = req.body.title;
            destination.description = req.body.description;
            destination.detail = req.body.detail;
            destination.image = req.body.image;
         
           

             // Save the updated destination to the database
            destination.save().then(business => {
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
destinationRoutes.route('/delete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'Customer' model to delete a customer by ID
    Destination.findByIdAndRemove({_id:req.params.id}, function (err, guide){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the customer is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});






module.exports = destinationRoutes;
