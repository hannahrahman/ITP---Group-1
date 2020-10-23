import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import Sidenav from "./NavBars/navbar-vertical.component.jsx"
import CivilDomesticAbuseAffairs from "./components/Civil_Domestic_Abuse_Affairs.component.jsx"
import CrimeDivision from "./components/Crime_Division/Crime_Division.component"
import CyberCrime from "./components/Cyber_Crime.component.jsx"
import NarcoticssandDrugAffairs from "./components/Narcotics_and_Drug_Affairs.component.jsx"
import OnlineDrivingNICRenewal from "./components/license_nic/Online_DrivingNIC_Renewal.jsx"
import OnlineFinePayment from "./components/Online_Fine_Payment.component.jsx"
import MissingPersonsAffairs from "./components/Missing_Persons_Affairs.component.jsx"
import EnvironmentalAffairs from "./components/Environmental_Affairs.component.jsx"
import MiscellaneousComplaints from "./components/Miscellaneous_Complaints.component.jsx"
import { Helmet } from "react-helmet"
import Police from './Images/police.png'
import './App.css';

import ViewLost from "./components/license_nic/viewLost"
import EditLicense from "./components/license_nic/Edit_Driving_License"

/*const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About }
];*/

export default class App extends Component {
  render() {

    return (
      <>
        <div>
          <Helmet>
            <meta charSet="UTF-8" />
            <title>Police Station</title>
            <meta name="description" content="Police Station" />
            <meta name="viewport" content="width=device-width, maximum-scale=1" />
            <link rel="shortcut icon" href={Police} />
          </Helmet>

          <div>
            <Router>
              <Sidenav />
              <div >
                <Route path="/Crime Division" exact component={CrimeDivision} />
                <Route path="/Miscellaneous Complaints" exact component={MiscellaneousComplaints} />
                <Route path="/Civil Domestic Abuse Affairs" exact component={CivilDomesticAbuseAffairs} />
                <Route path="/Environmental Affairs" exact component={EnvironmentalAffairs} />
                <Route path="/Missing Persons Affairs" exact component={MissingPersonsAffairs} />
                <Route path="/Cyber Crime" exact component={CyberCrime} />
                <Route path="/Online Fine Payment" exact component={OnlineFinePayment} />
                <Route path="/Online Driving/NIC Renewal" exact component={OnlineDrivingNICRenewal} />
                <Route path="/Narcotics and Drug Affairs" exact component={NarcoticssandDrugAffairs} />
              </div>
              <Route path="/ViewLost" exact component={ViewLost} />
              <Route path="/edit/:id" component={EditLicense} />
            </Router>
          </div>
        </div >
      </>
    );
  }
}
