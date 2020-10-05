import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class OnlineDrivingNICRenewalNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <div className="collpase">

                    <ul className="navbar-nav">

                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Complains</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/Complain" className="nav-link">Add Complain</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/Appeal" className="nav-link">Add Appeal</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/LEF" className="nav-link">Legal Examination Form</Link>
                        </li>

                    <form class="form-inline my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success mr-sm-2" type="submit">Search</button></form>

                    </ul>



                </div>


            </nav >

        );
    }

}
