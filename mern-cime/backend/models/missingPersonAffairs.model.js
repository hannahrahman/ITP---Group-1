const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let missingPersonSchema = new Schema(
  {
    mp_fullname: { type: String, required: true },
    mp_nickname: { type: String, required: true },
    mp_address: { type: String, required: true },
    mp_contact_number: { type: Number, required: true },
    mp_nic: { type: String, required: true },
    mp_DOB: { type: Date, required: true },
    mp_age: { type: Number, required: true },
    mp_gender: { type: String, required: true },
    mp_height: { type: Number, required: true },
    mp_weight: { type: Number, required: true },
    mp_hair_color: { type: String, required: true },
    mp_eye_color: { type: String, required: true },
    mp_spectacle_user: { type: String, required: true },
    mp_features: { type: String, required: true },
    mp_communication_skills: { type: String, required: true },
    mp_head_wear: { type: String, required: true },
    mp_foot_wear: { type: String, required: true },
    mp_jewellery: { type: String, required: true },
    mp_bank_details: { type: String, required: true },
    mp_passport_details: { type: String, required: true },
    mp_vehicle_details: { type: String, required: true },
    mp_social_details: { type: String, required: true },
    mp_health_conditions: { type: String, required: true },
    mp_school_workplace: { type: String, required: true },
    mp_allergies: { type: String, required: true },
    mp_medications: { type: String, required: true },
    mp_history_of_surgery: { type: String, required: true },
    mp_dna_items: { type: String, required: true },
    mp_where_last_seen: { type: String, required: true },
    mp_when_last_seen: { type: Date, required: true },
    mp_last_person_to_see: { type: String, required: true },
    mp_pets: { type: String, required: true },
    mp_missing_before: { type: String, required: true },
    mp_additional_info: { type: String, required: true },
    mp_missing_reason: { type: String, required: true },

    //Reporter
    rep_fullname: { type: String, required: true },
    rep_nic: { type: String, required: true },
    rep_address: { type: String, required: true },
    rep_DOB: { type: Date, required: true },
    rep_contact_number: { type: Number, required: true },
    rep_relationship: { type: String, required: true },

    //Officer
    officer_fullname: { type: String, required: true },
    officer_id: { type: String, required: true },
    officer_police_station: { type: String, required: true },
  },
  {
    collection: "missingperson",
  }
);

module.exports = mongoose.model("missingperson", missingPersonSchema);
