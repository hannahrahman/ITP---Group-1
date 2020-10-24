const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

let lefSchema = new Schema({
    refNo: { type: String, required: true },
    dateOfIssue: { type: String, required: true },
    victimFullName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    age: { type: String, required: true },
    admission: { type: String, required: true },
    hospital: { type: String, required: true },
    wardNo: { type: String, required: true },
    date: { type: String, require: true },
    dateOfDischarge: { type: String, require: true },
    registrationNumber: { type: String, required: true },
    nomineeName: { type: String, required: true },
    address: { type: String, required: true },
    rank: { type: String, required: true },
    natureOfBodilyHarm: { type: String, required: true },
    weapon: { type: String, required: true },
    categoryOfHurt: { type: String, required: true },
    consumptionOfAlcohol: { type: String, required: true },
    other: { type: String, required: true },
    remarks: { type: String, required: true }


}, {
    collection: 'lef'
});

module.exports = mongoose.model('Lef', lefSchema);
