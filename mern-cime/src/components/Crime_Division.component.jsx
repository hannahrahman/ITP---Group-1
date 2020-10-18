import React, { Component } from "react";
import CrimeNavbar from "../NavBars/CrimeNavbar.component";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CrimeComplainList from "./complains-list.component";
import EditComplain from "./edit-complain.component";
import CreateComplain from "./create-complain.component";
import CreateLEF from "./add_lef_form.component";
import EditCrimeComplain from "./edit-complain.component"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

export default class CrimeDivision extends Component {
  render() {
    return (
      <div>
        <Router>
          <div >
            <div style={{ marginLeft: 17 + "rem" }}>
              <CrimeNavbar />

            </div>
            <Route path="/Complains_List" exact component={CrimeComplainList} />
            <Route path="/EditCrimeComplain/:id" exact component={EditCrimeComplain} />
            <Route path="/Complain" exact component={CreateComplain} />
            <div style={{ marginLeft: 18 + "rem" }}><Route path="/LEF" exact component={CreateLEF} /></div>

          </div>
        </Router>
      </div>
    );

  }

}
