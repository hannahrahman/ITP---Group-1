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
<<<<<<< HEAD
    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -55.5 + 'rem' }}>
                    <div style={{ marginLeft: 18 + 'rem' }} >
                        <CrimeNavbar />
                    </div>
                    <Route exact path="/ComplainsList" exact component={ComplainsList} />
                    <Route path="/edit/:id" exact component={EditComplain} />
                    <Route path="/Crime Division/create" exact component={CreateComplain} />
                    <Route path="/user" exact component={CreateUser} />
                    <Route path="/Appeal" exact component={CreateAppeal} />
                </div>

            </Router>

        )
    }

}
=======
  render() {
    return (
      <div>
        <Router>
          <div style={{ marginTop: -55.5 + "rem" }}>
            <div style={{ marginLeft: 18 + "rem" }}>
              <CrimeNavbar />
            </div>
            {/*<CreateComplain />*/}
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
>>>>>>> 78443929a5b783dfffae6a4d6923460feb6de974
