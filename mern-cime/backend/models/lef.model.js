const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

let lefSchema = new Schema({
    refNo: { type: String, required: true },
    dateOfIssue: { type: Date, required: true },
    victimFullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    age: { type: Number, required: true },
    admission: { type: String, required: true },
    hospital: { type: String, required: true },
    wardNo: { type: String, required: true },
    date: { type: Date, require: true },
    dateOfDischarge: { type: Date, require: true },
    registrationNumber: { type: Number, required: true },
    nomineeName: { type: String, required: true },
    address: { type: String, required: true },
    rank: { type: String, required: true },
    // natureOfBodilyHarm: { type: String },
    // weapon: { type: String },
    // categoryOfHurt: { type: String },
    // consumptionOfAlcohol: { type: String },
    //other: { type: String },
    remarks: { type: String, required: true }


}, {
    collection: 'lef'
});

module.exports = mongoose.model('Lef', lefSchema);
