const mongoose = require('mongoose');
//const { generatePath } = require('react-router-dom');

const Schema = mongoose.Schema;

const complainPaymentSchema = new Schema({
    
    name:{type:String,require:true},
    password:{type:String,required:true},
    fullName: {type:String, required: true },
    address: { type:String, required: true },
    mobileNum: { type:Number, required: true },
    emailId: { type:String, required: true },
    fineType: { type:String, required: true },
    incidentArea: { type:String, required: true },
    policeStation: { type:String,required:true},
    fineRefslpNo: { type:String, required: true },
    policeOfficerNo: { type:Number, required: true },
    amountOFfine: { type:Number, required: true },
    issueDate: { type: Date, required: true },

}, {
    collection: 'online',
})

module.exports = mongoose.model('online_Payment', complainPaymentSchema)