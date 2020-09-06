import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default class CreateLEF extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this)//
        this.onchangeDateOfIssue = this.onchangeDateOfIssue.bind(this)//
        this.onchangeVictimFullName = this.onchangeVictimFullName.bind(this)//
        this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this)//
        this.onchangeAge = this.onchangeAge.bind(this)//
        this.onchangeAdmission = this.onchangeAdmission.bind(this)//
        this.onchangeHospital = this.onchangeHospital.bind(this)//
        this.onchangeWardNo = this.onchangeWardNo.bind(this)//
        this.onchangeDate = this.onchangeDate.bind(this)//
        this.onchangeDateOfDischarge = this.onchangeDateOfDischarge.bind(this)//
        this.onchangeRegistrationNumber = this.onchangeRegistrationNumber.bind(this)//
        this.onchangeNomineeName = this.onchangeNomineeName.bind(this)//
        this.onchangeAddress = this.onchangeAddress.bind(this)//
        this.onchangeReason = this.onchangeReason.bind(this)//
        this.onchangeRank = this.onchangeRank.bind(this)//
        this.onchangeNatureOfBodilyHarm = this.onchangeNatureOfBodilyHarm.bind(this)
        this.onchangeWeapon = this.onchangeWeapon.bind(this)
        this.onchangeCategoryOfHurt = this.onchangeCategoryOfHurt.bind(this)
        this.onchangeConsumptionOfAlcohol = this.onchangeConsumptionOfAlcohol.bind(this)
        this.onchangeOther = this.onchangeOther.bind(this)
        this.onchangeRemarks = this.onchangeRemarks.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            dateOfIssue: '',//
            victimFullName: '',//
            dateOfBirth: new Date(),//
            age: '',//
            admission: '',//
            hospital: '',//
            wardNo: '',//
            date: new Date(),//
            dateOfDischarge: '',//
            registrationNumber: '',//
            nomineeName: '',//
            address: '',//
            reason: '',//
            rank: '',//
            natureOfBodilyHarm: '',
            weapon: '',//
            categoryOfHurt: '',
            consumptionOfAlcohol: '',
            other: '',
            remarks: ''
        }
    }

    onchangeRefno(e) {
        this.setState({
            refNo: e.target.value//
        })
    }

    onchangeDateOfIssue(e) {
        this.setState({
            dateOfIssue: e.target.value//
        })
    }

    onchangeVictimFullName(e) {
        this.setState({
            victimFullName: e.target.value//
        })
    }

    onchangeDateOfBirth(date) {//
        this.setState({
            dateOfBirth: date
        })
    }

    onchangeAge(e) {//
        this.setState({
            age: e.target.value
        })
    }

    onchangeAdmission(e) {//
        this.setState({
            admission: e.target.value
        })
    }

    onchangeHospital(e) {//
        this.setState({
            hospital: e.target.value
        })
    }

    onchangeWardNo(e) {//
        this.setState({
            wardNo: e.target.value
        })
    }

    onchangeDateOfDischarge(e) {//
        this.setState({
            dateOfDischarge: e.target.value
        })
    }

    onchangeWeapon(e) {//
        this.setState({
            weapon: e.target.value
        })
    }

    onchangeDate(date) {//
        this.setState({
            date: date
        })
    }

    onchangeRegistrationNumber(e) {//
        this.setState({
            registrationNumber: e.target.value
        })
    }

    onchangeNomineeName(e) {//
        this.setState({
            nomineeName: e.target.value
        })
    }

    onchangeAddress(e) {//
        this.setState({
            address: e.target.value
        })
    }

    onchangeReason(e) {//
        this.setState({
            reason: e.target.value
        })
    }

    onchangeRank(e) {
        this.setState({
            registrationNumber: e.target.value
        })
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
        }
        console.log(complain);

        window.location = '/';

    }

    render() {
        return (
            <div class="container" style={{ marginTop: -88.5 + 'rem' }}>

                <div class="card text-danger  bg-dark  mb-3" style={{ marginLeft: 3.5 + 'rem' }} >
                    <div class="card-header"><h3>Add Complain</h3></div>
                    <div class="card-body" >

                    </div >

                    <div class="container">
                        <form onsubmit={this.onsubmit} style={{ margin: "auto" }} class=" needs-validation" novalidate='true'>

                            <div className="form-group" >

                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>RefNo:</b></label>
                                <input
                                    required
                                    type="text"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.refNo}
                                    onChange={this.onchangeRefno} />

                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Complain Type: </b></label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.complainType}
                                    className="form-control is-invalid"
                                    onChange={this.onchangecomplainType} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>First Name: </b></label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.fname}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeFName} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Last Name :</b></label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.lname}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeLName} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>NIC Number :</b></label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.nic}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeNic} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date Of Birth: </b></label>
                                <div>
                                    <DatePicker
                                        className="form-control"
                                        selected={this.state.dateOfBirth}
                                        onChange={this.onchangeDateOfBirth} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Religion: </b></label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.religion}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeReligion} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>SEX: </b></label><br />
                                <div class="input-group">

                                    <div class="input-group-prepend">

                                        <div style={{ marginLeft: 0.5 + 'rem' }}>

                                            <input type="radio"

                                                id="male"
                                                name="gender"
                                                value={this.state.sex}

                                                onChange={this.onchangeSex} />
                                            <label><b>Male </b></label>
                                        </div>
                                    </div>

                                    <div style={{ marginLeft: 5 + 'rem' }}>
                                        <input type="radio"
                                            aria-label="Radio button for following text input"
                                            name="gender"
                                            id="Female"
                                            value={this.state.sex}

                                            onChange={this.onchangeSex} />
                                        <label><b> Female </b></label>

                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Address:</b></label>
                                <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.address}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeAddress} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Phone: </b></label>
                                <input type="number"
                                    required
                                    NumberFormat format="### ###-####"
                                    mask="_"
                                    className="form-control"
                                    value={this.state.phone}
                                    className="form-control is-invalid"
                                    onChange={this.onchangePhone} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Description: </b></label>
                                <textarea type="text"

                                    required
                                    className="form-control"
                                    value={this.state.description}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeDescription} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Weapon(Optionl)</b></label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.weapon}
                                    onChange={this.onchangeWeapon} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date: </b></label>
                                <div></div>
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.date}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeDate} />

                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Officer Incharge:</b></label>
                                <input type="text"
                                    name="offi"
                                    id="offi"
                                    required
                                    className="form-control"
                                    value={this.state.officer_incharge}
                                    onChange={this.onchangeOfficerIncharge
                                    } />

                            </div>

                            <div className="form-group">
                                <input type="submit" id="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" class="needs-validationbtn" className="btn btn-outline-danger btn btn-dark" class='btndisabled' />
                            </div>
                        </form>
                    </div >
                </div >
            </div >


        )

    }

}
