import React, { Component, useState, useEffect, } from 'react';
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
import MiscellaneousComplaints from "./components/Miscellaneous_Complaints/Miscellaneous_Complaints.component.jsx"
import { Helmet } from "react-helmet"
import Police from './Images/police.png'
import Header from './components/Home/header'
import './App.css';


import ViewLost from "./components/license_nic/viewLost"
import EditLicense from "./components/license_nic/Edit_Driving_License"

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from './context/userContext';
import Axios from 'axios';

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post("http://localhost:5000/users/tokenisValid", null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/",
          {
            headers: { "x-auth-token": token },
          });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
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
          <Sidenav dis='false' />
          <Router>


            <Route path="/Crime Division" exact component={CrimeDivision} />
            <Route path="/Miscellaneous Complaints" exact component={MiscellaneousComplaints} />
            <Route path="/Civil Domestic Abuse Affairs" exact component={CivilDomesticAbuseAffairs} />
            <Route path="/Environmental Affairs" exact component={EnvironmentalAffairs} />
            <Route path="/Missing Persons Affairs" exact component={MissingPersonsAffairs} />
            <Route path="/Cyber Crime" exact component={CyberCrime} />
            <Route path="/Online Fine Payment" exact component={OnlineFinePayment} />
            <Route path="/Online Driving/NIC Renewal" exact component={OnlineDrivingNICRenewal} />
            <Route path="/Narcotics and Drug Affairs" exact component={NarcoticssandDrugAffairs} />

            <UserContext.Provider value={{ userData, setUserData }}>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register Page" exact component={Register} />
            </UserContext.Provider>
            <Route path="/ViewLost" exact component={ViewLost} />
            <Route path="/edit/:id" component={EditLicense} />
          </Router>
        </div>
      </div >
    </>
  );
}

export default App