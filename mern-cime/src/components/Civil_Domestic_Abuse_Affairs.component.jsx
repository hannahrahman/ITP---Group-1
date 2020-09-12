import React, { Component } from "react";
import CivilDomesticAbuseAffairsNavbar from "../NavBars/CivilDomesticAbuseAffairsNavbar.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DomesticAbuseComplainList from "./domestic-abuse-complain-list.component";
import EditComplain from "./edit-complain.component";
import CreateDomesticAbuseComplain from "./create-domestic-abuse-complain.component";
import CreateUser from "./create-user.component";
import CreateDomesticAbuseApeal from "./create-domestic-abuse-apeal.component";
import CreateDomesticAbuseLegal from "./create-domestic-abuse-legal-form.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

export default class CivilDomesticAbuseAffairs extends Component {
<<<<<<< HEAD
    render() {
        return (
            <Router>
                <meta name="viewpoint" content="width=device-width , initial-scale=1"></meta>
                <div style={{ marginTop: -55.5 + 'rem' }}>
                    <div style={{ marginLeft: 18 + 'rem' }} >
                        <CivilDomesticAbuseAffairsNavbar />
                    </div>
                    <Route exact path="/ComplainsList" exact component={ComplainsList} />
                    <Route path="/edit/:id" exact component={EditComplain} />
                    <Route path="/Complain" exact component={CreateComplain} />
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
      <Router>
        <meta
          name="viewpoint"
          content="width=device-width , initial-scale=1"
        ></meta>
        <div style={{ marginTop: -98.5 + "rem" }}>
          <div style={{ marginLeft: 16.5 + "rem" }}>
            <CivilDomesticAbuseAffairsNavbar />
          </div>
          <Route exact path="/DomesticAbuseComplainList" exact component={DomesticAbuseComplainList} />
          <Route path="/edit/:id" exact component={EditComplain} />
          <Route path="/DomesticAbuseComplain" exact component={CreateDomesticAbuseComplain} />
          <Route path="/user" exact component={CreateUser} />
          <Route path="/DomesticAbuseApeal" exact component={CreateDomesticAbuseApeal} />
          <Route path="/DomesticAbuseLegal" exact component={CreateDomesticAbuseLegal} />  
        </div>
      </Router>
    );
  }
}
>>>>>>> 78443929a5b783dfffae6a4d6923460feb6de974
