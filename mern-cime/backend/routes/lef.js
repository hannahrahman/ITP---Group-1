const router = require('express').Router()
let Lef = require('../models/lef.model')

router.route('/').get((req, res) => {
    Lef.find()
        .then(lefs => res.json(lefs))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post((req, res) => {
    const refNo = req.body.refNo
    const dateOfIssue = Date.parse(req.body.dateOfIssue)
    const victimFullName = req.body.victimFullName
    const dateOfBirth = Date.parse(req.body.dateOfBirth)
    const age = Number(req.body.age)
    const admission = req.body.admission
    const hospital = req.body.hospital
    const wardNo = req.body.wardNo
    const date = Date.parse(req.body.date)
    const dateOfDischarge = Date.parse(req.body.dateOfDischarge)
    const registrationNumber = Number(req.body.registrationNumber)
    const nomineeName = req.body.nomineeName
    const address = req.body.address
    const rank = req.body.rank
    const natureOfBodilyHarm = req.body.natureOfBodilyHarm
    const weapon = req.body.weapon
    const categoryOfHurt = req.body.categoryOfHurt
    const consumptionOfAlcohol = req.body.consumptionOfAlcohol
    const other = req.body.other
    const remarks = req.body.remarks

    const newLef = new Lef({
        refNo,
        dateOfIssue,
        victimFullName,
        dateOfBirth,
        age,
        admission,
        hospital,
        wardNo,
        date,
        dateOfDischarge,
        registrationNumber,
        nomineeName,
        address,
        rank,
        natureOfBodilyHarm,
        weapon,
        categoryOfHurt,
        consumptionOfAlcohol,
        other,
        remarks
    })

    newLef.save()
        .then(() => res.json('Lef added!'))
        .catch(err => res.status(400).json('Error :' + err))
})

router.route('/:id').get((req, res) => {
    Lef.findById(req.params.id)
        .then(lef => res.json(lef))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    Lef.findByIdAndDelete(req.params.id)
        .then(() => res.json('lef deleted..'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/update/:id').post((req, res) => {
    Lef.findById(req.params.id)
        .then(lef => {
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

            const refNo = req.body.refNo
    const dateOfIssue = Date.parse(req.body.dateOfIssue)
    const victimFullName = req.body.victimFullName
    const dateOfBirth = Date.parse(req.body.dateOfBirth)
    const age = Number(req.body.age)
    const admission = req.body.admission
    const hospital = req.body.hospital
    const wardNo = req.body.wardNo
    const date = Date.parse(req.body.date)
    const dateOfDischarge = Date.parse(req.body.dateOfDischarge)
    const registrationNumber = Number(req.body.registrationNumber)
    const nomineeName = req.body.nomineeName
    const address = req.body.address
    const rank = req.body.rank
    const natureOfBodilyHarm = req.body.natureOfBodilyHarm
    const weapon = req.body.weapon
    const categoryOfHurt = req.body.categoryOfHurt
    const consumptionOfAlcohol = req.body.consumptionOfAlcohol
    const other = req.body.other
    const remarks = req.body.remarks

            complain.save()
                .then(() => res.json('Complain updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;