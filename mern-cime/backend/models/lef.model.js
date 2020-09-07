const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const lefSchema = new Schema({
    refNo: { type: String, required: true },//
    dateOfIssue: { type: Date, required: true },//
    victimFullName: { type: String, required: true },//
    dateOfBirth: { type: Date, required: true },//
    age: { type: Number, required: true },//
    admission: { type: String, required: true },//
    hospital: { type: String, required: true },//
    wardNo: { type: String, required: true },//
    date: { type: Date, require: true },//
    dateOfDischarge: { type: Date, require: true },//
    registrationNumber: { type: Number, required: true },//
    nomineeName: { type: String, required: true },//
    address: { type: String, required: true },//
    rank: { type: String, required: true },//
    natureOfBodilyHarm: { type: String, required: true },
    weapon: { type: String, required: true },//
    categoryOfHurt: { type: String, required: true },//
    consumptionOfAlcohol: { type: String, required: true },
    other: { type: String, required: true },
    remarks: { type: String, required: true }


}, {
    timestamps: true,
})

const Lef = mongoose.model('Lef', lefSchema)

module.exports = Lef
