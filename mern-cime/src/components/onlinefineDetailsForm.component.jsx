import React, { Component } from "react";
import OnlineFinePaymentNavbar from "../NavBars/OnlineFinePaymentNavbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from 'axios'


export default class onlinefineDetailsForm extends Component {
  constructor(props) {
    super(props);

    this.onchangeFullName = this.onchangeFullName.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangeMobileNum = this.onchangeMobileNum.bind(this);
    this.onchangeEmailId = this.onchangeEmailId.bind(this);
    this.onchangeFineType = this.onchangeFineType.bind(this);
    this.onchangeIncidentArea = this.onchangeIncidentArea.bind(this);
    this.onchangePoliceStation = this.onchangePoliceStation.bind(this);
    this.onchangeFineRefslpNo = this.onchangeFineRefslpNo.bind(this);
    this.onchangePoliceOfficerNo = this.onchangePoliceOfficerNo.bind(this);
    this.onchangeAmountOFfine = this.onchangeAmountOFfine.bind(this);
    this.onchangeIssueDate = this.onchangeIssueDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      fullName: '',
      address: '',
      mobileNum: new Number(),
      emailId: '',
      fineType: '',
      incidentArea: '',
      policeStation: '',
      fineRefslpNo: '',
      policeOfficerNo: '',
      amountOFfine: new Number,
      issueDate: new Date(),
    };
  }
  onchangeFullName(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  onchangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onchangeMobileNum(e) {
    this.setState({
      mobileNum: e.target.value,
    });
  }

  onchangeEmailId(e) {
    this.setState({
      emailId: e.target.value,
    });
  }

  onchangeFineType(e) {
    this.setState({
      fineType: e.target.value,
    });
  }

  onchangeIncidentArea(e) {
    this.setState({
      incidentArea: e.target.value,
    });
  }

  onchangePoliceStation(e) {
    this.setState({
      policeStation: e.target.value,
    });
  }

  onchangeFineRefslpNo(e) {
    this.setState({
      fineRefslpNo: e.target.value,
    });
  }

  onchangePoliceOfficerNo(e) {
    this.setState({
      policeOfficerNo: e.target.value,
    });
  }

  onchangeAmountOFfine(e) {
    this.setState({
      amountOFfine: e.target.value,
    });
  }

  onchangeIssueDate(date) {
    this.setState({
      issueDate: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const online_Payment = {

      fullName: this.state.fullName,
      address: this.state.address,
      mobileNum: Number(this.state.mobileNum),
      emailId: this.state.emailId,
      fineType: this.state.fineType,
      incidentArea: this.state.incidentArea,
      policeStation: this.state.policeStation,
      fineRefslpNo: this.state.fineRefslpNo,
      policeOfficerNo: this.state.policeOfficerNo,
      amountOFfine: Number(this.state.amountOFfine),
      issueDate: this.state.issueDate,

    };
    console.log(online_Payment);
    console.log(online_Payment)
    axios.post('http://localhost:5000/onlinePayment/add', online_Payment).then(res => console.log(res.data));

    //window.location = "/";
  }
  render() {
    return (


      <div class="container" style={{ marginTop: 1 + "rem" }}>

        <div

          class="card text-danger  bg-dark  mb-3"
          style={{ marginLeft: 9 + "rem" }}

        >
          <div class="card-header">

            <h3>Add a new fine</h3>

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
                <label style={{ marginLeft: 0.5 + "rem" }}>

                  <b>Full name:</b>

                </label>

                <input
                  required
                  type="text"
                  required
                  className="form-control is-invalid"
                  value={this.state.fullName}
                  onChange={this.onchangeFullName}

                />
              </div>


              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>

                  <b>Address: </b>

                </label>

                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.address}
                  className="form-control is-invalid"
                  onChange={this.onchangeAddress}

                />

              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Mobile number: </b>
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.mobileNum}
                  className="form-control is-invalid"
                  onChange={this.onchangeMobileNum}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Email :</b>
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.emailId}
                  className="form-control is-invalid"
                  onChange={this.onchangeEmailId}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Fine type :</b>
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.fineType}
                  className="form-control is-invalid"
                  onChange={this.onchangeFineType}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Incident area: </b>
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.incidentArea}
                  className="form-control is-invalid"
                  onChange={this.onchangeIncidentArea}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Police station:</b>
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.policeStation}
                  className="form-control is-invalid"
                  onChange={this.onchangePoliceStation}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Fine Reference slip number: </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.fineRefslpNo}
                  className="form-control is-invalid"
                  onChange={this.onchangeFineRefslpNo}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Police officer number: </b>
                </label>
                <textarea
                  type="text"
                  required
                  className="form-control"
                  value={this.state.policeOfficerNo}
                  className="form-control is-invalid"
                  onChange={this.onchangePoliceOfficerNo}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>amount of fine</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.amountOFfine}
                  onChange={this.onchangeAmountOFfine}
                />
              </div>

              <div className="form-group">
                <label style={{ marginLeft: 0.5 + "rem" }}>
                  <b>Issue Date: </b>
                </label>
                <div></div>
                <DatePicker
                  className="form-control"
                  selected={this.state.issueDate}
                  className="form-control is-invalid"
                  onChange={this.onchangeIssueDate}
                />
              </div>
              <div className="form-group">
                <input type="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
