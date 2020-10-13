const express = require('express');
const complainRoutes = express.Router();
let Complain = require('../models/complain.model')
const pdf = require('html-pdf')
const pdfTemplate = require('../documents')
//const app = express()

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

/*complainRoutes.post('/pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    })
})*/
complainRoutes.get('/fpdf', (req, res) => {
    res.sendFile(`./${__dirname}/result.pdf`)
})
complainRoutes.route('/get').get(function (req, res) {
    Complain.find(function (err, complain) {
        if (err)
            console.log(err);
        else {
            res.json(complain)
            // res.sendFile(`${__dirname}/result.pdf`);
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
            complain.refNo = Number(req.body.refNo)
            complain.complainType = req.body.complainType
            complain.fname = req.body.fname
            complain.lname = req.body.lname
            complain.nic = Number(req.body.nic)
            complain.dateOfBirth = Date.parse(req.body.dateOfBirth)
            complain.religion = req.body.religion
            complain.sex = req.body.sex
            complain.address = req.body.address
            complain.phone = Number(req.body.phone)
            complain.description = req.body.description
            complain.weapon = req.body.weapon
            complain.date = Date.parse(req.body.date)
            complain.officer_incharge = req.body.officer_incharge

            complain.save().then(complain => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
            pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
                if (err) {
                    res.send(Promise.reject());
                }
                res.send(Promise.resolve());
            })
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