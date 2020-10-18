import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";



export default class MissingPersonComplaintForm extends Component {
  constructor(props) {
    super(props);

    //Missing Person
    this.onchangeMPersonFullName = this.onchangeMPersonFullName.bind(this);
    this.onchangeMPersonNickname = this.onchangeMPersonNickname.bind(this);
    this.onchangeMPAddress = this.onchangeMPAddress.bind(this);
    this.onchangeMPNIC = this.onchangeMPNIC.bind(this);
    this.onchangeMPContactNumber = this.onchangeMPContactNumber.bind(this);
    this.onchangeMPDOB = this.onchangeMPDOB.bind(this);
    this.onchangeMPAge = this.onchangeMPAge.bind(this);
    this.onchangeMPGender = this.onchangeMPGender.bind(this);
    this.onchangeMPHeight = this.onchangeMPHeight.bind(this);
    this.onchangeMPWeight = this.onchangeMPWeight.bind(this);
    this.onchangeMPHaircolor = this.onchangeMPHaircolor.bind(this);
    this.onchangeMPEyeColor = this.onchangeMPEyeColor.bind(this);
    this.onchangeMPSpectacleUser = this.onchangeMPSpectacleUser.bind(this);
    this.onchangeMPFeatures = this.onchangeMPFeatures.bind(this); //Tatoos,Scars,Peircings
    this.onchangeMPCommunicationSkills = this.onchangeMPCommunicationSkills.bind(
      this
    );
    this.onchangeMPHeadWear = this.onchangeMPHeadWear.bind(this);
    this.onchangeMPFootWear = this.onchangeMPFootWear.bind(this);
    this.onchangeMPJewellery = this.onchangeMPJewellery.bind(this);
    this.onchangeMPBankDetails = this.onchangeMPBankDetails.bind(this);
    this.onchangeMPPassportDetails = this.onchangeMPPassportDetails.bind(this);
    this.onchangeMPVehicleDetails = this.onchangeMPVehicleDetails.bind(this);
    this.onchangeMPSocialMediaDetails = this.onchangeMPSocialMediaDetails.bind(
      this
    );
    this.onchangeMPSchoolWorkplace = this.onchangeMPSchoolWorkplace.bind(this);
    this.onchangeMPHealthConditions = this.onchangeMPHealthConditions.bind(
      this
    );
    this.onchangeMPAllergies = this.onchangeMPAllergies.bind(this);
    this.onchangeMPMedications = this.onchangeMPMedications.bind(this);
    this.onchangeMPHistoryofSurgery = this.onchangeMPHistoryofSurgery.bind(
      this
    );
    this.onchangeMPDNAItems = this.onchangeMPDNAItems.bind(this);
    this.onchangeMPWhenLastSeen = this.onchangeMPWhenLastSeen.bind(this);
    this.onchangeMPWhereLastSeen = this.onchangeMPWhereLastSeen.bind(this);
    this.onchangeMPLastPersonToSee = this.onchangeMPLastPersonToSee.bind(this);
    this.onchangeMPPets = this.onchangeMPPets.bind(this); //Left or Taken behind?
    this.onchangeMPMissingBefore = this.onchangeMPMissingBefore.bind(this); //Have gone missing before?
    this.onchangeMPAdditionalInformation = this.onchangeMPAdditionalInformation.bind(
      this
    );
    this.onchangeMPReasonToGoMissing = this.onchangeMPReasonToGoMissing.bind(
      this
    );

    //Reporter
    this.onchangeRepFullName = this.onchangeRepFullName.bind(this);
    this.onchangeRepNIC = this.onchangeRepNIC.bind(this);
    this.onchangeRepAddress = this.onchangeRepAddress.bind(this);
    this.onchangeRepDOB = this.onchangeRepDOB.bind(this);
    this.onchangeRepContactNumber = this.onchangeRepContactNumber.bind(this);
    this.onchangeRepRelationship = this.onchangeRepRelationship.bind(this);

    //Officer
    this.onchangeOfficerID = this.onchangeOfficerID.bind(this);
    this.onchangeOfficerName = this.onchangeOfficerName.bind(this);
    this.onchangeOfficerPoliceStation = this.onchangeOfficerPoliceStation.bind(
      this
    );

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      //Missing Person
      mp_fullname: "",
      mp_nickname: "",
      mp_address: "",
      mp_contact_number: "",
      mp_nic: "",
      mp_DOB: new Date(),
      mp_age: "",
      mp_gender: "",
      mp_height: "",
      mp_weight: "",
      mp_hair_color: "",
      mp_eye_color: "",
      mp_spectacle_user: new Date(),
      mp_features: "",
      mp_communication_skills: "",
      mp_head_wear: "",
      mp_foot_wear: "",
      mp_jewellery: "",
      mp_bank_details: "",
      mp_passport_details: "",
      mp_vehicle_details: "",
      mp_social_details: "",
      mp_health_conditions: "",
      mp_school_workplace: "",
      mp_allergies: "",
      mp_medications: "",
      mp_history_of_surgery: "",
      mp_dna_items: "",
      mp_where_last_seen: "",
      mp_when_last_seen: new Date(),
      mp_last_person_to_see: "",
      mp_pets: "",
      mp_missing_before: "",
      mp_additional_info: "",
      mp_missing_reason: "",

      //Reporter
      rep_fullname: "",
      rep_nic: "",
      rep_address: "",
      rep_DOB: new Date(),
      rep_contact_number: "",
      rep_relationship: "",

      //Officer
      officer_fullname: "",
      officer_id: "",
      officer_police_station: "",

      //errors
      mpFullnameError: "",
    };
  }

  //Missig Person
  onchangeMPersonFullName(e) {
    this.setState({
      mp_fullname: e.target.value,
    });
  }

  onchangeMPersonNickname(e) {
    this.setState({
      mp_nickname: e.target.value,
    });
  }

  onchangeMPAddress(e) {
    this.setState({
      mp_address: e.target.value,
    });
  }

  onchangeMPNIC(e) {
    this.setState({
      mp_nic: e.target.value, //target is the text box and the value is the value in the text box that is assigned to the name attribute
    });
  }

  onchangeMPContactNumber(e) {
    this.setState({
      mp_contact_number: e.target.value,
    });
  }

  onchangeMPDOB(date) {
    this.setState({
      mp_DOB: date,
    });
  }

  onchangeMPAge(e) {
    this.setState({
      mp_age: e.target.value,
    });
  }

  onchangeMPGender(e) {
    this.setState({
      mp_gender: e.target.value,
    });
  }

  onchangeMPWeight(e) {
    this.setState({
      mp_weight: e.target.value,
    });
  }

  onchangeMPHeight(e) {
    this.setState({
      mp_height: e.target.value,
    });
  }

  onchangeMPHaircolor(e) {
    this.setState({
      mp_hair_color: e.target.value,
    });
  }

  onchangeMPEyeColor(e) {
    this.setState({
      mp_eye_color: e.target.value,
    });
  }

  onchangeMPFeatures(e) {
    this.setState({
      mp_features: e.target.value,
    });
  }

  onchangeMPFootWear(e) {
    this.setState({
      mp_foot_wear: e.target.value,
    });
  }

  onchangeMPHeadWear(e) {
    this.setState({
      mp_head_wear: e.target.value,
    });
  }

  onchangeMPHistoryofSurgery(e) {
    this.setState({
      mp_history_of_surgery: e.target.value,
    });
  }

  onchangeMPJewellery(e) {
    this.setState({
      mp_jewellery: e.target.value,
    });
  }

  onchangeMPLastPersonToSee(e) {
    this.setState({
      mp_last_person_to_see: e.target.value,
    });
  }

  onchangeMPMedications(e) {
    this.setState({
      mp_medications: e.target.value,
    });
  }

  onchangeMPMissingBefore(e) {
    this.setState({
      mp_missing_before: e.target.value,
    });
  }

  onchangeMPPassportDetails(e) {
    this.setState({
      mp_passport_details: e.target.value,
    });
  }

  onchangeMPPets(e) {
    this.setState({
      mp_pets: e.target.value,
    });
  }

  onchangeMPSchoolWorkplace(e) {
    this.setState({
      mp_school_workplace: e.target.value,
    });
  }

  onchangeMPSocialMediaDetails(e) {
    this.setState({
      mp_social_details: e.target.value,
    });
  }

  onchangeMPSpectacleUser(e) {
    this.setState({
      mp_spectacle_user: e.target.value,
    });
  }

  onchangeMPVehicleDetails(e) {
    this.setState({
      mp_vehicle_details: e.target.value,
    });
  }

  onchangeMPWhenLastSeen(date) {
    this.setState({
      mp_when_last_seen: date,
    });
  }

  onchangeMPWhereLastSeen(e) {
    this.setState({
      mp_where_last_seen: e.target.value,
    });
  }

  onchangeMPAdditionalInformation(e) {
    this.setState({
      mp_additional_info: e.target.value,
    });
  }

  onchangeMPBankDetails(e) {
    this.setState({
      mp_bank_details: e.target.value,
    });
  }

  onchangeMPCommunicationSkills(e) {
    this.setState({
      mp_communication_skills: e.target.value,
    });
  }

  onchangeMPHealthConditions(e) {
    this.setState({
      mp_health_conditions: e.target.value,
    });
  }

  onchangeMPAllergies(e) {
    this.setState({
      mp_allergies: e.target.value,
    });
  }

  onchangeMPDNAItems(e) {
    this.setState({
      mp_dna_items: e.target.value,
    });
  }

  onchangeMPReasonToGoMissing(e) {
    this.setState({
      mp_missing_reason: e.target.value,
    });
  }

  //Reporter
  onchangeRepFullName(e) {
    this.setState({
      rep_fullname: e.target.value,
    });
  }

  onchangeRepNIC(e) {
    this.setState({
      rep_nic: e.target.value,
    });
  }

  onchangeRepAddress(e) {
    this.setState({
      rep_address: e.target.value,
    });
  }

  onchangeRepDOB(date) {
    this.setState({
      rep_DOB: date,
    });
  }

  onchangeRepContactNumber(e) {
    this.setState({
      rep_contact_number: e.target.value,
    });
  }

  onchangeRepRelationship(e) {
    this.setState({
      rep_relationship: e.target.value,
    });
  }

  //Officer
  onchangeOfficerID(e) {
    this.setState({
      officer_id: e.target.value,
    });
  }

  onchangeOfficerName(e) {
    this.setState({
      officer_fullname: e.target.value,
    });
  }

  onchangeOfficerPoliceStation(e) {
    this.setState({
      officer_police_station: e.target.value,
    });
  }

  validate = () => {
    let isError = false;

    const errors = {
      mpFullnameError: "",
      mp_nickname: "",
      mp_address: "",
      mp_contact_number: "",
    };

    if (this.state.mp_fullname <= 0) {
      isError = true;
      errors.mpFullnameError = "FullName cannot be blank";
      this.state.error1 = true;
    } else this.state.error1 = false;

    if (this.state.mp_nickname.length <= 0) {
      isError = true;
      errors.mpNicknameError = "Nickname cannot be blank";
      this.state.error2 = true;
    } else this.state.error2 = false;

    if (this.state.mp_address.length <= 0) {
      isError = true;
      errors.mpAddressError = "Address cannot be blank";
      this.state.error3 = true;
    } else this.state.error3 = false;

    if (this.state.mp_contact_number.length <= 0) {
      isError = true;
      errors.mpContactNumberError = "Contact number cannot be blank";
      this.state.error4 = true;
    } else this.state.error4 = false;

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit(e) {
    e.preventDefault();

    const err = this.validate();

    if (!err) {
      const obj = {
        //Missing Person
        mp_fullname: this.state.mp_fullname,
        mp_nickname: this.state.mp_nickname,
        mp_address: this.state.mp_address,
        mp_contact_number: Number(this.state.mp_contact_number),
        mp_nic: this.state.mp_nic,
        mp_DOB: this.state.mp_DOB,
        mp_age: Number(this.state.mp_age),
        mp_gender: this.state.mp_gender,
        mp_height: Number(this.state.mp_height),
        mp_weight: Number(this.state.mp_weight),
        mp_hair_color: this.state.mp_hair_color,
        mp_eye_color: this.state.mp_eye_color,
        mp_spectacle_user: this.state.mp_spectacle_user,
        mp_features: this.state.mp_features,
        mp_communication_skills: this.state.mp_communication_skills,
        mp_head_wear: this.state.mp_head_wear,
        mp_foot_wear: this.state.mp_foot_wear,
        mp_jewellery: this.state.mp_jewellery,
        mp_bank_details: this.state.mp_bank_details,
        mp_passport_details: this.state.mp_passport_details,
        mp_vehicle_details: this.state.mp_vehicle_details,
        mp_social_details: this.state.mp_social_details,
        mp_health_conditions: this.state.mp_health_conditions,
        mp_school_workplace: this.state.mp_school_workplace,
        mp_allergies: this.state.mp_allergies,
        mp_medications: this.state.mp_medications,
        mp_history_of_surgery: this.state.mp_history_of_surgery,
        mp_dna_items: this.state.mp_dna_items,
        mp_where_last_seen: this.state.mp_where_last_seen,
        mp_when_last_seen: this.state.mp_when_last_seen,
        mp_last_person_to_see: this.state.mp_last_person_to_see,
        mp_pets: this.state.mp_pets,
        mp_missing_before: this.state.mp_missing_before,
        mp_additional_info: this.state.mp_additional_info,
        mp_missing_reason: this.state.mp_missing_reason,

        //Reporter
        rep_fullname: this.state.rep_fullname,
        rep_nic: this.state.rep_nic,
        rep_address: this.state.rep_address,
        rep_DOB: this.state.rep_DOB,
        rep_contact_number: Number(this.state.rep_contact_number),
        rep_relationship: this.state.rep_relationship,

        //Officer
        officer_fullname: this.state.officer_fullname,
        officer_id: this.state.officer_id,
        officer_police_station: this.state.officer_police_station,
      };

      console.log(obj);
      axios
        .post("http://localhost:5000/missingPersonAffairs/add", obj)
        .then((res) => console.log(res.data));

      this.setState({
        //Missing Person
        mp_fullname: "",
        mp_nickname: "",
        mp_address: "",
        mp_contact_number: "",
        mp_nic: "",
        mp_DOB: new Date(),
        mp_age: "",
        mp_gender: "",
        mp_height: "",
        mp_weight: "",
        mp_hair_color: "",
        mp_eye_color: "",
        mp_spectacle_user: new Date(),
        mp_features: "",
        mp_communication_skills: "",
        mp_head_wear: "",
        mp_foot_wear: "",
        mp_jewellery: "",
        mp_bank_details: "",
        mp_passport_details: "",
        mp_vehicle_details: "",
        mp_social_details: "",
        mp_health_conditions: "",
        mp_school_workplace: "",
        mp_allergies: "",
        mp_medications: "",
        mp_history_of_surgery: "",
        mp_dna_items: "",
        mp_where_last_seen: "",
        mp_when_last_seen: new Date(),
        mp_last_person_to_see: "",
        mp_pets: "",
        mp_missing_before: "",
        mp_additional_info: "",
        mp_missing_reason: "",

        //Reporter
        rep_fullname: "",
        rep_nic: "",
        rep_address: "",
        rep_DOB: new Date(),
        rep_contact_number: "",
        rep_relationship: "",

        //Officer
        officer_fullname: "",
        officer_id: "",
        officer_police_station: "",
      });
    }

  }

  render() {
    return (
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
          <div class="tab text-danger">
            <Tab style={{ marginLeft: 20 + "rem" }}>
              <b>Police Officer Details</b>
            </Tab>
            <Tab>
              <b>Reporter Details</b>
            </Tab>
            <Tab>
              <b>Missing Person's Details</b>
            </Tab>
          </div>
        </TabList>
        <div className="container" style={{ marginTop: 1 + "rem" }}>
          <div
            className="card text-white  bg-light mb-3"
            style={{ marginLeft: 8.5 + "rem" }}
          >
            <div className="container">
              <form
                onSubmit={this.onSubmit}
                style={{ margin: "auto" }}
                className="needs-validation"
                noValidate="true"
              >
                {/* Officer Details */}
                <TabPanel>
                  {/* <div className="card-header bg-dark"></div> */}
                  <div className="form-row">
                    <div className="col form-group">
                      <TextField
                        label="Officer ID:"
                        color="secondary"
                        required
                        type="text"
                        variant="outlined"
                        value={this.state.officer_id}
                        onChange={this.onchangeOfficerID}
                      />
                      <br></br>
                    </div>

                    <div className="col-md-10 form-group">
                      <TextField
                        label="Officer Name:"
                        color="secondary"
                        variant="outlined"
                        required
                        type="text"
                        value={this.state.officer_fullname}
                        onChange={this.onchangeOfficerName}
                      />
                      <br></br>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col form-group">
                      <TextField
                        label="Police Station:"
                        color="secondary"
                        variant="outlined"
                        required
                        type="text"
                        value={this.state.officer_police_station}
                        onChange={this.onchangeOfficerPoliceStation}
                      />
                      <br></br>
                    </div>
                  </div>
                </TabPanel>

                {/* Reporter Details Tab */}
                <TabPanel>
                  <div className="row">
                    <div className="col form-group">
                      <TextField
                        label="Reporter's Full Name :"
                        color="secondary"
                        variant="outlined"
                        required
                        type="text"
                        value={this.state.rep_fullname}
                        onChange={this.onchangeRepFullName}
                      />
                    </div>

                    <div className="col-md-10 form-group">
                      <TextField
                        label="Reporter's NIC:"
                        color="secondary"
                        variant="outlined"
                        type="text"
                        required
                        value={this.state.rep_nic}
                        onChange={this.onchangeRepNIC}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col form-group">
                      <TextField
                        label="Reporter's Address :"
                        color="secondary"
                        variant="outlined"
                        required
                        type="text"
                        value={this.state.rep_address}
                        onChange={this.onchangeRepAddress}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col form-group text-muted">
                      <label style={{ marginLeft: 0.5 + "rem" }}>
                        <b>Reporter's Date of Birth : </b>
                      </label>
                      <div></div>
                      <div>
                        <DatePicker
                          color="black"
                          className="form-control"
                          selected={this.state.rep_DOB}
                          onChange={this.onchangeRepDOB}
                        />
                      </div>
                    </div>

                    <div className="col form-group">
                      <TextField
                        label="Reporter's Contact Number :"
                        color="secondary"
                        variant="outlined"
                        required
                        type="tel"
                        value={this.state.rep_contact_number}
                        onChange={this.onchangeRepContactNumber}
                      />
                    </div>

                    <div className="col form-group">
                      <TextField
                        label="Reporter's relationship to missing person :"
                        color="secondary"
                        variant="outlined"
                        required
                        type="text"
                        value={this.state.rep_relationship}
                        onChange={this.onchangeRepRelationship}
                      />
                    </div>
                  </div>
                </TabPanel>

                {/* Missig Person Details */}
                <TabPanel>
                  <div className="text-dark ">
                    <h3>General Information</h3>
                  </div>
                  <br />
                  <br />

                  <div className="form-group">
                    <TextField
                      label="FullName"
                      required
                      color="secondary"
                      type="text"
                      variant="outlined"
                      error={this.state.error1}
                      value={this.state.mp_fullname}
                      onChange={this.onchangeMPersonFullName}
                    />
                    <br></br>
                    <span className="text-danger">
                      {this.state.mpFullnameError}
                    </span>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Nickname: "
                      color="secondary"
                      variant="outlined"
                      required
                      type="text"
                      value={this.state.mp_nickname}
                      error={this.state.error2}
                      onChange={this.onchangeMPersonNickname}
                    />
                    <br></br>
                    <span className="text-danger">
                      {this.state.mpNicknameError}
                    </span>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Address: "
                      color="secondary"
                      variant="outlined"
                      error={this.state.error3}
                      type="text"
                      required
                      value={this.state.mp_address}
                      onChange={this.onchangeMPAddress}
                    />
                    <br></br>
                    <span className="text-danger">
                      {this.state.mpAddressError}
                    </span>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="NIC: "
                      color="secondary"
                      variant="outlined"
                      required
                      type="text"
                      value={this.state.mp_nic}
                      onChange={this.onchangeMPNIC}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Contact Number: "
                      color="secondary"
                      variant="outlined"
                      required
                      type="tel"
                      value={this.state.mp_contact_number}
                      onChange={this.onchangeMPContactNumber}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date of Birth :</b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.mp_DOB}
                        onChange={this.onchangeMPDOB}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Age: "
                      color="secondary"
                      variant="outlined"
                      required
                      type="number"
                      value={this.state.mp_age}
                      onChange={this.onchangeMPAge}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>Gender :</label>
                    <select
                      style={{ marginLeft: 0.5 + "rem" }}
                      id="dropdown-item-button"
                      className="btn btn-outline-dark btn btn-secondary text-light"
                      name="natureOfBodilyHarm"
                      value={this.state.mp_gender}
                      onChange={this.onchangeMPGender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Height (Feet): "
                      color="secondary"
                      variant="outlined"
                      type="number"
                      value={this.state.mp_height}
                      onChange={this.onchangeMPHeight}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Weight (Kilograms): "
                      color="secondary"
                      variant="outlined"
                      type="number"
                      value={this.state.mp_weight}
                      onChange={this.onchangeMPWeight}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Hair Colour : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_hair_color}
                      onChange={this.onchangeMPHaircolor}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Eye Colour : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_eye_color}
                      onChange={this.onchangeMPEyeColor}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      Spectacle User?
                    </label>
                    <select
                      style={{ marginLeft: 0.5 + "rem" }}
                      id="dropdown-item-button"
                      className="btn btn-outline-dark btn btn-secondary text-light"
                      name="natureOfBodilyHarm"
                      value={this.state.mp_spectacle_user}
                      onChange={this.onchangeMPSpectacleUser}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Features : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_features}
                      onChange={this.onchangeMPFeatures}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      Communication Skills
                    </label>
                    <select
                      style={{ marginLeft: 0.5 + "rem" }}
                      id="dropdown-item-button"
                      className="btn btn-outline-dark btn btn-secondary text-light"
                      name="communicationSkills"
                      value={this.state.mp_communication_skills}
                      onChange={this.onchangeMPCommunicationSkills}
                    >
                      <option value="Sinhala">Sinhala</option>
                      <option value="Tamil">Tamil</option>
                      <option value="English">English</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Headwear : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_head_wear}
                      onChange={this.onchangeMPHeadWear}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Footwear : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_foot_wear}
                      onChange={this.onchangeMPFootWear}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Jewellery : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_jewellery}
                      onChange={this.onchangeMPJewellery}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Bank Details : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_bank_details}
                      onChange={this.onchangeMPBankDetails}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Passport Details : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_passport_details}
                      onChange={this.onchangeMPPassportDetails}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Vehicle Details : : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_vehicle_details}
                      onChange={this.onchangeMPVehicleDetails}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Social Media Details : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_social_details}
                      onChange={this.onchangeMPSocialMediaDetails}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="School / Workplace : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_school_workplace}
                      onChange={this.onchangeMPSchoolWorkplace}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Health Conditions : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_health_conditions}
                      onChange={this.onchangeMPHealthConditions}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Allergies : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_allergies}
                      onChange={this.onchangeMPAllergies}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Medications : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_medications}
                      onChange={this.onchangeMPMedications}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="History of Surgery : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_history_of_surgery}
                      onChange={this.onchangeMPHistoryofSurgery}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="DNA Item : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_dna_items}
                      onChange={this.onchangeMPDNAItems}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>When was he/she last seen? :</b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.mp_when_last_seen}
                        onChange={this.onchangeMPWhenLastSeen}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Where was he/she last seen? : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_where_last_seen}
                      onChange={this.onchangeMPWhereLastSeen}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Last Person to See Him/Her : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_last_person_to_see}
                      onChange={this.onchangeMPLastPersonToSee}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Pets where Taken/ Left behind : "
                      color="secondary"
                      variant="outlined"
                      type="text"
                      value={this.state.mp_pets}
                      onChange={this.onchangeMPPets}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      Has gone missing before? :
                    </label>
                    <select
                      style={{ marginLeft: 0.5 + "rem" }}
                      id="dropdown-item-button"
                      className="btn btn-outline-dark btn btn-secondary text-light"
                      name="natureOfBodilyHarm"
                      value={this.state.mp_missing_before}
                      onChange={this.onchangeMPMissingBefore}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Suspected reason to go missing: "
                      color="secondary"
                      variant="outlined"
                      type="textArea"
                      value={this.state.mp_missing_reason}
                      onChange={this.onchangeMPReasonToGoMissing}
                    />
                  </div>

                  <div className="form-group">
                    <TextField
                      label="Additional Information: "
                      color="secondary"
                      variant="outlined"
                      type="textArea"
                      value={this.state.mp_additional_info}
                      onChange={this.onchangeMPAdditionalInformation}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      style={{ marginLeft: 0.5 + "rem" }}
                      value="Submit"
                      className="btn btn-outline-danger btn btn-dark"
                    />
                  </div>
                    
                </TabPanel>
              </form>
            </div>
          </div>
        </div>
      </Tabs>
    );
  }
}
