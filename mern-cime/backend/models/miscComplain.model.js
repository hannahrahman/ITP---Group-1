const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const complainSchema = new Schema({
 
    refNo: { type: Number, required: true },
    fullname: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    nic: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    dateofincident: { type: Date },
    personsinvolved: { type: String, required: true },
}, {
    collection: 'complains',
});

module.exports = mongoose.model('miscComplain', complainSchema);

