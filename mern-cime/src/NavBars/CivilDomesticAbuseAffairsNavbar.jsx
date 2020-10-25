import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default class CivilDomesticAbuseAffairsNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark nv" style={{ width: 17.5 + 'rem' }} >
            <ul className="navbar-nav mr-auto" style={{ marginTop: -85 + 'rem' }} >
                <li className="navbar-item" >
                    <Link to="/DomesticAbuseComplainList" className="nav-link" >Complains List</Link>
                    <hr color="white" />
                </li>
                <li className="navbar-item">
                    <Link to="/DomesticAbuseComplain" className="nav-link" >Add Complain</Link>
                    <hr width="225" color="white" />
                </li>
                <li className="navbar-item">
                    <Link to="/DomesticAbuseLegal" className="nav-link" > Legal Examination Form</Link>
                    <hr width="225" color="white" />
                </li>
                <li className="navbar-item" >
                    <Link to="/DomesticAbuseComplainListBackups" className="nav-link" >Backups</Link>
                    <hr color="white" />
                </li>
            </ul>
        </nav>
    );
  }   
}
