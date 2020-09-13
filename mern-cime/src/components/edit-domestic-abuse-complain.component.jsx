import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditDomesticAbuseComplain extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this);
        this.onchangeComplainType = this.onchangeComplainType.bind(this);
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
        this.onchangeRelationType = this.onchangeRelationType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
            officer_incharge: '',
            relationType: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/domestic_abuse_complains/edit/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                refNo: res.data.refNo,
                complainType: res.data.complainType,
                fname: res.data.fname,
                lname: res.data.lname,
                nic: res.data.nic,
                dateOfBirth: Date.parse(res.data.dateOfBirth),
                religion: res.data.religion,
                sex: res.data.sex,
                address: res.data.address,
                phone: res.data.phone,
                description: res.data.description,
                weapon: res.data.weapon,
                date: Date.parse(res.data.date),
                officer_incharge: res.data.officer_incharge,
                relationType: res.data.relationType
            });
        })
        .catch((error) => {
            console.log(error);
        })
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

    onchangeDateOfBirth(date) {
        this.setState({
            dateOfBirth: date
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

    onchangeDate(date) {
        this.setState({
            date: date
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

    onSubmit(e) {
        e.preventDefault();
        const complain = {
            refNo: this.state.refNo,
            complainType: this.state.complainType,
            fname: this.state.fname,
            lname: this.state.lname,
            nic: this.state.nic,
            dateOfBirth: Date(this.state.dateOfBirth),
            religion: this.state.religion,
            sex: this.state.sex,
            address: this.state.address,
            phone: Number(this.state.phone),
            description: this.state.description,
            weapon: this.state.weapon,
            date: Date(this.state.date),
            officer_incharge: this.state.officer_incharge,
            relationType: this.state.relationType
        };
        console.log(complain)
        axios
            .post('http://localhost:5000/domestic_abuse_complains/update/'+this.props.match.params.id, complain)
            .then(res => console.log(res.data));
    
        this.props.history.push('/DomesticAbuseComplainList')  //redirect to complains list page after submit
    }
    
    //reset button

    handleReset = () => {
        Array.from(document.querySelectorAll('input'));
        this.setState({
            refNo: this.state.refNo,
            complainType: this.state.complainType,
            fname: this.state.fname,
            lname: this.state.lname,
            nic: this.state.nic,
            dateOfBirth: Date.parse(this.state.dateOfBirth),
            religion: this.state.religion,
            sex: this.state.sex,
            address: this.state.address,
            phone: Number(this.state.phone),
            description: this.state.description,
            weapon: this.state.weapon,
            date: Date.parse(this.state.date),
            officer_incharge: this.state.officer_incharge,
            relationType: this.state.relationType
        });
    };

    render() {
        return (
            <div className="container" style={{ marginTop: 2 + 'rem' }}>

                <div className="card text-white  bg-dark  mb-3" style={{ marginLeft: 10 + 'rem' }} >
                    <div className="card-header"><h3>Add Complain</h3></div>
                    <div className="card-body" >
                    </div >

                    <div className="container">
                        <form onSubmit={this.onSubmit} style={{ margin: "auto" }} className=" needs-validation">

                            <div className="form-group" >

                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Refference No :</b></label>
                                <input
                                    type="text"
                                    placeholder="Add Refference Number"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.refNo}
                                    onChange={this.onchangeRefno} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Complain Type : </b></label><br />
                                <select 
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="complainType"
                                    value={this.state.complainType}
                                    onChange={this.onchangeComplainType}>
                                        
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
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>First Name : </b></label>
                                <input 
                                    type="text"
                                    placeholder="Add First Name"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.fname}
                                    onChange={this.onchangeFName} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Last Name :</b></label>
                                <input 
                                    type="text"
                                    placeholder="Add Last Name"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.lname}
                                    onChange={this.onchangeLName} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>NIC Number :</b></label>
                                <input 
                                    type="text"
                                    placeholder="Add NIC Number"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.nic}
                                    onChange={this.onchangeNic} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date Of Birth : </b></label>
                                <div>
                                    <DatePicker
                                        className="form-control is-invalid"
                                        selected={this.state.dateOfBirth}
                                        onChange={this.onchangeDateOfBirth} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Relation Type : </b></label><br />
                                <select 
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="relationType"
                                    value={this.state.relationType}
                                    onChange={this.onchangeRelationType}>

                                    <option>Select Relation Type</option>
                                    <option value="Spousal">Spousal</option>
                                    <option value="Intimate Personal">Intimate Personal</option>
                                    <option value="Family">Family</option>
                                    <option value="Informal Care">Informal Care</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Religion : </b></label><br />
                                <select 
                                    style={{ marginLeft: 0 + 'rem' }}
                                    id="dropdown-item-button"
                                    className="btn btn-outline-dark btn btn-secondary text-light"
                                    name="religion"
                                    value={this.state.religion}
                                    onChange={this.onchangeReligion}>
                                        
                                    <option>Select Religion</option>
                                    <option value="Theravada Buddhist">Theravada Buddhist</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Muslim">Muslim</option>
                                    <option value="Roman Catholic">Roman Catholic</option>
                                    <option value="Christian">Christian</option>
                                </select>
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
                                >
                                    <option>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>    

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Address :</b></label>
                                <input 
                                    type="text"
                                    placeholder="Add Address"
                                    required
                                    className="form-control is-invalid"
                                    value={this.state.address}
                                    onChange={this.onchangeAddress} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Phone : </b></label>
                                <input 
                                    type="number"
                                    placeholder="Add Phone Number"
                                    required
                                    numberformat="true"
                                    format="### ###-####"
                                    mask="_"
                                    className="form-control is-invalid"
                                    value={this.state.phone}
                                    onChange={this.onchangePhone} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Description : </b></label>
                                <textarea 
                                    type="text"
                                    placeholder="Add Description"
                                    required
                                    className="form-control is-valid"
                                    value={this.state.description}
                                    onChange={this.onchangeDescription} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Used Weapon(s) :</b></label>
                                <input 
                                    type="text"
                                    placeholder="Add Weapon(s)"
                                    className="form-control is-valid"
                                    value={this.state.weapon}
                                    onChange={this.onchangeWeapon} />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date : </b></label>
                                <div></div>
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.date}
                                    onChange={this.onchangeDate} />

                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Officer Incharge :</b></label>
                                <input 
                                    type="text"
                                    placeholder="Add Officer Incharge"
                                    className="form-control is-valid"
                                    value={this.state.officer_incharge}
                                    onChange={this.onchangeOfficerIncharge} />

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
