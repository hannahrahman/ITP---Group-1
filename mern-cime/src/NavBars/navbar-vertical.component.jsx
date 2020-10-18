import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faTree, faHouseDamage, faGlobeAmericas, faUserNinja, faUser, faCannabis, faCarAlt, faCreditCard, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import Police from '../Images/police.png'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      m1: "Police Management",
=======
      m1: "Select Your Category",
      icon1: Police
>>>>>>> 81e19014d94ffc9af7556a3caf61d42f0fe78267
    };

  }
  m1(e) {
    this.setState({
      m1: e.target.value,
      m1: "Crime Division",
      icon1: faListAlt
    });
    console.log(this);
  }
  m2() {
    this.setState({
      m1: "Crime Division",
      icon1: faUserNinja
    });
    console.log(this);
  }
  m3() {
    this.setState({
      m1: "Domestic Abuse Affairs",
      icon1: faHouseDamage
    });
    console.log(this);
  }
  m4() {
    this.setState({
      m1: "Environmental Affairs",
      icon1: faTree
    });
    console.log(this);
  }
  m5() {
    this.setState({
      m1: "Cyber Crime",
      icon1: faGlobeAmericas
    });
    console.log(this);
  }
  m6() {
    this.setState({
      m1: "Missing Persons Affairs",
      icon1: faUser
    });
    console.log(this);
  }
  m7() {
    this.setState({
      m1: "Online Fine Payment",
      icon1: faCannabis
    });
    console.log(this);
  }
  m8() {
    this.setState({
      m1: "Online Driving/NIC Renewal",
      icon1: faMoneyBillAlt
    });
    console.log(this);
  }
  m9() {
    this.setState({
      m1: 'Narcotics and Drug Affairs',
      icon1: faCarAlt
    })
    console.log(this)
  }
<<<<<<< HEAD
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark" style={{ width: 20 + '%' }} >
        <font> <p ><div className=" navbar-item " className="navbar-brand text-primary" ><b>{this.state.m1}</b></div>
        </p></font>
        <ul className="navbar-nav " >
          <li className="navbar-item" style={{ marginTop: -10 + "rem" }}>
            <Link to="/Miscellaneous Complaints" className="nav-link" onClick={this.m1.bind(this)}>Miscellaneous Complaints</Link>
            <hr color="white" />
          </li>

          <ul />
          <li className="navbar-item">
            <Link to="/Crime Division" className="nav-link" onClick={this.m2.bind(this)}>Crime Division</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Civil Domestic Abuse Affairs" className="nav-link" onClick={this.m3.bind(this)}>Civil Domestic Abuse Affairs</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Environmental Affairs" className="nav-link" onClick={this.m4.bind(this)}>Environmental Affairs</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Cyber Crime" className="nav-link" onClick={this.m5.bind(this)}>Cyber Crime</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Missing Persons Affairs" className="nav-link" onClick={this.m6.bind(this)}>Missing Persons Affairs</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Narcotics and Drug Affairs" className="nav-link" onClick={this.m9.bind(this)}>Narcoticss and Drug Affairs</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <font color="#00AFF1" ><a className="nav-disabled-link">More</a></font>
          </li>
          <li className="navbar-item">
            <Link to="/Online Fine Payment" className="nav-link" onClick={this.m7.bind(this)}>Online Fine Payment</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Online Driving/NIC Renewal" className="nav-link" onClick={this.m8.bind(this)}>Online Driving/NIC Renewal</Link>
          </li>
        </ul>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
=======
  m10() {
    this.setState({
      m1: 'Police Managment',
      icon1: Police
    })
    console.log(this)
  }
  state = {
    isOpen: false
  };
>>>>>>> 81e19014d94ffc9af7556a3caf61d42f0fe78267

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar color="bg-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="text-light" style={{ marginBlockStart: 5 + 'rem' }}><img src={Police} className="mr-1" style={{ height: 1.8 + 'rem', paddingRight: 1 + 'rem' }} />Police Station</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem >
                <MDBNavLink to="/" className="text-light" >Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="text-light mr-2">Select Your Category </span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="/Miscellaneous Complaints" /*onClick={this.m1.bind(this)}*/><FontAwesomeIcon icon={faListAlt} className="mr-1" />Miscellaneous Complaints</MDBDropdownItem>
                    <MDBDropdownItem href="/Crime Division" /*onClick={this.m2.bind(this)}*/><FontAwesomeIcon icon={faUserNinja} className="mr-1" />Crime Division</MDBDropdownItem>
                    <MDBDropdownItem href="/Civil Domestic Abuse Affairs" /*onClick={this.m3.bind(this)}*/><FontAwesomeIcon icon={faHouseDamage} className="mr-1" />Domestic Abuse Affairs</MDBDropdownItem>
                    <MDBDropdownItem href="/Environmental Affairs" /*onClick={this.m4.bind(this)}*/><FontAwesomeIcon icon={faTree} className="mr-1" /> Environmental Affairs</MDBDropdownItem>
                    <MDBDropdownItem href="/Cyber Crime" /*onClick={this.m5.bind(this)}*/><FontAwesomeIcon icon={faGlobeAmericas} className="mr-1" /> Cyber Crime</MDBDropdownItem>
                    <MDBDropdownItem href="/Missing Persons Affairs" /*onClick={this.m6.bind(this)}*/><FontAwesomeIcon icon={faUser} className="mr-1" /> Missing Persons Affairs</MDBDropdownItem>
                    <MDBDropdownItem href="/Narcotics and Drug Affairs" /*onClick={this.m7.bind(this)}*/><FontAwesomeIcon icon={faCannabis} className="mr-1" /> Narcoticss and Drug Affairs</MDBDropdownItem>
                    <MDBDropdownItem href="/Online Fine Payment" /*onClick={this.m8.bind(this)}*/><FontAwesomeIcon icon={faMoneyBillAlt} className="mr-1" />Online Fine Payment</MDBDropdownItem>
                    <MDBDropdownItem href="/Online Driving/NIC Renewal" /*onClick={this.m9.bind(this)}*/><FontAwesomeIcon icon={faCarAlt} className="mr-1" /> Online Driving/NIC Renewal</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Sidenav;