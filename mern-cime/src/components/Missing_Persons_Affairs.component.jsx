import React, { Component } from "react";
import MissingPersonsAffairsNavbar from "../NavBars/MissingPersonsAffairsNavbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ComplainsList from "./complains-list.component";
import EditComplain from "./edit-complain.component";
import CreateComplain from "./create-complain.component";
import CreateUser from "./create-user.component";
import CreateAppeal from "./create-appeal.component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class MissingPersonsAffairs extends Component {
  constructor(props) {
    super(props);

    this.onchangeRefno = this.onchangeRefno.bind(this);
    this.onchangecomplainType = this.onchangecomplainType.bind(this);
    this.onchangeFName = this.onchangeFName.bind(this);
    this.onchangeLName = this.onchangeLName.bind(this);
    this.onchangeNic = this.onchangeNic.bind(this);
    this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this);
    this.onchangeReligion = this.onchangeReligion.bind(this);
    this.onchangeSex = this.onchangeSex.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeWeapon = this.onchangeWeapon.bind(this);
    this.onchangeDate = this.onchangeDate.bind(this);
    this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      refNo: "",
      complainType: "",
      fname: "",
      lname: "",
      nic: "",
      dateOfBirth: new Date(),
      religion: "",
      sex: "",
      address: "",
      phone: "",
      description: "",
      weapon: "",
      date: new Date(),
      officer_incharge: "",
    };
  }
  onchangeRefno(e) {
    this.setState({
      refNo: e.target.value,
    });
  }

  onchangecomplainType(e) {
    this.setState({
      complainType: e.target.value,
    });
  }

  onchangeFName(e) {
    this.setState({
      fname: e.target.value,
    });
  }

  onchangeLName(e) {
    this.setState({
      lname: e.target.value, //target is the text box and the value is the value in the text box that is assigned to the name attribute
    });
  }

  onchangeNic(e) {
    this.setState({
      nic: e.target.value,
    });
  }

  onchangeDateOfBirth(date) {
    this.setState({
      dateOfBirth: date,
    });
  }

  onchangeReligion(e) {
    this.setState({
      religion: e.target.value,
    });
  }

  onchangeSex(e) {
    this.setState({
      sex: e.target.value,
    });
  }

  onchangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onchangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onchangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onchangeWeapon(e) {
    this.setState({
      weapon: e.target.value,
    });
  }

  onchangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onchangeOfficerIncharge(e) {
    this.setState({
      officer_incharge: e.target.value,
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
      <Router>
        <meta
          name="viewpoint"
          content="width=device-width , initial-scale=1"
        ></meta>
        <div style={{ marginTop: -59 + "rem" }}>
          <div style={{ marginLeft: 16 + "rem" }}>
            <MissingPersonsAffairsNavbar />
          </div>

          <div class="container" style={{ marginTop: 1 + "rem" }}>
            <div
              class="card text-danger  bg-dark  mb-3"
              style={{ marginLeft: 12 + "rem" }}
            >
              <div class="card-header">
                <h3>Missing Person Complaint Form</h3>
              </div>
              <div class="card-body"></div>

              <div class="container">
                <form
                  onsubmit={this.onsubmit}
                  style={{ margin: "auto" }}
                  class=" needs-validation"
                  novalidate="true"
                >
                  <div className="form-group">
                    <label>Complaint ID: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Complaint Type: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Police Station Location: </label>
                    <input type="text" className="form-control" />
                  </div>

                  <hr color="black" />

                  {/* Interviewing Officer's Details */}
                  <h5>Officer's Details</h5>
                  <div className="form-group">
                    <label>Officer ID: </label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Officer Name: </label>
                    <input type="text" className="form-control" />
                  </div>

                  <hr color="black" />

                  {/* Reporte's Details */}
                  <h5>Reporter's Details</h5>
                  <div className="form-group">
                    <label>Full Name: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>NIC: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Address: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Contact Number: </label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Relationship(s) to Missing Person: </label>
                    <input type="text" className="form-control" />
                  </div>

                  <hr color="black" />

                  {/* Missing Person's Details */}
                  <h5>Missing Person's Details</h5>
                  <div className="form-group">
                    <label>Full Name: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>NIC: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Gender: </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Contact Number: </label>
                    <input type="number" className="form-control" />
                  </div>

                  {/* Submit Button */}
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Submit Complaint"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Route exact path="/ComplainsList" exact component={ComplainsList} />
          <Route path="/edit/:id" exact component={EditComplain} />
          <Route path="/Complain" exact component={CreateComplain} />
          <Route path="/user" exact component={CreateUser} />
          <Route path="/Appeal" exact component={CreateAppeal} />
        </div>
      </Router>
    );
  }
}
