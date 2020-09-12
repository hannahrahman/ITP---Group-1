import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class MissingPersonComplaintForm extends Component {
  constructor(props) {
    super(props);

    //MP - Missing Person
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

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
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
      mp_when_last_seen: "",
      mp_last_person_to_see: "",
      mp_pets: "",
      mp_missing_before: "",
      mp_additional_info: "",
    };
  }
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

  onchangeMPFeatures(date) {
    this.setState({
      mp_features: date,
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

  onchangeMPWhenLastSeen(e) {
    this.setState({
      mp_when_last_seen: e.target.value,
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

  onSubmit(e) {
    e.preventDefault();

    const complain = {
      refNo: this.state.refNo,
      complainType: this.state.complainType,
      fname: this.state.fname,
      lname: this.state.lname,
      nic: this.state.nic,
      dateOfBirth: this.state.dateOfBirth,
      religion: this.state.religion,
      sex: this.state.sex,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      weapon: this.state.weapon,
      date: this.state.date,
      officer_incharge: this.state.officer_incharge,
    };
    console.log(complain);

    window.location = "/";
  }

  render() {
    return (
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
          <div class="tab text-danger">
            <Tab style={{ marginLeft: 20 + "rem" }}>
              <b>Police Station Details</b>
            </Tab>
            <Tab>
              <b>Missing Person's Details</b>
            </Tab>
            <Tab>
              <b>Examinee Details</b>
            </Tab>
            <Tab>
              <b>Examinee Details part 2</b>
            </Tab>
          </div>
        </TabList>

        <div className="container" style={{ marginTop: 1 + "rem" }}>
          <div
            className="card text-white bg-dark"
            style={{ marginLeft: 8.5 + "rem" }}
          >
            <div className="container">
              <form
                onSubmit={this.onSubmit}
                style={{ margin: "auto" }}
                className=" needs-validation"
                noValidate={true}
              >
                <TabPanel>
                  <div className="card-header bg-dark">
                    <h3>Police Station Details</h3>
                  </div>
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Reference Number:</b>
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.refNo}
                      onChange={this.onchangeRefno}
                    />
                  </div>
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>dateOfIssue: </b>
                    </label>
                    <div></div>
                    <DatePicker
                      className="form-control is-invalid"
                      selected={this.state.dateOfIssue}
                      onChange={this.onchangeDateOfIssue}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>victim Full Name: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.victimFullName}
                      onChange={this.onchangeVictimFullName}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date Of Birth: </b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.dateOfBirth}
                        onChange={this.onchangeDateOfBirth}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Age :</b>
                    </label>
                    <input
                      type="number"
                      required
                      value={this.state.age}
                      className="form-control is-invalid"
                      onChange={this.onchangeAge}
                    />
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="card-header bg-dark">
                    <h3>General Information</h3>
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Full Name:</b>
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_fullname}
                      onChange={this.onchangeMPersonFullName}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Nickname: </b>
                    </label>
                    <div></div>
                    <input
                      required
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_nickname}
                      onChange={this.onchangeMPersonNickname}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Address: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.mp_address}
                      onChange={this.onchangeMPAddress}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>NIC:</b>
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_nic}
                      onChange={this.onchangeMPNIC}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Contact Number:</b>
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control is-invalid"
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
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Age :</b>
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control is-invalid"
                      value={this.state.mp_age}
                      onChange={this.onchangeMPAge}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Gender :</b>
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control is-invalid"
                      value={this.state.mp_gender}
                      onChange={this.onchangeMPGender}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Height :</b>
                    </label>
                    <input
                      type="number"
                      className="form-control is-invalid"
                      value={this.state.mp_height}
                      onChange={this.onchangeMPHeight}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Weight :</b>
                    </label>
                    <input
                      type="number"
                      className="form-control is-invalid"
                      value={this.state.mp_weight}
                      onChange={this.onchangeMPWeight}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Hair Colour :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_hair_color}
                      onChange={this.onchangeMPHaircolor}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Eye Colour :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
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
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Features :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
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
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Headwear :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_head_wear}
                      onChange={this.onchangeMPHeadWear}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Footwear :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_foot_wear}
                      onChange={this.onchangeMPFootWear}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Jewellery :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_jewellery}
                      onChange={this.onchangeMPJewellery}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Bank Details :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_bank_details}
                      onChange={this.onchangeMPBankDetails}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Passport Details :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_passport_details}
                      onChange={this.onchangeMPPassportDetails}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Vehicle Details :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_vehicle_details}
                      onChange={this.onchangeMPVehicleDetails}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Social Media Details :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_social_details}
                      onChange={this.onchangeMPSocialMediaDetails}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>School / Workplace :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_social_details}
                      onChange={this.onchangeMPSocialMediaDetails}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Health Conditions :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_health_conditions}
                      onChange={this.onchangeMPHealthConditions}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Allergies :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_allergies}
                      onChange={this.onchangeMPAllergies}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Medications :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_medications}
                      onChange={this.onchangeMPMedications}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>History of Surgery :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_history_of_surgery}
                      onChange={this.onchangeMPHistoryofSurgery}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>DNA Ites :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_dna_items}
                      onChange={this.onchangeMPDNAItems}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>DNA Ites :</b>
                    </label>
                    <input
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.mp_dna_items}
                      onChange={this.onchangeMPDNAItems}
                    />
                  </div>


                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>When was he/she last seen?  :</b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.mp_DOB}
                        onChange={this.onchangeMPDOB}
                      />
                    </div>
                  </div>

                



















                </TabPanel>
                <TabPanel>
                  <div className="card-header bg-dark">
                    <h3>Examinee Details</h3>
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Registration Number :</b>
                    </label>
                    <input
                      required
                      type="number"
                      className="form-control is-invalid"
                      value={this.state.registrationNumber}
                      onChange={this.onchangeRegistrationNumber}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Nominee’s Name : </b>
                    </label>
                    <div></div>
                    <input
                      required
                      type="text"
                      className="form-control is-invalid"
                      value={this.state.nomineeName}
                      onChange={this.onchangeNomineeName}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Address: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.address}
                      onChange={this.onchangeAddress}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Reason : </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.reason}
                      onChange={this.onchangeReason}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Rank :</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.rank}
                      onChange={this.onchangeRank}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      Nature Of Bodily Harm
                    </label>
                    <select
                      style={{ marginLeft: 0.5 + "rem" }}
                      id="dropdown-item-button"
                      className="btn btn-outline-dark btn btn-secondary text-light"
                      name="natureOfBodilyHarm"
                      value={this.state.natureOfBodilyHarm}
                      onChange={this.onchangeNatureOfBodilyHarm}
                    >
                      <option>Select a field</option>
                      <option value="Abrasion">Abrasion</option>
                      <option value="Cut">Cut</option>
                      <option value="Bite">Bite</option>
                      <option value="Contusion">Contusion</option>
                      <option value="Fractured">Fractured</option>
                      <option value="Dislocation">Dislocation</option>
                      <option value="Laceration">Laceration</option>
                      <option value="Firearm Injury">Firearm Injury</option>
                      <option value="Explosive Injury">Explosive Injury</option>
                      <option value="Stab">Stab</option>
                      <option value="Burns">Burns</option>
                      <option value="Other">Other</option>
                      <option value="None">None</option>
                    </select>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="card-header bg-dark">
                    <h3>Examinee Details part 2</h3>
                  </div>
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Weapon :</b>
                    </label>
                    <select
                      style={{ marginLeft: 0.5 + "rem" }}
                      id="dropdown-item-button"
                      className="btn btn-outline-dark btn btn-secondary text-light"
                      name="weapon"
                      value={this.state.weapon}
                      onChange={this.onchangeWeapon}
                    >
                      <option>Select a field</option>
                      <option value="Blunt">Blunt</option>
                      <option value="Sharp">Sharp</option>
                      <option value="Firearm">Firearm</option>
                      <option value="Explosive device">Explosive device</option>
                      <option value="Others">Others</option>
                    </select>

                    <div className="form-group">
                      <label style={{ marginLeft: 0.5 + "rem" }}>
                        <b>Category Of Hurt :</b>
                      </label>
                      <select
                        style={{ marginLeft: 0.5 + "rem" }}
                        id="dropdown-item-button"
                        className="btn btn-outline-dark btn btn-secondary text-light"
                        name="categoryOfHurt"
                        value={this.state.categoryOfHurt}
                        onChange={this.onchangeCategoryOfHurt}
                      >
                        <option>Select a field</option>
                        <option value="Non Grievous">Non Grievous</option>
                        <option value="Grievous">Grievous</option>
                        <option value="Fatal">Fatal</option>
                        <option value="Does It Endanger life?">
                          Does It Endanger life?
                        </option>
                      </select>
                      <div className="form-group">
                        <label style={{ marginLeft: 0.5 + "rem" }}>
                          <b>Consumption Of Alcohol:</b>
                        </label>
                        <select
                          style={{ marginLeft: 0.5 + "rem" }}
                          id="dropdown-item-button"
                          className="btn btn-outline-dark btn btn-secondary text-light"
                          name="consumptionOfAlcohol"
                          value={this.state.consumptionOfAlcohol}
                          onChange={this.onchangeConsumptionOfAlcohol}
                        >
                          <option>Select a field</option>
                          <option value="Breathing / Smelling">
                            Breathing / Smelling
                          </option>
                          <option value="Under Influence">
                            Under Influence
                          </option>
                          <option value="Negative">Negative</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label style={{ marginLeft: 0.5 + "rem" }}>
                          <b>Other:</b>
                        </label>
                        <select
                          style={{ marginLeft: 0.5 + "rem" }}
                          id="dropdown-item-button"
                          className="btn btn-outline-dark btn btn-secondary text-light"
                          name="other"
                          value={this.state.other}
                          onChange={this.onchangeOther}
                        >
                          <option className="container">Select a field</option>
                          <option value="Signs Of Vaginal/Hymen Penetration Present">
                            Signs Of Vaginal/Hymen Penetration Present
                          </option>
                          <option value="Signs Of Anal Penetration">
                            Signs Of Anal Penetration
                          </option>
                          <option value="Signs Consistent With Inter Labial Penetration Present">
                            Signs Consistent With Inter Labial Penetration
                            Present
                          </option>
                          <option value="Investigations">Investigations</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Remarks :</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.remarks}
                      onChange={this.onchangeRemarks}
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
