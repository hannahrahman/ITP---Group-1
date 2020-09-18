const express = require("express");
const missingPersonRoutes = express.Router();
let missingPersonAffairs = require("../models/missingPersonAffairs.model");

missingPersonRoutes.route("/add").post(function (req, res) {
  let missingperson = new missingPersonAffairs(req.body);
  missingperson
    .save()
    .then((missingperson) => {
      res.status(200).json({ missingperson: "Missing is added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

missingPersonRoutes.route("/").get(function (req, res) {
  missingPersonAffairs.find(function (err, missingperson) {
    if (err) console.log(err);
    else {
      res.json(missingperson);
    }
  });
});

missingPersonRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  missingPersonAffairs.findById(id, function (err, missingperson) {
    res.json(missingperson);
  });
});

missingPersonRoutes.route("/update/:id").post(function (req, res) {
  missingPersonAffairs.findById(req.params.id, function (err, missingperson) {
    if (!missingperson) res.status(404).send("data is not found");
    //Missing Person
    else
    {
        missingperson.mp_fullname = req.body.mp_fullname,
        missingperson.mp_nickname = req.body.mp_nickname,
        missingperson.mp_address = req.body.mp_address,
        missingperson.mp_contact_number = Number(req.body.mp_contact_number),
        missingperson.mp_nic = req.body.mp_nic,
        missingperson.mp_DOB = Date.parse(req.body.mp_DOB),
        missingperson.mp_age = Number(req.body.mp_age),
        missingperson.mp_gender = req.body.mp_gender,
        missingperson.mp_height = Number(req.body.mp_height),
        missingperson.mp_weight = Number(req.body.mp_weight),
        missingperson.mp_hair_color = req.body.mp_hair_color,
        missingperson.mp_eye_color = req.body.mp_eye_color,
        missingperson.mp_spectacle_user = req.body.mp_spectacle_user,
        missingperson.mp_features = req.body.mp_features,
        missingperson.mp_communication_skills = req.body.mp_communication_skills,
        missingperson.mp_head_wear = req.body.mp_head_wear,
        missingperson.mp_foot_wear = req.body.mp_foot_wear,
        missingperson.mp_jewellery = req.body.mp_jewellery,
        missingperson.mp_bank_details = req.body.mp_bank_details,
        missingperson.mp_passport_details = req.body.mp_passport_details,
        missingperson.mp_vehicle_details = req.body.mp_vehicle_details,
        missingperson.mp_social_details = req.body.mp_social_details,
        missingperson.mp_health_conditions = req.body.mp_health_conditions,
        missingperson.mp_school_workplace = req.body.mp_school_workplace,
        missingperson.mp_allergies = req.body.mp_allergies,
        missingperson.mp_medications = req.body.mp_medications,
        missingperson.mp_history_of_surgery = req.body.mp_history_of_surgery,
        missingperson.mp_dna_items = req.body.mp_dna_items,
        missingperson.mp_where_last_seen = req.body.mp_where_last_seen,
        missingperson.mp_when_last_seen = Date.parse( req.body.mp_when_last_seen),
        missingperson.mp_last_person_to_see = req.body.mp_last_person_to_see,
        missingperson.mp_pets = req.body.mp_pets,
        missingperson.mp_missing_before = req.body.mp_missing_before,
        missingperson.mp_additional_info = req.body.mp_additional_info,
        missingperson.mp_missing_reason = req.body.mp_missing_reason,
        //Reporter
        missingperson.rep_fullname = req.body.rep_fullname,
        missingperson.rep_nic = req.body.rep_nic,
        missingperson.rep_address = req.body.rep_address,
        missingperson.rep_DOB = Date.parse(req.body.rep_DOB),
        missingperson.rep_contact_number = Number(req.body.rep_contact_number),
        missingperson.rep_relationship = req.body.rep_relationship,
        //Officer
        missingperson.officer_fullname = req.body.officer_fullname,
        missingperson.officer_id = req.body.officer_id,
        missingperson.officer_police_station = req.body.officer_police_station,
        missingperson
          .save()
          .then((missingperson) => {
            res.json("Update Complete");
          })
          .catch((err) => {
            res.status(400).send("unable to update database");
          });
        }
  });
});

missingPersonRoutes.route("/delete/:id").get(function (req, res) {
  missingPersonAffairs.findByIdAndRemove({ _id: req.params.id }, function (
    err,
    missingperson
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = missingPersonRoutes;
