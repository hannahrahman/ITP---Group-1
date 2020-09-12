import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class CrimeNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <Link to="/" className="navbar-brand" >
                </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto ">

                        <li className="navbar-item mr-5">
                            <Link to="/Complains List" className="nav-link">Complains List</Link>
                        </li>
                        <li className="navbar-item mr-5">
<<<<<<< HEAD
                            <Link to="/Complains" className="nav-link">Add Complain</Link>
=======
                            <Link to="/Complain" className="nav-link">Add Complain</Link>
>>>>>>> fdf3d6f3bdf580e0ab808edfa85807407d1cbac4
                        </li>
                        <li className="navbar-item mr-5">
                            <Link to="/AddAppeal" className="nav-link">Add Appeal</Link>
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