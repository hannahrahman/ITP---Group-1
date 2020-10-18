const router = require('express').Router()
let Complain = require('../../models/license_nic/nic.model')

router.route('/').get((req, res) => {
    Complain.find()
        .then(complains => res.json(complains))
        .catch(err => res.status(400))
})

router.route('/nic/add').post((req, res) => {

    const refNo = req.body.refNo
    const name = req.body.name
    const nic = req.body.nic
    const address = req.body.address
    const phone = req.body.phone
    const description = req.body.description
    const date = Date.parse(req.body.date)
    const officer_incharge = req.body.officer_incharge
    const grama_niladhari_division = req.body.grama_niladhari_division

    const newComplain = new Complain({
        refNo,
        name,
        nic,
        address,
        phone,
        description,
        date,
        officer_incharge,
        grama_niladhari_division,
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
            complain.refNo = req.body.refNo
            complain.name = req.body.name
            complain.nic = req.body.nic
            complain.address = req.body.address
            complain.phone = req.body.phone
            complain.description = req.body.description
            complain.date = req.body.date
            complain.officer_incharge = req.body.officer_incharge
	        complain.grama_niladhari_division = req.body.grama_niladhari_division

            complain.save()
                .then(() => res.json('Complain updated..'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;
