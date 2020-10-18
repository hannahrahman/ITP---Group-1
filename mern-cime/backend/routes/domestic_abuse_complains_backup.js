
const express = require('express');
const domesticRoutes = express.Router();
let DomesticAbuseComplainBackup = require('../models/domestic_abuse_complain_backup.model')

domesticRoutes.route('/add').post(function (req, res) {
    let domesticAbuseComplainBackup = new DomesticAbuseComplainBackup(req.body);
    domesticAbuseComplainBackup.save()
        .then(domesticAbuseComplainBackup => {
            res.status(200).json({ 'domesticAbuseComplainBackup': 'Backup added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save backup to database");
        });
});

domesticRoutes.route('/').get(function (req, res) {
    DomesticAbuseComplainBackup.find(function (err, domesticAbuseComplainBackup) {
        if (err)
            console.log(err);
        else {
            res.json(domesticAbuseComplainBackup);
        }
    });
});

domesticRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    DomesticAbuseComplainBackup.findById(id, function (err, domesticAbuseComplainBackup) {
        res.json(domesticAbuseComplainBackup);
    });
});

domesticRoutes.route('/update/:id').post(function (req, res) {
    DomesticAbuseComplainBackup.findById(req.params.id, function (err, domesticAbuseComplainBackup) {
        if (!domesticAbuseComplainBackup)
            res.status(404).send("data is not found");
        else {
            domesticAbuseComplainBackup.refNo = req.body.refNo
            domesticAbuseComplainBackup.complainType = req.body.complainType
            domesticAbuseComplainBackup.fname =  req.body.fname
            domesticAbuseComplainBackup.lname = req.body.lname  
            domesticAbuseComplainBackup.nic = req.body.nic
            domesticAbuseComplainBackup.dateOfBirth = req.body.dateOfBirth
            domesticAbuseComplainBackup.religion = req.body.religion
            domesticAbuseComplainBackup.sex = req.body.sex   
            domesticAbuseComplainBackup.address = req.body.address
            domesticAbuseComplainBackup.phone = req.body.phone
            domesticAbuseComplainBackup.description = req.body.description
            domesticAbuseComplainBackup.weapon = req.body.weapon
            domesticAbuseComplainBackup.officer_incharge = req.body.officer_incharge
            domesticAbuseComplainBackup.relationType = req.body.relationType

            domesticAbuseComplainBackup.save().then(domesticAbuseComplainBackup => {
                res.json('Successfully Updated.');
            })
                .catch(err => {
                    res.status(400).send("Unable to update record.");
                });
        }
    });
});

domesticRoutes.route('/delete/:id').get(function (req, res) {
    DomesticAbuseComplainBackup.findByIdAndRemove({ _id: req.params.id }, function (err, domesticAbuseComplainBackup) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = domesticRoutes;



