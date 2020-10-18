const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

let complainSchema = new Schema({

    refNo: { type: String, required: true },
    complainType: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    nic: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    religion: { type: String, required: true },
    sex: { type: String, required: true },
    address: { type: String, require: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    weapon: { type: String },
    date: { type: Date, default: Date.now },
    date: { type: String, required: true },
    status: { type: String, default: "CREATED" },
    officer_incharge: { type: String, required: true }

}, {
    collection: 'complain',
})

module.exports = mongoose.model('Complain', complainSchema);