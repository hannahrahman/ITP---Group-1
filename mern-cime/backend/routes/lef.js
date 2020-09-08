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
            lef.refNo = req.body.refNo
            lef.dateOfIssue = Date.parse(req.body.dateOfIssue)
            lef.victimFullName = req.body.victimFullName
            lef.dateOfBirth = Date.parse(req.body.dateOfBirth)
            lef.age = Number(req.body.age)
            lef.admission = req.body.admission
            lef.hospital = req.body.hospital
            lef.wardNo = req.body.wardNo
            lef.date = Date.parse(req.body.date)
            lef.dateOfDischarge = Date.parse(req.body.dateOfDischarge)
            lef.registrationNumber = Number(req.body.registrationNumber)
            lef.nomineeName = req.body.nomineeName
            lef.address = req.body.address
            lef.rank = req.body.rank
            lef.natureOfBodilyHarm = req.body.natureOfBodilyHarm
            lef.weapon = req.body.weapon
            lef.categoryOfHurt = req.body.categoryOfHurt
            lef.consumptionOfAlcohol = req.body.consumptionOfAlcohol
            lef.other = req.body.other
            lef.remarks = req.body.remarks

            lef.save()
                .then(() => res.json('Lef Form is updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;