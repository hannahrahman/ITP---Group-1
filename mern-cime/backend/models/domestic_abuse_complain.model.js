const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const domesticAbuseComplainSchema = new Schema({
    refNo: { type: String, required: true },
    complainType: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    nic: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    religion: { type: String, required: true },
    sex: { type: String },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    description: { type: String },
    weapon: { type: String },
    date: { type: Date, required: true },
    officer_incharge: { type: String }

}, {
    collection: 'domesticAbuseComplain',
})

module.exports = mongoose.model('DomesticAbuseComplain', domesticAbuseComplainSchema);

