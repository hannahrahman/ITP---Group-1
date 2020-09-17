import React, { Component } from "react";
import CrimeNavbar from "../NavBars/CrimeNavbar.component";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ComplainsList from "./complains-list.component";
import EditComplain from "./edit-complain.component";
import CreateComplain from "./create-complain.component";
import CreateLEF from "./add_lef_form.component";
import CreateAppeal from "./create-appeal.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

export default class CrimeDivision extends Component {
  render() {
    return (
      <div>
        <Router>
          <div style={{ marginTop: -99.3 + "rem" }}>
            <div style={{ marginLeft: 18 + "rem" }}>
              <CrimeNavbar />
            </div>
            <Route path="/Complains_List" exact component={ComplainsList} />
            <Route path="/EditComplain" exact component={EditComplain} />
            <Route path="/Complain" exact component={CreateComplain} />
            <Route path="/LEF" exact component={CreateLEF} />
            <Route path="/CreateAppeal" exact component={CreateAppeal} />
          </div>
        </Router>
      </div>
    );

  }

}
