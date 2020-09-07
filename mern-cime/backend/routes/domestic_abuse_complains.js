const router = require('express').Router()
let DomesticAbuseComplain = require('../models/domestic_abuse_complain.model')

router.route('/').get((req, res) => {
    DomesticAbuseComplain.find()
        .then(domestic_abuse_complains => res.json(domestic_abuse_complains))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post((req, res) => {
    const refNo = req.body.refNo
    const complainType = req.body.complainType
    const fname = req.body.fname
    const lname = req.body.lname
    const nic = req.body.nic
    const dateOfBirth = req.body.dateOfBirth
    const religion = req.body.religion
    const sex = req.body.sex
    const address = req.body.address
    const phone = req.body.phone
    const description = req.body.description
    const weapon = req.body.weapon
    const date = Date.parse(req.body.date)
    const officer_incharge = req.body.officer_incharge

    const newComplain = new DomesticAbuseComplain({
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
    DomesticAbuseComplain.findById(req.params.id)
        .then(domestic_abuse_complain => res.json(domestic_abuse_complain))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    DomesticAbuseComplain.findByIdAndDelete(req.params.id)
        .then(() => res.json('complain deleted..'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').post((req, res) => {
    DomesticAbuseComplain.findById(req.params.id)
        .then(domestic_abuse_complain => {
            domestic_abuse_complain.refNo = req.body.refNo
            domestic_abuse_complain.complainType = req.body.complainType
            domestic_abuse_complain.fname = req.body.fname
            domestic_abuse_complain.lname = req.body.lname
            domestic_abuse_complain.nic = req.body.nic
            domestic_abuse_complain.dateOfBirth = req.body.dateOfBirth
            domestic_abuse_complain.religion = req.body.religion
            domestic_abuse_complain.sex = req.body.sex
            domestic_abuse_complain.address = req.body.address
            domestic_abuse_complain.phone = req.body.phone
            domestic_abuse_complain.description = req.body.description
            domestic_abuse_complain.weapon = req.body.weapon
            domestic_abuse_complain.date = req.body.date
            domestic_abuse_complain.officer_incharge = req.body.officer_incharge

            domestic_abuse_complain.save()
                .then(() => res.json('Complain updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;