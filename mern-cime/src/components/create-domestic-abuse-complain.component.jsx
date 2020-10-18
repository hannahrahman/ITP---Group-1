import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import '../App.css';

export default class CreateDomesticAbuseComplain extends Component {

    constructor(props) {
        super(props);
        this.onchangeRefno = this.onchangeRefno.bind(this)
        this.onchangeComplainType = this.onchangeComplainType.bind(this)
        this.onchangeFName = this.onchangeFName.bind(this)
        this.onchangeLName = this.onchangeLName.bind(this)
        this.onchangeNic = this.onchangeNic.bind(this)
        this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this)
        this.onchangeReligion = this.onchangeReligion.bind(this)
        this.onchangeSex = this.onchangeSex.bind(this)
        this.onchangeAddress = this.onchangeAddress.bind(this)
        this.onchangePhone = this.onchangePhone.bind(this)
        this.onchangeDescription = this.onchangeDescription.bind(this)
        this.onchangeWeapon = this.onchangeWeapon.bind(this)
        this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this)
        this.onchangeRelationType = this.onchangeRelationType.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            refNo: '',
            complainType: '',
            fname: '',
            lname: '',
            nic: '',
            dateOfBirth: '',
            religion: '',
            sex: '',
            address: '',
            phone: '',
            description: '',
            weapon: '',
            officer_incharge: '',
            relationType: ''
        }
    }

    onchangeRefno(e) {
        this.setState({
            refNo: e.target.value
        });
    }

    onchangeComplainType(e) {
        this.setState({
            complainType: e.target.value
        });
    }

    onchangeFName(e) {
        this.setState({
            fname: e.target.value
        });
    }

    onchangeLName(e) {
        this.setState({
            lname: e.target.value
        });
    }

    onchangeNic(e) {
        this.setState({
            nic: e.target.value
        });
    }

    onchangeDateOfBirth(e) {
        this.setState({
            dateOfBirth: e.target.value
        });
    }

    onchangeReligion(e) {
        this.setState({
            religion: e.target.value
        });
    }

    onchangeSex(e) {
        this.setState({
            sex: e.target.value
        });
    }

    onchangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onchangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onchangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onchangeWeapon(e) {
        this.setState({
            weapon: e.target.value
        });
    }

    onchangeOfficerIncharge(e) {
        this.setState({
            officer_incharge: e.target.value
        });
    }

    onchangeRelationType(e) {
        this.setState({
            relationType: e.target.value
        });
    }

    //************validations*****************

    validate = () => {
        let isError = false;
        const errors = {
            refNoError: '',
            complainTypeError: '',
            fnameError: '',
            lnameError: '',
            nicError: '',
            dateOfBirthError: '',
            religionError: '',
            sexError: '',
            addressError: '',
            phoneError: '',
            descriptionError: '',
            weaponError: '',
            officerInchargeError: '',
            relationTypeError: '',
        };

        //*****************validate Refference Number******************

        if (!this.state.refNo) {
            isError = true;
            errors.refNoError = "Reference number can not be blank!"
            this.state.error1 = true
        } else if (!this.state.refNo.match("^$|^[a-zA-Z]+")) {
            isError = true;
            errors.refNoError = "Reference must be simple or capitalized!"
            this.state.error1 = true
        } else
            this.state.error1 = false;

        //*****************end of validate Refference Number************    

        //*****************validate Complain Type***********************

        if (!this.state.complainType) {
            isError = true;
            errors.complainTypeError = "Complain type can not be blank!"
            this.state.error2 = true
        } else
            this.state.error2 = false;

        //*****************end of validate Complain Type****************    

        //*****************validate First name**************************    

        if (!this.state.fname) {
            isError = true;
            errors.fnameError = "First Name can not be blank!"
            this.state.error3 = true
        } else if (!this.state.fname.match("^$|^[a-zA-Z]+")) {
            isError = true;
            errors.fnameError = "First name must be simple or capitalized!"
            this.state.error3 = true
        } else
            this.state.error3 = false;

        //*****************end of validate First name*******************    

        //*****************validate Last name***************************    

        if (!this.state.lname) {
            isError = true;
            errors.lnameError = "Last Name can not be blank!"
            this.state.error4 = true
        } else if (!this.state.lname.match("^$|^[a-zA-Z]+")) {
            isError = true;
            errors.lnameError = "Last name must be simple or capitalized!"
            this.state.error4 = true
        } else
            this.state.error4 = false;

        //*****************end of validate Last name********************    

        //*****************validate NIC*********************************    

        if (!this.state.nic) {
            isError = true;
            this.state.error5 = true
            errors.nicError = "NIC number can not be blank!"
        } /*else if (!this.state.nic.match("^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$")) {
            isError = true;
            errors.nicError = "Invalid NIC Number!"
            this.state.error5 = true
        }*/ else
            this.state.error5 = false

        //*****************end of validate NIC**************************     

        //*****************validate dateOfBirth*************************    

        if (!this.state.dateOfBirth) {
            isError = true;
            errors.dateOfBirthError = "Date of Birth can not be blank!"
            this.state.error6 = true
        } else if (!this.state.dateOfBirth.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
            isError = true;
            errors.dateOfBirthError = "Date must be YYYY-MM-DD!"
            this.state.error6 = true
        } else
            this.state.error6 = false;

        //*****************end of validate dateOfBirth******************

        //*****************validate relation type***********************    

        if (!this.state.relationType) {
            isError = true;
            errors.relationTypeError = "Relation type can not be blank!"
            this.state.error7 = true
        } else
            this.state.error7 = false;

        //*****************end of validate relation type****************    

        //*****************validate religion****************************    

        if (!this.state.religion) {
            isError = true;
            errors.religionError = "Religion can not be blank!"
            this.state.error8 = true
        } else
            this.state.error8 = false;

        //*****************end of validate religion*********************

        //*****************validate sex*********************************    

        if (!this.state.sex) {
            isError = true;
            errors.sexError = "This Field can not be blank!"
            this.state.error9 = true
        } else
            this.state.error9 = false;

        //*****************end of validate sex**************************    

        //*****************validate address*****************************    

        if (!this.state.address) {
            isError = true;
            errors.addressError = "Address can not be blank!"
            this.state.error10 = true
        } else if (this.state.address.length > 250) {
            isError = true;
            errors.addressError = "Length can not be greater than 10!"
            this.state.error10 = true
        } else
            this.state.error10 = false;

        //*****************end of validate address**********************

        //*****************validate phone*******************************    

        if (!this.state.phone) {
            isError = true;
            errors.phoneError = "Phone number can not be blank!"
            this.state.error11 = true
        } else if (!this.state.phone.match("^$|^[0-9]+")) {
            isError = true;
            errors.phoneError = "Invalid phone number!"
            this.state.error11 = true
        } else if (this.state.phone.length > 10) {
            isError = true;
            errors.phoneError = "Length can not be greater than 10!"
            this.state.error11 = true
        } else
            this.state.error11 = false;

        //*****************end of validate phone************************    

        //*****************validate description*************************

        if (this.state.description.length > 700) {
            isError = true;
            errors.descriptionError = "Length can not be greater than 700!"
            this.state.error12 = true
        } else
            this.state.error12 = false;

        //*****************end of validate description*******************    

        //*****************validate weapon*******************************

        if (this.state.weapon.length > 50) {
            isError = true;
            errors.weaponError = "Length can not be greater than 50!"
            this.state.error13 = true
        } else
            this.state.error13 = false;

        //*****************end of validate weapon************************    

        //*****************validate officer in charge********************    

        if (this.state.officer_incharge.length > 50) {
            isError = true;
            errors.officerInchargeError = "Length can not be greater than 50!"
            this.state.error15 = true
        } else if (!this.state.officer_incharge.match("^$|^[a-zA-Z]+")) {
            isError = true;
            errors.officerInchargeError = "Officer in charge must be simple or capitalized!"
            this.state.error15 = true
        } else
            this.state.error15 = false;

        //*****************end of validate officer in charge*************    

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    //************end of validations*******************

    //********save button***********************

    onSubmit(e) {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
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
                officer_incharge: this.state.officer_incharge,
                relationType: this.state.relationType
            };
            console.log(complain)
            axios
                .post('http://localhost:5000/domestic_abuse_complains/add', complain)
                .then(res => console.log(res.data));

            this.setState({
                refNo: '',
                complainType: '',
                fname: '',
                lname: '',
                nic: '',
                dateOfBirth: '',
                religion: '',
                sex: '',
                address: '',
                phone: '',
                description: '',
                weapon: '',
                officer_incharge: '',
                relationType: ''
            })
            alert("Record Successfully Saved!");
            this.props.history.push('/DomesticAbuseComplainList')  //redirect to complains list page after submit
        }
    }

    //***************reset button***********************

    handleReset = () => {
        Array.from(document.querySelectorAll('input'));
        this.setState({
            refNo: '',
            complainType: '',
            fname: '',
            lname: '',
            nic: '',
            dateOfBirth: '',
            religion: '',
            sex: '',
            address: '',
            phone: '',
            description: '',
            weapon: '',
            officer_incharge: '',
            relationType: ''
        });
    };

    render() {
        return (
            <div className="complain">
                <div className="card text-white  bg-dark  mb-3" style={{ marginLeft: 8.5 + 'rem' }} >
                    <div className="card-header"><h3>Add Complain</h3></div>
                    <div className="card-body" >
                    </div >

                    <div className="container">
                        <form onSubmit={this.onSubmit} style={{ margin: "auto" }} className=" needs-validation" noValidate="true">

                            <div className="form-group" >

                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Refference No :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add Refference Number"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.refNo}
                                    onChange={this.onchangeRefno}
                                    error={this.state.error1} />
                                <span className="text-danger">{this.state.refNoError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Complain Type : </b></label><br />
                                <select
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="complainType"
                                    value={this.state.complainType}
                                    onChange={this.onchangeComplainType}
                                    error={this.state.error2}>

                                    <option>Select Complain Type</option>
                                    <option value="Physical Abuse">Physical Abuse</option>
                                    <option value="Verbal Abuse">Verbal Abuse</option>
                                    <option value="Emotional Abuse">Emotional Abuse</option>
                                    <option value="Mental Abuse">Mental Abuse</option>
                                    <option value="Sexual Abuse">Sexual Abuse</option>
                                    <option value="Damage to Property">Damage to Property</option>
                                    <option value="Financial Abuse">Financial Abuse</option>
                                    <option value="Threatening">Threatening</option>
                                </select>
                                <br />
                                <span className="text-danger">{this.state.complainTypeError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>First Name : </b></label>
                                <input
                                    type="text"
                                    placeholder="Add First Name"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.fname}
                                    onChange={this.onchangeFName}
                                    error={this.state.error3} />
                                <span className="text-danger">{this.state.fnameError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Last Name :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add Last Name"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.lname}
                                    onChange={this.onchangeLName}
                                    error={this.state.error4} />
                                <span className="text-danger">{this.state.lnameError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>NIC Number :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add NIC Number"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.nic}
                                    onChange={this.onchangeNic}
                                    error={this.state.error5} />
                                <span className="text-danger">{this.state.nicError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date Of Birth : </b></label>
                                <input
                                    type="text"
                                    placeholder="YYYY-MM-DD"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.dateOfBirth}
                                    onChange={this.onchangeDateOfBirth}
                                    error={this.state.error6} />
                                <span className="text-danger">{this.state.dateOfBirthError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Relation Type : </b></label><br />
                                <select
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="relationType"
                                    value={this.state.relationType}
                                    onChange={this.onchangeRelationType}
                                    error={this.state.error7}>

                                    <option>Select Relation Type</option>
                                    <option value="Spousal">Spousal</option>
                                    <option value="Intimate Personal">Intimate Personal</option>
                                    <option value="Family">Family</option>
                                    <option value="Informal Care">Informal Care</option>
                                </select>
                                <br />
                                <span className="text-danger">{this.state.relationTypeError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Religion : </b></label><br />
                                <select
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="religion"
                                    value={this.state.religion}
                                    onChange={this.onchangeReligion}
                                    error={this.state.error8}>

                                    <option>Select Religion</option>
                                    <option value="Theravada Buddhist">Theravada Buddhist</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                    <option value="Roman Catholic">Roman Catholic</option>
                                    <option value="Christian">Christian</option>
                                </select>
                                <br />
                                <span className="text-danger">{this.state.religionError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Gender : </b></label><br />
                                <select
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="sex"
                                    value={this.state.sex}
                                    onChange={this.onchangeSex}
                                    error={this.state.error9}>

                                    <option>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <br />
                                <span className="text-danger">{this.state.sexError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Address :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add Address"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.address}
                                    onChange={this.onchangeAddress}
                                    error={this.state.error10} />
                                <span className="text-danger">{this.state.addressError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Phone : </b></label>
                                <input
                                    type="number"
                                    placeholder="Add Phone Number"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.phone}
                                    onChange={this.onchangePhone}
                                    error={this.state.error11} />
                                <span className="text-danger">{this.state.phoneError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Description : </b></label>
                                <textarea
                                    type="text"
                                    placeholder="Add Description"
                                    required
                                    className="form-control is-valid"
                                    value={this.state.description}
                                    onChange={this.onchangeDescription}
                                    error={this.state.error12} />
                                <span className="text-danger">{this.state.descriptionError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Used Weapon(s) :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add Weapon(s)"
                                    className="form-control is-valid"
                                    value={this.state.weapon}
                                    onChange={this.onchangeWeapon}
                                    error={this.state.error13} />
                                <span className="text-danger">{this.state.weaponError}</span>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Officer Incharge :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add Officer Incharge"
                                    className="form-control is-valid"
                                    value={this.state.officer_incharge}
                                    onChange={this.onchangeOfficerIncharge}
                                    error={this.state.error15} />
                                <span className="text-danger">{this.state.officerInchargeError}</span>
                            </div>

                            <div className="form-group">
                                <input type="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-success btn btn-dark" />
                                <input type="reset" style={{ marginLeft: 0.5 + 'rem' }} value="Reset" className="btn btn-outline-warning btn btn-dark" onClick={this.handleReset} />
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        )
    }
}
