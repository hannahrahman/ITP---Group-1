const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const domesticAbuseComplainSchema = new Schema({
    refNo: { type: Number, required: true },
    complainType: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    nic: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    religion: { type: String },
    sex: { type: String, required: true },
    address: { type: String, require: true },
    phone: { type: Number, require: true },
    description: { type: String, required: true },
    weapon: { type: String },
    date: { type: Date, required: true },
    officer_incharge: { type: String }

}, {
    timestamps: true,
})

const DomesticAbuseComplain = mongoose.model('DomesticAbuseComplain', domesticAbuseComplainSchema)

module.exports = DomesticAbuseComplain