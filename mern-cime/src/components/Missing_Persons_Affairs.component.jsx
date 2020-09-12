import React, { Component } from "react";
import MissingPersonsAffairsNavbar from "../NavBars/MissingPersonsAffairsNavbar.component";
import MissingPersonComplaintForm from "./missing_person_complaint_form";
import VeiwMissingPersonsComplains from "./view_missing_person.component"
// import VeiwMissingPersonComplaint from "./view_missing_person.complaints";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ComplainsList from "./complains-list.component";
// import EditComplain from "./edit-complain.component";
// import CreateComplain from "./create-complain.component";
// import CreateUser from "./create-user.component";
// import CreateAppeal from "./create-appeal.component";
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
        <div style={{ marginTop: -101 + "rem" }}>
          <div style={{ marginLeft: 15 + "rem" }}>
            <MissingPersonsAffairsNavbar />
          </div>

          {/* <div class="container" style={{ marginTop: 1 + "rem" }}>
            <MissingPersonComplaintForm />
          </div> */}
          <Route path="/addComplaint" exact component={MissingPersonComplaintForm} /> 
          <Route path="/viewComplaint" exact component={VeiwMissingPersonsComplains} /> 
          

          
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
