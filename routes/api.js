const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const carModel = require('../models/carModels');
const COMMON = require('../bin/COMMON');
const bodyParser = require('body-parser');

// Middleware for parsing JSON and URL-encoded data
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Test route to check API
router.get('/', (req, res) => {
    res.send('vao api mobile - md19304');
});

// Fetch all cars
router.get('/list', async (req, res) => {
    await mongoose.connect(COMMON.uri);
    let cars = await carModel.find();
    console.log(cars);
    res.send(cars);
});

// Add a new car
router.post('/add_xe', async (req, res) => {
    await mongoose.connect(COMMON.uri);
    let car = req.body;
    console.log(car);
    let kq = await carModel.create(car);
    console.log(kq);

    let cars = await carModel.find(); // Fetch the updated list of cars
    res.send(cars);
});

// Delete a car by ID
router.delete('/xoa_xe/:id', async (req, res) => {
    await mongoose.connect(COMMON.uri);
    let id = req.params.id;
    console.log(id);
    await carModel.deleteOne({ _id: id });

    let cars = await carModel.find(); // Fetch the updated list of cars
    res.send(cars);
});

// Update a car's details
router.put('/update_xe', async (req, res) => {
    await mongoose.connect(COMMON.uri);
    let car = req.body;
    console.log(car);

    // Assuming `car._id` is used to identify the car for updating
    await carModel.updateOne({ _id: car._id }, car);

    let cars = await carModel.find(); // Fetch the updated list of cars
    res.send(cars);
});

module.exports = router;
