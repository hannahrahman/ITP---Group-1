const router = require('express').Router()
let Complain = require('../models/complain.model')

router.route('/').get((req, res) => {
    Complain.find()
        .then(complains => res.json(complains))
        .catch(err => res.status(400), json('error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const password = req.body.password
    const fullName = req.body.fullName
    const address = req.body.address
    const mobileNum = req.body.mobileNum
    const emailId = req.body.emailId
    const fineType = req.body.fineType
    const incidentArea = req.body.incidentArea
    const policeStation = req.body.policeStation
    const fineRefslpNo = req.body.fineRefslpNo
    const policeOfficerNo = req.body.policeOfficerNo
    const amountOFfine = req.body.issueDate
    const issueDate = Date.parse(req.body.date)
    const officer_incharge = req.body.officer_incharge

    const newComplain = new Complain({
        name,
        password,
        fullName,
        address,
        mobileNum,
        emailId,
        fineType,
        incidentArea,
        policeStation,
        fineRefslpNo,
        policeOfficerNo,
        amountOFfine,
        issueDate,
        
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
router.route('/:id').post((req, res) => {
    Complain.findById(req.params.id)
        .then(complain => {
            complain.name = req.body.name;
            complain.password = req.body.password
            complain.fullName = req.body.fullName
            complain.address = req.body.address
            complain.mobileNum = req.body.mobileNum
            complain.emailId = req.body.emailId
            complain.fineType = req.body.fineType
            complain.incidentArea = req.body.incidentArea
            complain.policeStation = req.body.policeStation
            complain.fineRefslpNo = req.body.fineRefslpNo
            complain.policeOfficerNo = req.body.policeOfficerNo
            complain.amountOFfine = req.body.amountOFfine
            complain.issueDate = req.body.issueDate
            

            complain.save()
                .then(() => res.json('Complain updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;