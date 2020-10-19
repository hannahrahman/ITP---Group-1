const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nicSchema = new Schema({
    refNo: { type: Number, required: true },
    name: { type: String, required: true },
    nic: { type: String, required: true },
    address: { type: String, require: true },
    phone: { type: Number, require: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    officer_incharge: { type: String },
    grama_niladhari_division: { type: String}
}, {
    timestamps: true,
})

const NicComplain = mongoose.model('nicloss', nicSchema)

module.exports = NicComplain
