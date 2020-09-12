import React, { Component } from "react";
import OnlineFinePaymentNavbar from "../NavBars/OnlineFinePaymentNavbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";


export default class onlinefineDetailsForm extends Component {
  constructor(props) {
    super(props);

    this.onchangeFullName = this.onchangeFullName.bind(this);
    this.onchangeAddress= this.onchangeAddress.bind(this);
    this.onchangeMobileNum = this.onchangeMobileNum.bind(this);
    this.onchangeEmailId = this.onchangeEmailId.bind(this);
    this.onchangeFineType = this.onchangeFineType.bind(this);
    this.onchangeIncidentArea = this.onchangeIncidentArea.bind(this);
    this.onchangePoliceStation = this.onchangePoliceStation.bind(this);
    this.onchangeFineRefslpNo = this.onchangeFineRefslpNo.bind(this);
    this.onchangePoliceOfficerNo = this.onchangePoliceOfficerNo.bind(this);
    this.onchangeAmountOFfine= this.onchangeAmountOFfine.bind(this);
    this.onchangeIssueDate = this.onchangeIssueDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
       
        fullName:'',
        address:'',
        mobileNum:'',
        emailId:'',
        fineType:'',
        incidentArea:'',
        policeStation:'',
        fineRefslpNo:'',
        policeOfficerNo:'',
        amountOFfine:'',
        issueDate:new Date(),
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

  onchangeIssueDate(Date) {
    this.setState({
        issueDate: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const online_Payment = {

    fullName: this.state.fullName,
    address: this.state.address,
    mobileNum: this.state.mobileNum,
    emailId: this.state.emailId,
    fineType: this.state.fineType,
    incidentArea: this.state.incidentArea,
    policeStation: this.state.policeStation,
    fineRefslpNo: this.state.fineRefslpNo,
    policeOfficerNo: this.state.policeOfficerNo,
    amountOFfine: this.state.amountOFfine,
    issueDate: this.state.issueDate,
    
    };
    console.log(online_Payment);

    window.location = "/";
  }
  render() {
    return (
      <Router>
        <meta
          name="viewpoint"
          content="width=device-width , initial-scale=1"
        ></meta>
        <div style={{ marginTop: -58 + "rem" }}>
          <div style={{ marginLeft: 18 + "rem" }}> 
            <onlinefineNavbar />
          </div>

          <div class="container" style={{ marginTop: 1 + "rem" }}>
           
            <div
              
               class="card text-danger  bg-dark  mb-3"
               style={{ marginLeft: 5 + "rem" }}
           
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
                    
                        <b>RefNo:</b>
                   
            </label>
            
            <input
                      required
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.refNo}
                      onChange={this.onchangeRefno}
                   
            />
                  </div>

               
             <div className="form-group">
             <label style={{ marginLeft: 0.5 + "rem" }}>
                    
                      <b>Complain Type: </b>
                    
             </label>
                   
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.complainType}
                      className="form-control is-invalid"
                      onChange={this.onchangecomplainType}
                   
                   />
                  
             </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>First Name: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.fname}
                      className="form-control is-invalid"
                      onChange={this.onchangeFName}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Last Name :</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.lname}
                      className="form-control is-invalid"
                      onChange={this.onchangeLName}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>NIC Number :</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.nic}
                      className="form-control is-invalid"
                      onChange={this.onchangeNic}
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
                      <b>Religion: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.religion}
                      className="form-control is-invalid"
                      onChange={this.onchangeReligion}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>SEX: </b>
                    </label>
                    <br />
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div style={{ marginLeft: 0.5 + "rem" }}>
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            value={this.state.sex}
                            onChange={this.onchangeSex}
                          />
                          <label>
                            <b>Male </b>
                          </label>
                        </div>
                      </div>

                      <div style={{ marginLeft: 5 + "rem" }}>
                        <input
                          type="radio"
                          aria-label="Radio button for following text input"
                          name="gender"
                          id="Female"
                          value={this.state.sex}
                          onChange={this.onchangeSex}
                        />
                        <label>
                          <b> Female </b>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Address:</b>
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
                      <b>Phone: </b>
                    </label>
                    <input
                      type="number"
                      required
                      NumberFormat
                      format="### ###-####"
                      mask="_"
                      className="form-control"
                      value={this.state.phone}
                      className="form-control is-invalid"
                      onChange={this.onchangePhone}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Description: </b>
                    </label>
                    <textarea
                      type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      className="form-control is-invalid"
                      onChange={this.onchangeDescription}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Weapon(Optionl)</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.weapon}
                      onChange={this.onchangeWeapon}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date: </b>
                    </label>
                    <div></div>
                    <DatePicker
                      className="form-control"
                      selected={this.state.date}
                      className="form-control is-invalid"
                      onChange={this.onchangeDate}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Officer Incharge:</b>
                    </label>
                    <input
                      type="text"
                      name="offi"
                      id="offi"
                      required
                      className="form-control"
                      value={this.state.officer_incharge}
                      onChange={this.onchangeOfficerIncharge}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      id="submit"
                      style={{ marginLeft: 0.5 + "rem" }}
                      value="Submit"
                      class="needs-validationbtn"
                      className="btn btn-outline-danger btn btn-dark"
                      class="btndisabled"
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
