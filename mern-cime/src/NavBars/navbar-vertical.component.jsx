import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m1: "Police Managment",
    };

  }
  m1() {
    this.setState({
      m1: "Miscellaneous Complaints",
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
      <nav className="navbar navbar-dark bg-dark" style={{ width: 20 + '%' }}>
        <font> <div className=" navbar-item navbar-brand text-primary "><b>{this.state.m1}</b></div>
        </font>
        <ul className="navbar-nav mr-auto" >
          <li className="navbar-item" style={{ marginTop: -47 + "rem" }}>
            <Link to="/Miscellaneous Complaints" className="nav-link" onClick={this.m1.bind(this)}>Miscellaneous Complaints</Link>
            <hr color="white" />
          </li>

          <li className="navbar-item">
            <Link to="/Crime Division" className="nav-link" onClick={this.m2.bind(this)}>Crime Division</Link>
            <hr width="225" color="white" />
          </li>
          <li className="navbar-item">
            <Link to="/Civil Domestic Abuse Affairs" className="nav-link" onClick={this.m3.bind(this)}>Domestic Abuse Affairs</Link>
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
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<<<<<<< HEAD
            <nav className="navbar navbar-dark bg-dark" style={{ width: 20 + '%' }} >
                <font> <p ><div className=" navbar-item " class="navbar-brand text-primary" ><b>{this.state.m1}</b></div>
                </p></font>
                <ul className="navbar-nav " >
                    <li className="navbar-item" style={{ marginTop: -10 + "rem" }}>
                        <Link to="/Miscellaneous Complaints" className="nav-link" onClick={this.m1.bind(this)}>Miscellaneous Complaints</Link>
                        <hr color="white" />
                    </li>
=======
      </nav>
>>>>>>> 78443929a5b783dfffae6a4d6923460feb6de974

    );
  }

}
