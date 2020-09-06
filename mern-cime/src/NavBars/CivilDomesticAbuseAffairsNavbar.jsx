import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CivilDomesticAbuseAffairsNavbar extends Component {

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
<<<<<<< HEAD:mern-cime/src/components/navbar.component.jsx
                        <li className="navbar-item">
=======
                        <li className="navbar-item mr-5">
>>>>>>> master:mern-cime/src/NavBars/CivilDomesticAbuseAffairsNavbar.jsx
                            <Link to="/Complain" className="nav-link">Add Complain</Link>
                        </li>
                        <li className="navbar-item mr-5">
                            <Link to="/Appeal" className="nav-link">Add Appeal</Link>
                        </li>
<<<<<<< HEAD:mern-cime/src/components/navbar.component.jsx
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
=======
                        <li className="navbar-item mr-5">
>>>>>>> master:mern-cime/src/NavBars/CivilDomesticAbuseAffairsNavbar.jsx
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