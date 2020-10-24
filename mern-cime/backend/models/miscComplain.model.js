const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const complainSchema = new Schema({
 
    refNo: { type: String, required: true },
    fullname: { type: String, required: true },
    phonenumber: { type: String, required: true },
    nic: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    dateofincident: { type: String, required: true },
    personsinvolved: { type: String, required: true },
}, {
    collection: 'complains',
});

module.exports = mongoose.model('miscComplain', complainSchema);

