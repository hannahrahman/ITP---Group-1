import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default class MiscellaneousComplaintsNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark crimenv" style={{ width: 17.5 + 'rem' }} >
                <ul className="navbar-nav mr-auto" style={{ marginTop: -25 + 'rem' }} >

                        <li className="navbar-item1">
                            <Link to="/MiscellaneousComplainList" className="nav-link">Complaint List</Link>
                            <hr color="white" />
                        </li>

                        <li className="navbar-item1">
                        <Link to="/MiscellaneousComplaintForm" className="nav-link">Add Complaint</Link>
                            <hr width="225" color="white" />
                        </li>
                       
                        <li className="navbar-item1">
                            <Link to="/LEF" className="nav-link">Legal Examination Form</Link>
                            <hr width="225" color="white" />
                        </li>
                    </ul>
                    
              </nav >
        );
    }
}