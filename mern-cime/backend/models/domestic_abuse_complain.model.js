const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const domesticAbuseComplainSchema = new Schema({
    refNo: { type: String, required: true },
    complainType: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    nic: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    religion: { type: String, required: true },
    sex: { type: String },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String },
    weapon: { type: String },
    date: { type: Date, default: Date.now },
    officer_incharge: { type: String },
    status: { type: String, default: "CREATED" },
    relationType: { type: String, required: true }

}, {
    collection: 'domesticAbuseComplain',
})

module.exports = mongoose.model('DomesticAbuseComplain', domesticAbuseComplainSchema);

