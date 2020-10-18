
const express = require('express');
const domesticRoutes = express.Router();
let DomesticAbuseComplain = require('../models/domestic_abuse_complain.model')

domesticRoutes.route('/add').post(function (req, res) {
    let domesticAbuseComplain = new DomesticAbuseComplain(req.body);
    domesticAbuseComplain.save()
        .then(domesticAbuseComplain => {
            res.status(200).json({ 'domesticAbuseComplain': 'Complain added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

domesticRoutes.route('/').get(function (req, res) {
    DomesticAbuseComplain.find(function (err, domesticAbuseComplain) {
        if (err)
            console.log(err);
        else {
            res.json(domesticAbuseComplain);
        }
    });
});

domesticRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    DomesticAbuseComplain.findById(id, function (err, domesticAbuseComplain) {
        res.json(domesticAbuseComplain);
    });
});

domesticRoutes.route('/update/:id').post(function (req, res) {
    DomesticAbuseComplain.findById(req.params.id, function (err, domesticAbuseComplain) {
        if (!domesticAbuseComplain)
            res.status(404).send("data is not found");
        else {
            domesticAbuseComplain.refNo = req.body.refNo
            domesticAbuseComplain.complainType = req.body.complainType
            domesticAbuseComplain.fname =  req.body.fname
            domesticAbuseComplain.lname = req.body.lname  
            domesticAbuseComplain.nic = req.body.nic
            domesticAbuseComplain.dateOfBirth = req.body.dateOfBirth
            domesticAbuseComplain.religion = req.body.religion
            domesticAbuseComplain.sex = req.body.sex   
            domesticAbuseComplain.address = req.body.address
            domesticAbuseComplain.phone = req.body.phone
            domesticAbuseComplain.description = req.body.description
            domesticAbuseComplain.weapon = req.body.weapon
            domesticAbuseComplain.officer_incharge = req.body.officer_incharge
            domesticAbuseComplain.relationType = req.body.relationType

            domesticAbuseComplain.save().then(domesticAbuseComplain => {
                res.json('Successfully Updated.');
            })
                .catch(err => {
                    res.status(400).send("Unable to update record.");
                });
        }
    });
});

domesticRoutes.route('/delete/:id').get(function (req, res) {
    DomesticAbuseComplain.findByIdAndRemove({ _id: req.params.id }, function (err, domesticAbuseComplain) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = domesticRoutes;



