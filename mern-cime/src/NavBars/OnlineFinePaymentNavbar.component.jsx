import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class OnlineFinePaymentNavbar extends Component {

    render() {
        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <Link to="/" className="navbar-brand" >
                </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto ">

                        <li className="navbar-item mr-5">
                            <Link to="/OnlineFineDetailList" className="nav-link">List of Active fines</Link>
                        </li>
                        <li className="navbar-item mr-5">
                            <Link to="/onlinefineDetailsForm" className="nav-link">Add Fine</Link>
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