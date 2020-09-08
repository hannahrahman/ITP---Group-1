const router = require('express').Router()
let Complain = require('../models/complain.model')

router.route('/').get((req, res) => {
    Complain.find()
        .then(complains => res.json(complains))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post((req, res) => {
    const refNo = req.body.refNo
    const complainType = req.body.complainType
    const fname = req.body.fname
    const lname = req.body.lname
    const nic = Number(req.body.nic)
    const dateOfBirth = Date.parse(req.body.dateOfBirth)
    const religion = req.body.religion
    const sex = req.body.sex
    const address = req.body.address
    const phone = Number(req.body.phone)
    const description = req.body.description
    const weapon = req.body.weapon
    const date = Date.parse(req.body.date)
    const officer_incharge = req.body.officer_incharge

    const newComplain = new Complain({
        refNo,
        complainType,
        fname,
        lname,
        nic,
        dateOfBirth,
        religion,
        sex,
        address,
        phone,
        description,
        weapon,
        date,
        officer_incharge,
    })

    newComplain.save()
        .then(() => res.json('Complain added!'))
        .catch(err => res.status(400).json('Error :' + err))
})

router.route('/:id').get((req, res) => {
    Complain.findById(req.params.id)
        .then(complain => res.json(complain))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    Complain.findByIdAndDelete(req.params.id)
        .then(() => res.json('complain deleted..'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/update/:id').post((req, res) => {
    Complain.findById(req.params.id)
        .then(complain => {
            complain.refNo = req.body.refNo
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

            complain.save()
                .then(() => res.json('Complain updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;