import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"


export default class CreateDomesticAbuseComplain extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this)
        this.onchangecomplainType = this.onchangecomplainType.bind(this)
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
        this.onchangeDate = this.onchangeDate.bind(this)
        this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            refNo: '',
            complainType: '',
            fname: '',
            lname: '',
            nic: '',
            dateOfBirth: new Date(),
            religion: '',
            sex: '',
            address: '',
            phone: '',
            description: '',
            weapon: '',
            date: new Date(),
            officer_incharge: ''
        }
    }

    onchangeRefno(e) {
        this.setState({
            refNo: e.target.value
        })
    }

    onchangecomplainType(e) {
        this.setState({
            complainType: e.target.value
        })
    }

    onchangeFName(e) {
        this.setState({
            fname: e.target.value
        })
    }

    onchangeLName(e) {
        this.setState({
            lname: e.target.value //target is the text box and the value is the value in the text box that is assigned to the name attribute
        })
    }

    onchangeNic(e) {
        this.setState({
            nic: e.target.value
        })
    }

    onchangeDateOfBirth(date) {
        this.setState({
            dateOfBirth: date
        })
    }

    onchangeReligion(e) {
        this.setState({
            religion: e.target.value
        })
    }

    onchangeSex(e) {
        this.setState({
            sex: e.target.value
        })
    }

    onchangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onchangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onchangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onchangeWeapon(e) {
        this.setState({
            weapon: e.target.value
        })
    }

    onchangeDate(date) {
        this.setState({
            date: date
        })
    }

    onchangeOfficerIncharge(e) {
        this.setState({
            officer_incharge: e.target.value
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
            <div class="container" style={{ marginTop: 2 + 'rem' }}>

                <div class="card text-danger  bg-dark  mb-3" style={{ marginLeft: 11 + 'rem' }} >
                    <div class="card-header"><h3>Add Complain</h3></div>
                    <div class="card-body" >
                    </div >

                    <div class="container">
                        <form onsubmit={this.onsubmit} style={{ margin: "auto" }} class=" needs-validation" novalidate='true'>

                            <div className="form-group" >

                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Refference No:</b></label>
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

                                            <input type="radio" id="male" name="gender" value={this.state.sex} onChange={this.onchangeSex} />
                                            <label><b> Male </b></label>
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
