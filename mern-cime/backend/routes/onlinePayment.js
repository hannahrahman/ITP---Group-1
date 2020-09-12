

const express = require('express');
const onlineRoutes = express.Router();
let OnlinePayment = require('../models/onlinePayment')

onlineRoutes.route('/add').post(function (req, res) {
    let onlinepayment = new OnlinePayment(req.body);
    onlinepayment.save()
        .then(onlinepayment => {
            res.status(200).json({ 'onlinepayment': 'onlinepayment is added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

onlineRoutes.route('/').get(function (req, res) {
    OnlinePayment.find(function (err, onlinepayment) {
        if (err)
            console.log(err);
        else {
            res.json(onlinepayment);
        }
    });
});

onlineRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    OnlinePayment.findById(id, function (err, onlinepayment) {
        res.json(onlinepayment);
    });
});

onlineRoutes.route('/update/:id').post(function (req, res) {
    OnlinePayment.findById(req.params.id, function (err, onlinepayment) {
        if (!onlinepayment)
            res.status(404).send("data is not found");
        else {
            onlinePayment.name = req.body.name
            onlinePayment.password = req.body.password
            onlinePayment.fullName = req.body.fullName
            onlinePayment.address = req.body.address
            onlinePayment.mobileNum = Number(req.body.mobileNum)
            onlinePayment.emailId = req.body.emailId
            onlinePayment.fineType = req.body.fineType
            onlinePayment.incidentArea = req.body.incidentArea
            onlinePayment.policeStation = req.body.policeStation
            onlinePayment.fineRefslpNo = req.body.fineRefslpNo
            onlinePayment.policeOfficerNo = req.body.policeOfficerNo
            onlinePayment.amountOFfine = req.body.amountOFfine
            onlinePayment.issueDate = Date.parse(req.body.issueDate)

            onlinepayment.save().then(onlinepayment => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});

onlineRoutes.route('/delete/:id').get(function (req, res) {
    OnlinePayment.findByIdAndRemove({ _id: req.params.id }, function (err, onlinepayment) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = onlineRoutes;
























/* express = require('express');
const onlinePaymentRoutes = express.Router();
let OnlinePayment = require('../models/onlinePayment')


onlinePaymentRoutes.route('/add').post(function (req, res) {
    let onlinePayment = new OnlinePayment(req.body);
    onlinePayment.save()
        .then(onlinePayment => {
            res.status(200).json({ 'onlinePayment': 'onlinePayment is added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

onlinePaymentRoutes.route('/').get(function (req, res) {
    OnlinePayment.find(function (err, onlinePayment) {
        if (err)
            console.log(err);
        else {
            res.json(onlinePayment);
        }
    });
});

onlinePaymentRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    OnlinePayment.findById(id, function (err, onlinePayment) {
        res.json(onlinePayment);
    });
});

onlinePaymentRoutes.route('/update/:id').post(function (req, res) {
    OnlinePayment.findById(req.params.id, function (err, onlinePayment) {
        if (!onlinePayment)
            res.status(404).send("data is not found");
        else {
            onlinePayment.name = req.body.name;
            onlinePayment.password = req.body.password
            onlinePayment.fullName = req.body.fullName
            onlinePayment.address = req.body.address
            onlinePayment.mobileNum = Number(req.body.mobileNum)
            onlinePayment.emailId = req.body.emailId
            onlinePayment.fineType = req.body.fineType
            onlinePayment.incidentArea = req.body.incidentArea
            onlinePayment.policeStation = req.body.policeStation
            onlinePayment.fineRefslpNo = req.body.fineRefslpNo
            onlinePayment.policeOfficerNo = req.body.policeOfficerNo
            onlinePayment.amountOFfine = req.body.amountOFfine
            onlinePayment.issueDate = Date.parse(req.body.issueDate)

            onlinePayment.save().then(onlinePayment => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});

onlinePaymentRoutes.route('/delete/:id').get(function (req, res) {
    OnlinePayment.findByIdAndRemove({ _id: req.params.id }, function (err, onlinePayment) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = onlinePaymentRoutes;

*/