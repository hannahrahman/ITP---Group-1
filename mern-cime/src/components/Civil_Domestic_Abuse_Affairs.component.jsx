import React, { Component } from "react";
import CivilDomesticAbuseAffairsNavbar from "../NavBars/CivilDomesticAbuseAffairsNavbar.jsx";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import DomesticAbuseComplainList from "./domestic-abuse-complain-list.component";
import CreateDomesticAbuseComplain from "./create-domestic-abuse-complain.component";
import CreateDomesticAbuseApeal from "./create-domestic-abuse-apeal.component";
import CreateDomesticAbuseLegal from "./create-domestic-abuse-legal-form.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import EditDomesticAbuseComplain from "./edit-domestic-abuse-complain.component";

export default class CivilDomesticAbuseAffairs extends Component {
  render() {
    return (
      <div>
        <Router>
          <div >
            <div style={{ marginLeft: 17 + "rem" }}>
              <CivilDomesticAbuseAffairsNavbar />
            </div>
            <Redirect exact from="/" to="DomesticAbuseComplainList" />
            <Route path="/DomesticAbuseComplainList" exact component={DomesticAbuseComplainList} />
            <Route path="/DomesticAbuseComplain" exact component={CreateDomesticAbuseComplain} />
            <Route path="/DomesticAbuseApeal" exact component={CreateDomesticAbuseApeal} />
            <Route path="/DomesticAbuseLegal" exact component={CreateDomesticAbuseLegal} />
            <Route path="/EditDomesticAbuseComplain/:id" exact component={EditDomesticAbuseComplain} />
          </div>
        </Router>
      </div>
    );

  }

}


