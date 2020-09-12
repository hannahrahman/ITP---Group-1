const express = require('express')
const drugComplainRoutess = express.Router()
let Drug_Complain = require('../models/Drug_Complains.model')























/*const router = require('express').Router()
let DrugComplain = require('../models/Drug_Complains.model')

router.route('/').get((req, res) => {
    DrugComplain.find()
        .then(drugComplain => res.json(drugComplain))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post((req, res) => {
    const RefNo = req.body.RefNo
    const ComplainType = req.body.ComplainType
    const FName = req.body.FName
    const LName = req.body.LName
    const Nic = req.body.Nic
    const DateOfBirth = req.body.DateOfBirth
    const Religion = req.body.Religion
    const Phone = req.body.Phone
    const Sex = req.body.Sex
    const Location = req.body.Location
    const KindOfDrug = req.body.KindOfDrug
    const VehiclePlate = req.body.VehiclePlate
    const DrugActivity = req.body.DrugActivity
    const HW = req.body.HW
    const EH = req.body.EH
    const DSex = req.body.DSex
    const Description = req.body.Description
    const Weapon = req.body.Weapon
    const date = Date.parse(req.body.date)
    const OfficerIncharge = req.body.OfficerIncharge

    const newdrugComplain = new drugComplain({
        RefNo,
        ComplainType,
        FName,
        LName,
        Nic,
        DateOfBirth,
        Religion,
        Phone,
        Sex,
        Location,
        KindOfDrug,
        VehiclePlate,
        DrugActivity,
        HW,
        EH,
        DSex,
        Description,
        Weapon,
        date,
        OfficerIncharge,
    })

    drugComplain.save()
        .then(() => res.json('Complain added!'))
        .catch(err => res.status(400).json('Error :' + err))
})

router.route('/:id').get((req, res) => {
    DrugComplain.findById(req.params.id)
        .then(drugComplain => res.json(drugComplain))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    DrugComplain.findByIdAndDelete(req.params.id)
        .then(() => res.json('complain deleted..'))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').post((req, res) => {
    DrugComplain.findById(req.params.id)
        .then(drugComplain => {
            drugComplain.RefNo = req.body.RefNo
            drugComplain.ComplainType = req.body.ComplainType
            drugComplain.FName = req.body.FName
            drugComplain.LName = req.body.LName
            drugComplain.Nic = req.body.Nic
            drugComplain.DateOfBirth = req.body.DateOfBirth
            drugComplain.Religion = req.body.Religion
            drugComplain.Sex = req.body.Sex
            drugComplain.Phone = req.body.phone
            drugComplain.Location = req.body.Location
            drugComplain.KindOfDrug = req.body.KindOfDrug
            drugComplain.VehiclePlate = req.body.VehiclePlate
            drugComplain.HW = req.body.HW
            drugComplain.EH = req.body.EH
            drugComplain.DSex = req.body.DSex
            drugComplain.Description = req.body.Description
            drugComplain.Weapon = req.body.Weapon
            drugComplain.date = req.body.date
            drugComplain.OfficerIncharge = req.body.OfficerIncharge

            drugComplain.save()
                .then(() => res.json('Complain updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;*/