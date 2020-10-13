const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nicSchema = new Schema({
    refNo: { type: String},
    name: { type: String},
    nic: { type: String},
    address: { type: String},
    phone: { type: String},
    description: { type: String },
    officer_incharge: { type: String },
    grama_niladhari_division: { type: String}
}, {
    timestamps: true,
})

const NicComplain = mongoose.model('nicloss', nicSchema)

module.exports = NicComplain
