const express = require('express');
const guideRoutes = express.Router();

// Require the 'register.model' module and assign it to the variable 'Customer'
let Guide = require('./guide.reg.model');
let OderGuide = require('./OderGuide');
// Define a route for adding a new customer
guideRoutes.route('/guideAdd').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let guide = new Guide(req.body);
     // Save the new customer to the database
     guide.save()
        .then(guide => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'guide' : 'new guide is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});




guideRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Guide.find(function(err, registers) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});
// ******************************************************************************************

guideRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let oderGuide = new OderGuide(req.body);
     // Save the new customer to the database
     oderGuide.save()
        .then(hotel => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'hotel' : 'new hotel is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});








//get all details
// Define a route for getting all customers
guideRoutes.route('/alloder/:id').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    OderGuide.find(function(err, vehicle) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vehicle);
        }
    });
});



guideRoutes.route('/oderdelete/:id').get(function(req,res){
    OderGuide.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});



//get all details
// Define a route for getting all ayurvedas
guideRoutes.route('/ggetall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    OderGuide.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});





guideRoutes.route('/gedit/:id').get(function (req,res){
    let id = req.params.id;
    OderGuide.findById(id, function (err,register){
        res.json(register);
    });
});





guideRoutes.route('/oderupdate/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    OderGuide.findById(id, function (err, oderGuide){
        if(!oderGuide)
         // If no guide was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the guide's fields with the new data from the request body
            oderGuide.OName = req.body.OName;
            oderGuide.nic = req.body.nic;
            oderGuide.email = req.body.email;
            oderGuide.guide = req.body.guide;
            oderGuide.price = req.body.price;
            oderGuide.Qty = req.body.Qty;
            oderGuide.status = req.body.status;


       // Save the updated oderGuide to the database
            oderGuide.save().then(business => {
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








// *********************************************************************************************



guideRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Guide.findById(id, function (err,register){
        res.json(register);
    });
});
// Define a route for updating a customer with a given id
guideRoutes.route('/Update/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    Guide.findById(id, function (err, guide){
        if(!guide)
         // If no guide was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the guide's fields with the new data from the request body
            guide.firstName = req.body.firstName;
            guide.lastName = req.body.lastName;
            guide.age = req.body.age;
            guide.phoneNu = req.body.phoneNu;
            guide.gender = req.body.gender;
            guide.Licence = req.body.Licence;
            guide.Education = req.body.Education;
            guide.sinhala = req.body.sinhala;
            guide.English = req.body.English;
            guide.Korean = req.body.Korean;
           

             // Save the updated guide to the database
            guide.save().then(business => {
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
guideRoutes.route('/delete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'Customer' model to delete a customer by ID
    Guide.findByIdAndRemove({_id:req.params.id}, function (err, guide){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the customer is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});






module.exports = guideRoutes;