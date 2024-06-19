const express = require('express');
const registerRoutes = express.Router();

// Require the 'register.model' module and assign it to the variable 'Customer'
let Customer = require('./register.model');
let OderAdvatisment = require('./OderAdvatisment');
// Define a route for adding a new customer
registerRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let customer = new Customer(req.body);
     // Save the new customer to the database
    customer.save()
        .then(customer => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'customer' : 'new Customer is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});

//get all details
// Define a route for getting all customers
// registerRoutes.route('/getall/:id').get(function(req, res) {
//     // Find all documents in the 'Customer' collection
//     Customer.find(function(err, registers) {
//         if (err) {
//             // If there was an error finding customers, log the error to the console
//             console.log(err);
//             // If customers were found successfully, return them as a JSON response
//         } else {
//             res.json(registers);
//         }
//     });
// });


registerRoutes.route('/:id').get(function (req, res){
    let email = req.params.id;
    console.log(email);
    Customer.findOne({$and:[{email : email}]},function (err,cus){
        if(err)
            console.log(err);
        else{
            res.json(cus)
        }
    });

});



registerRoutes.route('/getall/:id').get(function(req, res) {
    // Find the document with the matching email in the 'Customer' collection
    Customer.findOne({ email: req.params.email }, function(err, register) {
        if (err) {
            // If there was an error finding the customer, log the error to the console
            console.log(err);
            // If the customer was found successfully, return them as a JSON response
        } else {
            res.json(register);
        }
    });
});

// // Get all customers
// registerRoutes.get('/getallcus', async (req, res) => {
//     try {
//       const customers = await Customer.find();
//       res.json(customers);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });






registerRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Customer.findById(id, function (err,register){
        res.json(register);
    });
});
// Define a route for updating a customer with a given id
registerRoutes.route('/update/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    Customer.findById(id, function (err, customer){
        if(!customer)
         // If no customer was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the customer's fields with the new data from the request body
            customer.firstName = req.body.firstName;
            customer.lastName = req.body.lastName;
            customer.email = req.body.email;
            customer.countryCode = req.body.countryCode;
            customer.phoneNu = req.body.phoneNu;
            customer.nic = req.body.nic;
            customer.address = req.body.address;
            customer.nationality = req.body.nationality;
            customer.country = req.body.country;
            customer.password = req.body.password;
            customer.cpassword = req.body.cpassword;

             // Save the updated customer to the database
            customer.save().then(business => {
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
registerRoutes.route('/delete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'Customer' model to delete a customer by ID
    Customer.findByIdAndRemove({_id:req.params.id}, function (err, customer){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the customer is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});

// ****************************************************************************************
registerRoutes.route('/aadd').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let oderAdvatisment = new OderAdvatisment(req.body);
     // Save the new customer to the database
    oderAdvatisment.save()
        .then(oderAdvatisment => {
            // If the oderAdvatisment was saved successfully, return a success message
            res.status(200).json({'oderAdvatisment' : 'new oderAdvatisment is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});


registerRoutes.route('/aedit/:id').get(function (req,res){
    let id = req.params.id;
    OderAdvatisment.findById(id, function (err,register){
        res.json(register);
    });
});


// Define a route for updating a customer with a given id
registerRoutes.route('/aupdate/:id').post(function (req,res){
    // Get the id parameter from the request URL
    let id = req.params.id;
    // Find the customer with the given id in the database
    OderAdvatisment.findById(id, function (err, oderAdvatisment){
        if(!oderAdvatisment)
         // If no oderAdvatisment was found with the given id, return a 404 error
            res.status(404).send("Data is not found??");
        else{
             // Update the oderAdvatisment's fields with the new data from the request body
            oderAdvatisment.title = req.body.title;
            oderAdvatisment.category = req.body.category;
            oderAdvatisment.email = req.body.email;
            oderAdvatisment.description = req.body.description;
            oderAdvatisment.price = req.body.price;
            oderAdvatisment.days = req.body.days;
            oderAdvatisment.status = req.body.status;
           

             // Save the updated oderAdvatisment to the database
            oderAdvatisment.save().then(business => {
                // If the oderAdvatisment was updated successfully, return a success message
                res.json('Update Complete');
            })
                .catch(err =>{
                    // If there was an error updating the oderAdvatisment, return an error message
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


// Define a DELETE route at '/delete/:id'
registerRoutes.route('/adelete/:id').get(function(req,res){
    // Use the 'findByIdAndRemove' method of the 'Customer' model to delete a customer by ID
    OderAdvatisment.findByIdAndRemove({_id:req.params.id}, function (err, customer){
         // If there is an error, respond with the error message in JSON format
        if(err)res.json(err);
        // If the customer is successfully deleted, respond with a success message in JSON format
        else res.json('Successfully Removed');
    });
});




//get all details
// Define a route for getting all ayurvedas
registerRoutes.route('/agetall').get(function(req, res) {
    // Find all documents in the 'ayurveda' collection
    OderAdvatisment.find(function(err, registers) {
        if (err) {
            // If there was an error finding ayurvedas, log the error to the console
            console.log(err);
            // If ayurvedas were found successfully, return them as a JSON response
        } else {
            res.json(registers);
        }
    });
});


//get all details
// Define a route for getting all customers
registerRoutes.route('/aalloder/:id').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    OderAdvatisment.find(function(err, vehicle) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vehicle);
        }
    });
});








// ***********************************************************************************************



registerRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let customer = new Customer(req.body);

    Customer.findOne({$and:[{email : email},{password : password}]})
        .then(hotel => {
            if(hotel){
                hotel.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});





module.exports = registerRoutes;