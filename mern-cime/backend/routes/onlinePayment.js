const router = require('express').Router();
let online_Payment = require('../models/onlinePayment.model');

router.route('/').get((req, res) => {
    online_Payment.find()
        .then(online_Payment => res.json(online_Payment))
        .catch(err => res.status(400), json('error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name
    const password = req.body.password
    const fullName = req.body.fullName
    const address = req.body.address
    const mobileNum = Number(req.body.mobileNum)
    const emailId = req.body.emailId
    const fineType = req.body.fineType
    const incidentArea = req.body.incidentArea
    const policeStation = req.body.policeStation
    const fineRefslpNo = req.body.fineRefslpNo
    const policeOfficerNo = req.body.policeOfficerNo
    const amountOFfine = req.body.issueDate
    const issueDate = Date.parse(req.body.date)
    


    const newOnlinePayment = new OnlinePayment({
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
        
    });

    newOnlinePayment.save()
        .then(() => res.json('Fine added!'))
        .catch(err => res.status(400).json('Error :' + err))
});

router.route('/:id').get((req, res) => {
    online_Payment.findById(req.params.id)
        .then(online_Payment => res.json(online_Payment))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/:id').delete((req, res) => {
    online_Payment.findByIdAndDelete(req.params.id)
        .then(() => res.json('Fine deleted..'))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/:id').post((req, res) => {
    online_Payment.findById(req.params.id)
        .then(online_Payment => {
            online_Payment.name = req.body.name;
            online_Payment.password = req.body.password
            online_Payment.fullName = req.body.fullName
            online_Payment.address = req.body.address
            online_Payment.mobileNum = Number(req.body.mobileNum)
            online_Payment.emailId = req.body.emailId
            online_Payment.fineType = req.body.fineType
            online_Payment.incidentArea = req.body.incidentArea
            online_Payment.policeStation = req.body.policeStation
            online_Payment.fineRefslpNo = req.body.fineRefslpNo
            online_Payment.policeOfficerNo = req.body.policeOfficerNo
            online_Payment.amountOFfine = req.body.amountOFfine
            online_Payment.issueDate = Date.parse(req.body.issueDate)
            

            newOnlinePayment.save()
                .then(() => res.json('Fine updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;