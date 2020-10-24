import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Router } from "react-router-dom"
import "../../app.scss"
import Police from '../../Images/police.png'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
export default class Header extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (


            <MDBNavbar color="bg-dark" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="text-light" style={{ marginBlockStart: 5 + 'rem' }}><img src={Police} className="mr-1" style={{ height: 1.8 + 'rem', paddingRight: 1 + 'rem' }} />Police Station</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem >
                            <Link to="/home" className="nav-link">Home</Link>
                        </MDBNavItem>
                        <MDBNavItem >
                            <Link to="/App/" className="nav-link">Login</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            /*
        <div className="header" >
            <ul className="navbar-nav mr-auto ">

                <li className="navbar-item mr-5">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item mr-5">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </div>
    */
        );
    };
}
