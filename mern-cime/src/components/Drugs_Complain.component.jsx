import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"


export default class CreateDrugComplain extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this)
        this.onchangeComplainType = this.onchangeComplainType.bind(this)
        this.onchangeFName = this.onchangeFName.bind(this)
        this.onchangeLName = this.onchangeLName.bind(this)
        this.onchangeNic = this.onchangeNic.bind(this)
        this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this)
        this.onchangeReligion = this.onchangeReligion.bind(this)
        this.onchangePhone = this.onchangePhone.bind(this)
        this.onchangeSex = this.onchangeSex.bind(this)
        this.onchangeLocation = this.onchangeLocation.bind(this)
        this.onchangeKindOfDrug = this.onchangeKindOfDrug.bind(this)
        this.onchangeVehiclePlate = this.onchangeVehiclePlate.bind(this)
        this.onchangeDrugActivity = this.onchangeDrugActivity.bind(this)
        this.onchangeHW = this.onchangeHW.bind(this)
        this.onchangeEH = this.onchangeEH.bind(this)
        this.onchangeDSex = this.onchangeDSex.bind(this)
        this.onchangeDescription = this.onchangeDescription.bind(this)
        this.onchangeWeapon = this.onchangeWeapon.bind(this)
        this.onchangeDate = this.onchangeDate.bind(this)
        this.onchangeOfficerIncharge = this.onchangeOfficerIncharge.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            RefNo: '',
            ComplainType: '',
            Fname: '',
            Lname: '',
            Nic: '',
            DateOfBirth: new Date(),
            Religion: '',
            Phone: '',
            Sex: '',
            Location: '',
            KindOfDrug: '',
            VehiclePlate: '',
            DrugActivity: '',
            HW: '',
            EH: '',
            DSex: '',
            Description: '',
            Weapon: '',
            date: new Date(),
            OfficerIncharge: ''
        }
    }

    onchangeRefno(e) {
        this.setState({
            RefNo: e.target.value
        })
    }

    onchangeComplainType(e) {
        this.setState({
            ComplainType: e.target.value
        })
    }

    onchangeFName(e) {
        this.setState({
            FName: e.target.value
        })
    }

    onchangeLName(e) {
        this.setState({
            LName: e.target.value //target is the text box and the value is the value in the text box that is assigned to the name attribute
        })
    }

    onchangeNic(e) {
        this.setState({
            Nic: e.target.value
        })
    }

    onchangeDateOfBirth(date) {
        this.setState({
            DateOfBirth: date
        })
    }

    onchangeReligion(e) {
        this.setState({
            Religion: e.target.value
        })
    }

    onchangePhone(e) {
        this.setState({
            Phone: e.target.value
        })
    }


    onchangeSex(e) {
        this.setState({
            Sex: e.target.value
        })
    }

    onchangeLocation(e) {
        this.setState({
            Location: e.target.value
        })
    }

    onchangeKindOfDrug(e) {
        this.setState({
            KindOfDrug: e.target.value
        })
    }

    onchangeVehiclePlate(e) {
        this.setState({
            VehiclePlate: e.target.value
        })
    }

    onchangeDrugActivity(e) {
        this.setState({
            DrugActivity: e.target.value
        })
    }


    onchangeHW(e) {
        this.setState({
            HW: e.target.value
        })
    }


    onchangeEH(e) {
        this.setState({
            EH: e.target.value
        })
    }

    onchangeDSex(e) {
        this.setState({
            Dsex: e.target.value
        })
    }

    onchangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }

    onchangeWeapon(e) {
        this.setState({
            Weapon: e.target.value
        })
    }

    onchangeDate(date) {
        this.setState({
            date: date
        })
    }

    onchangeOfficerIncharge(e) {
        this.setState({
            OfficerIncharge: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const Drugcomplain = {
            RefNo: this.state.RefNo,
            ComplainType: this.state.ComplainType,
            FName: this.state.FName,
            LName: this.state.LName,
            Nic: this.state.Nic,
            DateOfBirth: this.state.DateOfBirth,
            Religion: this.state.Religion,
            Phone: this.state.Phone,
            Sex: this.state.Sex,
            Location: this.state.Location,
            KindOfDrug: this.state.KindOfDrug,
            VehiclePlate: this.state.VehiclePlate,
            DrugActivity: this.state.DrugActivity,
            HW: this.state.HW,
            EH: this.state.EH,
            Dsex: this.state.Dsex,
            Description: this.state.Description,
            Weapon: this.state.Weapon,
            date: this.state.date,
            OfficerIncharge: this.state.OfficerIncharge,
        }
        console.log(Drugcomplain);

        window.location = '/';

    }

    render() {
        return (
            <div className="container" style={{ marginTop: + 'rem' }}>

                <div className="card text-dark  bg-white  mb-3" style={{ marginLeft: 7.5 + 'rem' }} >
                    <div className="card-header"><h3>Add Complain</h3></div>
                    <div className="card-body" >

                    </div >

                    <div className="container">
                        <form onsubmit={this.onsubmit} style={{ margin: "auto" }} className=" needs-validation" novalidate='true'>
                            <h2>Complainant: Your Infromation will remain confidential</h2>
                            <div className="form-group" >

                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>RefNo:</b></label>
                                <input
                                    required
                                    type="text"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.RefNo}
                                    onChange={this.onchangeRefno} />

                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Complain Type: </b></label>
                                <input type="text"
                                    required
                                    value={this.state.ComplainType}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeComplainType} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>First Name: </b></label>
                                <input type="text"
                                    required
                                    value={this.state.FName}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeFName} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Last Name :</b></label>
                                <input type="text"
                                    required
                                    value={this.state.LName}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeLName} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>NIC Number :</b></label>
                                <input type="text"
                                    required
                                    value={this.state.Nic}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeNic} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date Of Birth: </b></label>
                                <div>
                                    <DatePicker
                                        className="form-control"
                                        selected={this.state.DateOfBirth}
                                        onChange={this.onchangeDateOfBirth} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Religion: </b></label>
                                <input type="text"
                                    required
                                    value={this.state.Religion}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeReligion} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Phone: </b></label>
                                <input type="number"
                                    required
                                    NumberFormat format="### ###-####"
                                    mask="_"
                                    value={this.state.Phone}
                                    className="form-control is-invalid"
                                    onChange={this.onchangePhone} />
                            </div>


                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>SEX: </b></label><br />
                                <div className="input-group">

                                    <div className="input-group-prepend">

                                        <div style={{ marginLeft: 0.5 + 'rem' }}>

                                            <input type="radio"

                                                id="male"
                                                name="gender"
                                                value={this.state.Sex}

                                                onChange={this.onchangeSex} />
                                            <label><b>Male </b></label>
                                        </div>
                                    </div>

                                    <div style={{ marginLeft: 5 + 'rem' }}>
                                        <input type="radio"
                                            aria-label="Radio button for following text input"
                                            name="gender"
                                            id="Female"
                                            value={this.state.Sex}

                                            onChange={this.onchangeSex} />
                                        <label><b> Female </b></label>

                                    </div>
                                </div>
                            </div>
                            <h2>Drug Location Information</h2>
                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Location:</b></label>
                                <input type="text"
                                    required
                                    value={this.state.Location}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeLocation} />
                            </div>


                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Kind of drug:</b></label>
                                <input type="text"
                                    required
                                    value={this.state.KindOfDrug}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeKindOfDrug} />
                            </div>


                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Vehicle Plate :</b></label>
                                <input type="text"
                                    required
                                    value={this.state.VehiclePlate}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeVehiclePlate} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Please Discribe Drug Activity:</b></label>
                                <textarea type="text"
                                    required
                                    value={this.state.DrugActivity}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeDrugActivity} />
                            </div>

                            <h2>Drug Subject Information</h2>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Height and Weight: </b></label>
                                <input type="text"
                                    required
                                    value={this.state.HW}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeHW} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Eye and Hair color: </b></label>
                                <input type="text"
                                    required
                                    value={this.state.EH}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeEH} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>SEX: </b></label><br />
                                <div className="input-group">

                                    <div className="input-group-prepend">

                                        <div style={{ marginLeft: 0.5 + 'rem' }}>

                                            <input type="radio"

                                                id="male"
                                                name="gender"
                                                value={this.state.DSex}

                                                onChange={this.onchangeDSex} />
                                            <label><b>Male </b></label>
                                        </div>
                                    </div>

                                    <div style={{ marginLeft: 5 + 'rem' }}>
                                        <input type="radio"
                                            aria-label="Radio button for following text input"
                                            name="gender"
                                            id="Female"
                                            value={this.state.DSex}

                                            onChange={this.onchangeDSex} />
                                        <label><b> Female </b></label>

                                    </div>
                                </div>
                            </div>



                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Description: </b></label>
                                <textarea type="text"

                                    required
                                    value={this.state.Description}
                                    className="form-control is-invalid"
                                    onChange={this.onchangeDescription} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Weapon(Optionl)</b></label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.Weapon}
                                    onChange={this.onchangeWeapon} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date: </b></label>
                                <div></div>
                                <DatePicker
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
                                    value={this.state.OfficerIncharge}
                                    onChange={this.onchangeOfficerIncharge} />

                            </div>

                            <div className="form-group">
                                <input type="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-white needs-validationbtn" />
                            </div>
                        </form>
                    </div >
                </div >
            </div >


        )

    }

}
