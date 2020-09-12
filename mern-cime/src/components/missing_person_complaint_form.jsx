import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default class MissingPersonComplaintForm extends Component {
  constructor(props) {
    super(props);

    this.onchangeRefno = this.onchangeRefno.bind(this);
    this.onchangecomplainType = this.onchangecomplainType.bind(this);
    this.onchangeFName = this.onchangeFName.bind(this);
    this.onchangeLName = this.onchangeLName.bind(this);
    this.onchangeNic = this.onchangeNic.bind(this);
    this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this);
    this.onchangeReligion = this.onchangeReligion.bind(this);
    this.onchangeSex = this.onchangeSex.bind(this);
    this.onchangeAddress = this.onchangeAddress.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeWeapon = this.onchangeWeapon.bind(this);
    this.onchangeDate = this.onchangeDate.bind(this);
    this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      refNo: "",
      complainType: "",
      fname: "",
      lname: "",
      nic: "",
      dateOfBirth: new Date(),
      religion: "",
      sex: "",
      address: "",
      phone: "",
      description: "",
      weapon: "",
      date: new Date(),
      officer_incharge: "",
    };
  }
  onchangeRefno(e) {
    this.setState({
      refNo: e.target.value,
    });
  }

  onchangecomplainType(e) {
    this.setState({
      complainType: e.target.value,
    });
  }

  onchangeFName(e) {
    this.setState({
      fname: e.target.value,
    });
  }

  onchangeLName(e) {
    this.setState({
      lname: e.target.value, //target is the text box and the value is the value in the text box that is assigned to the name attribute
    });
  }

  onchangeNic(e) {
    this.setState({
      nic: e.target.value,
    });
  }

  onchangeDateOfBirth(date) {
    this.setState({
      dateOfBirth: date,
    });
  }

  onchangeReligion(e) {
    this.setState({
      religion: e.target.value,
    });
  }

  onchangeSex(e) {
    this.setState({
      sex: e.target.value,
    });
  }

  onchangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  onchangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onchangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onchangeWeapon(e) {
    this.setState({
      weapon: e.target.value,
    });
  }

  onchangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onchangeOfficerIncharge(e) {
    this.setState({
      officer_incharge: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const complain = {
      refNo: this.state.refNo,
      complainType: this.state.complainType,
      fname: this.state.fname,
      lname: this.state.lname,
      nic: this.state.nic,
      dateOfBirth: this.state.dateOfBirth,
      religion: this.state.religion,
      sex: this.state.sex,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      weapon: this.state.weapon,
      date: this.state.date,
      officer_incharge: this.state.officer_incharge,
    };
    console.log(complain);

    window.location = "/";
  }

  render() {
    return (
      
    );
  }
}
