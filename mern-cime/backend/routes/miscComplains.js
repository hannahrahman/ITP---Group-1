const express = require('express');
const cmpRoutes = express.Router();
let miscComplain = require('../models/miscComplain.model')


cmpRoutes.route('/add').post(function (req, res) {
    let complain = new miscComplain(req.body);
    complain.save()
        .then(complain => {
            res.status(200).json({ 'complain': 'Complaint is added successfully' });
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

cmpRoutes.route('/').get(function (req, res) {
    miscComplain.find(function (err, complain) {
        if (err)
            console.log(err);
        else {
            res.json(complain);
        }
    });
});

cmpRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    miscComplain.findById(id, function (err, complain) {
        res.json(complain);
    });
});

cmpRoutes.route('/update/:id').post(function (req, res) {
    miscComplain.findById(req.params.id, function (err, complain) {
        if (!complain)
            res.status(404).send("data is not found");
        else {
            complain.refNo = req.body.refNo
            complain.fullname = req.body.fullname
            complain.phonenumber = req.body.phonenumber
            complain.nic = req.body.nic
            complain.date = req.body.date
            complain.description = req.body.description
            complain.dateofincident = req.body.dateofincident
            complain.personsinvolved = req.body.personsinvolved

            complain.save().then(complain => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("Unable to update database");
                });
        }
    });
});

cmpRoutes.route('/delete/:id').get(function (req, res) {
    miscComplain.findByIdAndRemove({ _id: req.params.id }, function (err, complain) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = cmpRoutes;
