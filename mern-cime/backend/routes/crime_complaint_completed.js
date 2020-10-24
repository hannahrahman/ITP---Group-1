const express = require('express');
const { count } = require('../models/complain.model');
const CompletecomplainRoutes = express.Router();
let CompleteComplain = require('../models/crime_complaint_completed.model')

CompletecomplainRoutes.route('/add').post(function (req, res) {
    let completeComplain = new CompleteComplain(req.body);
    completeComplain.save()
        .then(completeComplain => {
            res.status(200).json({ 'complain': 'complain is added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


CompletecomplainRoutes.route('/').get(function (req, res) {
    CompleteComplain.find(function (err, completeComplain) {
        if (err)
            console.log(err);
        else {
            res.json(completeComplain)

        }
    });
});

CompletecomplainRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    CompleteComplain.findById(id, function (err, completeComplain) {
        res.json(completeComplain)
    });
});

CompletecomplainRoutes.route('/update/:id').post(function (req, res) {
    CompleteComplain.findById(req.params.id, function (err, completeComplain) {
        if (!completeComplain)
            res.status(404).send("data is not found");
        else {

            completeComplain.refNo = req.body.refNo
            completeComplain.complainType = req.body.complainType
            completeComplain.fname = req.body.fname
            completeComplain.lname = req.body.lname
            completeComplain.nic = req.body.nic
            completeComplain.dateOfBirth = req.body.dateOfBirth
            completeComplain.religion = req.body.religion
            completeComplain.sex = req.body.sex
            completeComplain.address = req.body.address
            completeComplain.phone = req.body.phone
            completeComplain.description = req.body.description
            completeComplain.weapon = req.body.weapon
            completeComplain.date = req.body.date
            completeComplain.officer_incharge = req.body.officer_incharge

            completeComplain.save().then(completeComplain => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});

CompletecomplainRoutes.route('/delete/:id').get(function (req, res) {
    CompleteComplain.findByIdAndRemove({ _id: req.params.id }, function (err, completeComplain) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

CompletecomplainRoutes.route('/refNo/:refNo').get(function (req, res) {
    //let refNo1 = req.params.refNo;
    CompleteComplain.find({ refNo: req.params.refNo }, function (err, completeComplain) {
        if (err)
            console.log(err);
        else {
            res.json(completeComplain)
        }

    });
});

CompletecomplainRoutes.route('/create-pdf').post(function (req, res) {
    pdf.create(pdfTemplate(req.body), {}).toFile(`slpc-report-${req.body.refNo}.pdf`, (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

CompletecomplainRoutes.route('/fetch-pdf').get(function (req, res) {
    res.sendFile(`${__dirname}/slpc-report-${req.body.refNo}.pdf`)
});
module.exports = CompletecomplainRoutes;