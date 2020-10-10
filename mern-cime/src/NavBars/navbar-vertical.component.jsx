import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css'
export default class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m1: "Police Managment",
    };

  }
  m1() {
    this.setState({
      m1: `Miscellaneous Complaints`,
    });
    console.log(this);
  }
  m2() {
    this.setState({
      m1: "Crime Division",
    });
    console.log(this);
  }

  m3() {
    this.setState({
      m1: "Domestic Abuse Affairs",
    });
    console.log(this);
  }

  m4() {
    this.setState({
      m1: "Environmental Affairs",
    });
    console.log(this);
  }

  m5() {
    this.setState({
      m1: "Cyber Crime",
    });
    console.log(this);
  }

  m6() {
    this.setState({
      m1: "Missing Persons Affairs",
    });
    console.log(this);
  }

  m7() {
    this.setState({
      m1: "Online Fine Payment",
    });
    console.log(this);
  }

  m8() {
    this.setState({
      m1: "Online Driving/NIC Renewal",
    });
    console.log(this);
  }
  m9() {
    this.setState({
      m1: 'Narcotics and Drug Affairs'
    })
    console.log(this)
  }
  render() {
    return (
      <nav className="nv" style={{ width: 18 + '%' }}>
        <font> <div className=" navbar-item navbar-brand text-primary " style={{ marginLeft: 1 + 'rem' }} ><b>{this.state.m1}</b></div>
        </font>

        <ul className="navbar-nav mr-auto" >
          <br></br>
          <li className="navbar-item">
            <Link to="/Miscellaneous Complaints" className="nav-link" onClick={this.m1.bind(this)}>Miscellaneous Complaints</Link>
            <hr color="white" />
          </li>

          <li className="navbar-item">
            <Link to="/Crime Division" className="nav-link" onClick={this.m2.bind(this)}>Crime Division</Link>
            <hr color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Civil Domestic Abuse Affairs" className="nav-link" onClick={this.m3.bind(this)}>Domestic Abuse Affairs</Link>
            <hr color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Environmental Affairs" className="nav-link" onClick={this.m4.bind(this)}>Environmental Affairs</Link>
            <hr color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Cyber Crime" className="nav-link" onClick={this.m5.bind(this)}>Cyber Crime</Link>
            <hr color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Missing Persons Affairs" className="nav-link" onClick={this.m6.bind(this)}>Missing Persons Affairs</Link>
            <hr color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Narcotics and Drug Affairs" className="nav-link" onClick={this.m9.bind(this)}>Narcoticss and Drug Affairs</Link>
            <hr color="white" />
          </li>

          <li className="navbar-item">
            <Link to="/Online Fine Payment" className="nav-link" onClick={this.m7.bind(this)}>Online Fine Payment</Link>
            <hr color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Online Driving/NIC Renewal" className="nav-link" onClick={this.m8.bind(this)}>Online Driving/NIC Renewal</Link>
          </li>
        </ul>

      </nav>


    );
  }

}
