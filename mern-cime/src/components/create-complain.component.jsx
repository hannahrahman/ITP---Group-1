import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { TextField } from '@material-ui/core'
export default class CreateComplain extends Component {

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
            phone: new Number(),
            description: '',
            weapon: '',
            date: new Date(),
            officer_incharge: '',

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
            refNo: Number(this.state.refNo),
            complainType: this.state.complainType,
            fname: this.state.fname,
            lname: this.state.lname,
            nic: this.state.nic,
            dateOfBirth: this.state.dateOfBirth,
            religion: this.state.religion,
            sex: this.state.sex,
            address: this.state.address,
            phone: Number(this.state.phone),
            description: this.state.description,
            weapon: this.state.weapon,
            date: this.state.date,
            officer_incharge: this.state.officer_incharge,
        }
        console.log(complain);
        // window.location = '/';
        axios.post('http://localhost:5000/Addcomplain/add', complain).then(res => console.log(res.data));

        this.setState({
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
        })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 1.2 + 'rem' }}>

                <div className="card text-white  bg-light mb-3" style={{ marginLeft: 8.5 + 'rem' }} >
                    <div className="card-header bg-dark"><h3>Add Complain</h3></div>
                    <div className="card-body" >

                    </div >

                    <div className="container">
                        <form onSubmit={this.onSubmit} style={{ margin: "auto" }} noValidate="true">
                            <div className="row">
                                <div className="col form-group" >
                                    <TextField
                                        label="Refno"
                                        required
                                        color="secondary"
                                        type="number"
                                        variant="outlined"
                                        value={this.state.refNo}
                                        onChange={this.onchangeRefno}
                                    />
                                </div>


                                <div className="col" style={{ marginLeft: -17 + 'rem' }}>
                                    <div className="form-group">
                                        <TextField
                                            type="text"
                                            label="Complain Type"
                                            variant="outlined"
                                            color="secondary"
                                            required
                                            value={this.state.complainType}
                                            onChange={this.onchangecomplainType} />
                                    </div>
                                </div>
                            </div>

                            <div className="row first-Name">
                                <div className="col form-group" >
                                    <TextField
                                        type="text"
                                        required
                                        variant="outlined"
                                        fullWidth
                                        color="secondary"
                                        label="First Name"
                                        value={this.state.fname}
                                        onChange={this.onchangeFName} />
                                </div>
                                <div className="col form-group">
                                    <TextField
                                        type="text"
                                        required
                                        fullWidth
                                        variant="outlined"
                                        color="secondary"
                                        label="Last Name"
                                        value={this.state.lname}
                                        onChange={this.onchangeLName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>NIC Number :</b></label>
                                <input type="text"
                                    required
                                    value={this.state.nic}
                                    className="form-control"
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
                                    value={this.state.religion}
                                    className="form-control"
                                    onChange={this.onchangeReligion} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>SEX: </b></label><br />
                                <select
                                    style={{ marginLeft: 0.5 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="sex"
                                    value={this.state.sex}
                                    onChange={this.onchangeSex}
                                >
                                    <option >Select a field</option >
                                    <option value="Male">Male</option >
                                    <option value="Female">Female</option  >

                                </select>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Address:</b></label>
                                <input type="text"
                                    required
                                    value={this.state.address}
                                    className="form-control"
                                    onChange={this.onchangeAddress} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Phone: </b></label>
                                <input type="number"
                                    required
                                    numberformat="true"
                                    format="### ###-####"
                                    mask="_"
                                    value={this.state.phone}
                                    className="form-control"
                                    onChange={this.onchangePhone} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Description: </b></label>
                                <textarea type="text"

                                    required
                                    value={this.state.description}
                                    className="form-control"
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
                                    selected={this.state.date}
                                    className="form-control"
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
                                <input type="submit" name="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
                            </div>
                        </form>
                    </div >

                </div >
            </div >

        )


    }


}
