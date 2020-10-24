import React, { Component } from "react";
import MissingPersonsAffairsNavbar from "../NavBars/MissingPersonsAffairsNavbar.component";
import MissingPersonComplaintForm from "./missing_person_complaint_form";
import MissingPersonList from "./missingPersonAffairsList.component";
import MissingPersonTableRow from "./missingPersonTableRow";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

export default class MissingPersonsAffairs extends Component {

  render() {
    return (
      <div>
        <Router>
          <div >
            <div style={{ marginLeft: 17 + "rem" }}>
            <MissingPersonsAffairsNavbar />
            </div>

            <Route path="/addComplaint" exact component={MissingPersonComplaintForm} />
            <Route path="/viewComplaint" exact component={MissingPersonList} />
            <Route path="/editComplaint/:id" exact component={MissingPersonTableRow} />


          </div>
        </Router>
      </div>
    );
  }
}
