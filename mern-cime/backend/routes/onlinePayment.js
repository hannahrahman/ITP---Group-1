const express = require('express');
const onlinePaymentRoutes = express.Router();
let OnlinePayment = require('../models/onlinePayment.model')


onlinePaymentRoutes.route('/add').post(function (req, res) {
    let onlinepayment = new OnlinePayment(req.body);
    onlinepayment.save()
        .then(onlinepayment => {
            res.status(200).json({ 'onlinepayment': 'onlinepayment is added successfully' });
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

            onlinePayment.save().then(onlinePayment => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("Unable to update database");
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

/*const router = require('express').Router();
let Complain = require('../models/complain.model')

router.route('/').get((req, res) => {
    Complain.find()
        .then(complains => res.json(complains))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post(req, res) {
    let complain = new Complain(req.body);
    Complain.save()
        .then(complain => {
            res.status(200).json({ 'complain': 'Complaint is added successfully' });
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});



complainsRouter.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Complain.findById(id, function (err, complain) {
        res.json(complain);
    });
});

complainsRouter.route('/update/:id').post(function (req, res) {
    Complain.findById(req.params.id, function (err, complain) {
        if (!complain)
            res.status(404).send("Data is not found");
        else {
            complain.refNo = req.body.refNo
            complain.fullname = req.body.fullname
            complain.phonenumber = Number(req.body.phonenumber)
            complain.nic = req.body.nic
            complain.date = Date.parse(req.body.date)
            complain.description = req.body.description
            complain.dateofincident = Date.parse(req.body.dateofincident)
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

complainsRouter.route('/delete/:id').get(function (req, res) {
    Complain.findByIdAndRemove({ _id: req.params.id }, function (err, complain) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = complainsRouter;*/






















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