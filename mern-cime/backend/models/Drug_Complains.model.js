const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const DrugComplainSchema = new Schema({
    RefNo: { type: Number, required: true },
    ComplainType: { type: String, required: true },
    FName: { type: String, required: true },
    LName: { type: String, required: true },
    Nic: { type: String, required: true },
    DateOfBirth: { type: Date, required: true },
    Religion: { type: String },
    Phone: { type: Number, require: true },
    Sex: { type: String, required: true },
    Location: { type: String, require: true },
    KindOfDrug: { type: String, require: true },
    VehiclePlate: { type: String, required: true },
    DrugActivity: { type: String, require: true },
    HW: { type: String, require: true },
    EH: { type: String, require: true },
    DSex: { type: String, required: true },
    Description: { type: String, required: true },
    Weapon: { type: String },
    date: { type: Date, required: true },
    OfficerIncharge: { type: String }

}, {
    timestamps: true,
})

const DrugComplain = mongoose.model('DrugComplain', DrugComplainSchema)

module.exports = DrugComplain