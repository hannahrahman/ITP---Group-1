const express = require('express');
const { count } = require('../models/complain.model');
const complainRoutes = express.Router();
let Complain = require('../models/complain.model')

complainRoutes.route('/add').post(function (req, res) {
    let complain = new Complain(req.body);
    complain.save()
        .then(complain => {
            res.status(200).json({ 'complain': 'complain is added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


complainRoutes.route('/').get(function (req, res) {
    Complain.find(function (err, complain) {
        if (err)
            console.log(err);
        else {
            res.json(complain)

        }
    });
});

complainRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Complain.findById(id, function (err, complain) {
        res.json(complain)

    });
});

complainRoutes.route('/update/:id').post(function (req, res) {
    Complain.findById(req.params.id, function (err, complain) {
        if (!complain)
            res.status(404).send("data is not found");
        else {

            complain.refNo = req.body.refNo
            complain.complainType = req.body.complainType
            complain.fname = req.body.fname
            complain.lname = req.body.lname
            complain.nic = req.body.nic
            complain.dateOfBirth = req.body.dateOfBirth
            complain.religion = req.body.religion
            complain.sex = req.body.sex
            complain.address = req.body.address
            complain.phone = req.body.phone
            complain.description = req.body.description
            complain.weapon = req.body.weapon
            complain.date = req.body.date
            complain.officer_incharge = req.body.officer_incharge

            complain.save().then(complain => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});

complainRoutes.route('/delete/:id').get(function (req, res) {
    Complain.findByIdAndRemove({ _id: req.params.id }, function (err, complain) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = complainRoutes;