import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class CrimeNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark nv" style={{ width: 17.5 + 'rem' }} >
                <ul className="navbar-nav mr-auto" style={{ marginTop: -30 + 'rem' }} >
                    <li className="navbar-item" >
                        <Link to="/Complains_List" className="nav-link" > Complains List</Link>
                        <hr color="white" />
                    </li>

                    <li className="navbar-item">
                        <Link to="/Complain" className="nav-link" >Add Complain</Link>
                        <hr width="225" color="white" />
                    </li>
                    <li className="navbar-item">
                        <Link to="/LEF" className="nav-link" > Legal Examination Form</Link>
                        <hr width="225" color="white" />
                    </li>
                </ul>
            </nav>
        );
    }

}