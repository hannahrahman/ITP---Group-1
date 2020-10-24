<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {useState,useEffect,} from 'react';
>>>>>>> e642dc7c9b7ec0db65d502647135af09ab621f23
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
import './App.css';


import ViewLost from "./components/license_nic/viewLost"
import EditLicense from "./components/license_nic/Edit_Driving_License"

<<<<<<< HEAD
/*const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About }
];*/
=======
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from './context/userContext';
import Axios from 'axios';

function App() {

  const [userData, setUserData] = useState({
      token:undefined,
      user:undefined,
  });

  useEffect(() => {
      const checkLoggedIn = async () => {
          let token = localStorage.getItem("auth-token");

          if (token == null) {
            localStorage.setItem("auth-token", "");
            token = "";
          }
        
          const tokenRes = await Axios.post ("http://localhost:5000/users/tokenisValid", null, 
          {headers: { "x-auth-token": token }}
          );
          if (tokenRes.data){
            const userRes = await Axios.get("http://localhost:5000/users/",
             {headers: {"x-auth-token" : token},
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
    <div>
>>>>>>> e642dc7c9b7ec0db65d502647135af09ab621f23

export default class App extends Component {
  render() {

<<<<<<< HEAD
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
=======
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Complaint Management System </title>
        <meta name="description" content="Police Station" />
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
        <link rel="shortcut icon" href={Police} />
      </Helmet>
      <div>

        <Router>

          <Sidenav />
            <Route exact path="/Crime Division" exact component={CrimeDivision} />
            <Route exact path="/Miscellaneous Complaints" exact component={MiscellaneousComplaints} />
            <Route exact path="/Civil Domestic Abuse Affairs" exact component={CivilDomesticAbuseAffairs} />
            <Route exact path="/Environmental Affairs" exact component={EnvironmentalAffairs} />
            <Route exact path="/Missing Persons Affairs" exact component={MissingPersonsAffairs} />
            <Route exact path="/Cyber Crime" exact component={CyberCrime} />
            <Route exact path="/Online Fine Payment" exact component={OnlineFinePayment} />
            <Route exact path="/Online Driving/NIC Renewal" exact component={OnlineDrivingNICRenewal} />
            <Route exact path="/Narcotics and Drug Affairs" exact component={NarcoticssandDrugAffairs} />

          <UserContext.Provider value={{userData, setUserData}}>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/register Page" exact component = {Register}/>
          </UserContext.Provider>

          <Route exact path="/ViewLost" exact component={ViewLost} />
          <Route path="/edit/:id" component={EditLicense} />
        </Router>
      </div>


    </div>

    
  );
>>>>>>> e642dc7c9b7ec0db65d502647135af09ab621f23
}
