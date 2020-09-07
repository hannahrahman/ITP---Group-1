import React, { Component } from 'react'
import MiscellaneousComplaintsNavbar from "../NavBars/MiscellaneousNavbar.component"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ComplainsList from "./complains-list.component"
import EditComplain from "./edit-complain.component"
import CreateComplain from "./create-complain.component"
import CreateUser from "./create-user.component"
import DatePicker from "react-datepicker";


export default class MiscellaneousComplaints extends Component {
    constructor(props) {
        super(props);
    
        this.onchangeRefno = this.onchangeRefno.bind(this);
        this.onchangefullname = this.onchangefullname.bind(this);
        this.onchangephonenumber = this.onchangephonenumber.bind(this);
        this.onchangenic = this.onchangenic.bind(this);
        this.onchangedate = this.onchangedate.bind(this);
        this.onchangedescription = this.onchangedescription.bind(this);
        this.onchangedateofincident = this.onchangedateofincident.bind(this);
        this.onchangepersonsinvolved = this.onchangepersonsinvolved.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          refNo: "",
          fullname: "",
          phonenumber: "",
          nic: "",
          date: new Date(),
          description: "",
          dateofincident: new Date(),
          personsinvolved: "",
          
        };
      }
      onchangeRefno(e) {
        this.setState({
          refNo: e.target.value,
        });
      }
    
      onchangefullname(e) {
        this.setState({
          fullname: e.target.value,
        });
      }
    
      onchangephonenumber(e) {
        this.setState({
          phonenumber: e.target.value,
        });
      }
    
      onchangenic(e) {
        this.setState({
          nic: e.target.value, //target is the text box and the value is the value in the text box that is assigned to the name attribute
        });
      }
    
    
      onchangedate(date) {
        this.setState({
          date: date,
        });
      }
    
      onchangedescription(e) {
        this.setState({
          description: e.target.value,
        });
      }
    
      onchangedateofincident(date) {
        this.setState({
          dateofincident: date,
        });
      }
    
      onchangepersonsinvolved(e) {
        this.setState({
          personsinvolved: e.target.value,
        });
      }

      onSubmit(e) {
        e.preventDefault();
    
        const complain = {
          refNo: this.state.refNo,
          fullname: this.state.complainType,
          phonenumber: this.state.fname,
          nic: this.state.lname,
          date: this.state.nic,
          description: this.state.dateOfBirth,
          dateofincident: this.state.religion,
          personsinvolved: this.state.sex,
          
        };
        console.log(complain);
    
        window.location = "/";
      }




    
    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -55.1 + 'rem' }}>
                    <div style={{ marginLeft: 18 + 'rem' }} >
                        <MiscellaneousComplaintsNavbar />
                    </div>

                    <div class="container" style={{ marginTop: 1 + "rem" }}>
            <div
              class="card text-danger  bg-dark  mb-3"
              style={{ marginLeft: 12 + "rem" }}
            >
              <div class="card-header">
                <h3>Add a Miscellaneous Complaint</h3>
                <h4>Your Confidentiality will be ensured.</h4>
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
                      <b>Full Name: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.fullname}
                      className="form-control is-invalid"
                      onChange={this.onchangefullname}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Phone Number: </b>
                    </label>
                    <input
                      type="number"
                      required
                      NumberFormat
                      format="### ###-####"
                      mask="_"
                      className="form-control"
                      value={this.state.phonenumber}
                      className="form-control is-invalid"
                      onChange={this.onchangephonenumber}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date:  </b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onchangedate}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Please describe nature of incident/complaint:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      className="form-control is-invalid"
                      onChange={this.onchangedescription}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date of incident:  </b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.dateofincident}
                        onChange={this.onchangedateofincident}
                      />
                    </div>
                  </div>
                           
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Persons Involved in the incident: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.personsinvolved}
                      className="form-control is-invalid"
                      onChange={this.onchangepersonsinvolved}
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
                    
                </div>

            </Router>

        )
    }

}