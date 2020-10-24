import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MissingPersonsAffairsNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark crimenv" style={{ width: 17.5 + 'rem' }} >
                <ul className="navbar-nav mr-auto" style={{ marginTop: -30 + 'rem' }} >
                    <li className="navbar-item1" >
                        <Link to="/addComplaint" className="nav-link" > File Complain</Link>
                        <hr color="white" />
                    </li>

                    <li className="navbar-item1">
                        <Link to="/viewComplaint" className="nav-link" >View Complains</Link>
                        <hr width="225" color="white" />
                    </li>

                </ul>
            </nav>

        );
    }

}
