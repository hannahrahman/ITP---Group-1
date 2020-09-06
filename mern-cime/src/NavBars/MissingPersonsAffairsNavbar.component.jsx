import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MissingPersonsAffairsNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <Link to="/" className="navbar-brand" >
                </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto ">

                        <li className="navbar-item mr-5">
                            <Link to="/" className="nav-link">Complains</Link>
                        </li>
                        <li className="navbar-item mr-5">
                            <Link to="/Complain" className="nav-link">Add Complain</Link>
                        </li>
                        <li className="navbar-item mr-5">
                            <Link to="/Appeal" className="nav-link">Add Appeal</Link>
                        </li>
                        <li className="navbar-item mr-5">
                            <Link to="/LEF" className="nav-link">Legal Examination Form</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form>

                </div>


            </nav >

        );
    }

}