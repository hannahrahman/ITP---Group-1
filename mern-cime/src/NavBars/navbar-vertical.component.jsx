import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//fontawesome
import { faListAlt, faTree, faHouseDamage, faGlobeAmericas, faUserNinja, faUser, faCannabis, faCarAlt, faCreditCard, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import Police from '../Images/police.png'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";//mdbreact
import { BrowserRouter as Router } from 'react-router-dom';

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m1: "Select Your Category",
      icon1: Police
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