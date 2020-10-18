const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const licenseSchema = new Schema({
    refNo: { type: String},
    name: { type: String},
    nic: { type: String},
    address: { type: String},
    phone: { type: String},
    description: { type: String},
    // date: { type: Date, required: true },
    officer_incharge: { type: String },
    grama_niladhari_division: { type: String}
}, {
    timestamps: true,
})

const LicenseComplain = mongoose.model('licenseloss', licenseSchema)

module.exports = LicenseComplain
