const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let missingPersonSchema = new Schema(
  {
    mp_fullname: { type: String, required: true },
    mp_nickname: { type: String, required: false },
    mp_address: { type: String, required: true },
    mp_contact_number: { type: Number, required: false },
    mp_nic: { type: String, required: false },
    mp_DOB: { type: Date, required: false },
    mp_age: { type: Number, required: true },
    mp_gender: { type: String, required: true },
    mp_height: { type: Number, required: false },
    mp_weight: { type: Number, required: false },
    mp_hair_color: { type: String, required: true },
    mp_eye_color: { type: String, required: true },
    mp_spectacle_user: { type: String, required: false },
    mp_features: { type: String, required: false },
    mp_communication_skills: { type: String, required: false },
    mp_head_wear: { type: String, required: false },
    mp_foot_wear: { type: String, required: false },
    mp_jewellery: { type: String, required: false },
    mp_bank_details: { type: String, required: false },
    mp_passport_details: { type: String, required: false },
    mp_vehicle_details: { type: String, required: false },
    mp_social_details: { type: String, required: false },
    mp_health_conditions: { type: String, required: false },
    mp_school_workplace: { type: String, required: false },
    mp_allergies: { type: String, required: false },
    mp_medications: { type: String, required: false },
    mp_history_of_surgery: { type: String, required: false },
    mp_dna_items: { type: String, required: false },
    mp_where_last_seen: { type: String, required: true },
    mp_when_last_seen: { type: Date, required: true },
    mp_last_person_to_see: { type: String, required: false },
    mp_pets: { type: String, required: false },
    mp_missing_before: { type: String, required: false },
    mp_additional_info: { type: String, required: false },
    mp_missing_reason: { type: String, required: false },

    //Reporter
    rep_fullname: { type: String, required: true },
    rep_nic: { type: String, required: true },
    rep_address: { type: String, required: true },
    rep_DOB: { type: Date, required: false },
    rep_contact_number: { type: Number, required: true },
    rep_relationship: { type: String, required: true },

    //Officer
    complain_ID: {type: String, required: true},
    search_team: {type: String, required: true},
    officer_fullname: { type: String, required: true },
    officer_id: { type: String, required: true },
    officer_police_station: { type: String, required: true },
  },
  {
    collection: "missingperson",
  }
);

module.exports = mongoose.model("missingperson", missingPersonSchema);
