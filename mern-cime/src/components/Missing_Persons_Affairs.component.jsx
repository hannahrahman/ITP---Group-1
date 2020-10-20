import React, { Component } from "react";
import MissingPersonsAffairsNavbar from "../NavBars/MissingPersonsAffairsNavbar.component";
import MissingPersonComplaintForm from "./missing_person_complaint_form";
import VeiwMissingPersonsComplains from "./view_missing_person.component";
import MissingPersonList from "./missingPersonAffairsList.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class MissingPersonsAffairs extends Component {
  render() {
    return (
      <Router>
        <meta
          name="viewpoint"
          content="width=device-width , initial-scale=1"
        ></meta>
        <div style={{ marginTop: -234 + "rem" }}>
          <div style={{ marginLeft: 15 + "rem" }}>
            <MissingPersonsAffairsNavbar />
          </div>

          {/* <div class="container" style={{ marginTop: 1 + "rem" }}>
            <MissingPersonComplaintForm />
          </div> */}
          <div style={{ marginLeft: 10 + "rem" }}>
            <Route
              path="/addComplaint"
              exact
              component={MissingPersonComplaintForm}
            />{" "}
          </div>
          <Route
            path="/viewComplaint"
            exact
            component={MissingPersonList}
          />

          {/* <Route exact path="/ComplainsList" exact component={ComplainsList} />
          <Route path="/edit/:id" exact component={EditComplain} />
          <Route path="/Complain" exact component={CreateComplain} />
          <Route path="/user" exact component={CreateUser} />
          <Route path="/Appeal" exact component={CreateAppeal} /> */}
        </div>
      </Router>
    );
  }
}
