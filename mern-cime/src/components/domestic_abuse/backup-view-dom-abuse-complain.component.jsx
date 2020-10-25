import React, { Component, userRef } from 'react';
import axios from 'axios';
import '../../App.css';

export default class ViewDomesticAbuseComplainBackup extends Component {

    constructor(props) {
        super(props);

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

    //**********get data by id****************************

    componentDidMount(){
        axios.get('http://localhost:5000/domestic_abuse_complains_backup/edit/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                refNo: res.data.refNo,
                complainType: res.data.complainType,
                fname: res.data.fname,
                lname: res.data.lname,
                nic: res.data.nic,
                dateOfBirth: res.data.dateOfBirth,
                religion: res.data.religion,
                sex: res.data.sex,
                address: res.data.address,
                phone: res.data.phone,
                description: res.data.description,
                weapon: res.data.weapon,
                officer_incharge: res.data.officer_incharge,
                relationType: res.data.relationType,
                status: res.data.status
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <div className="complain">
                <div className="card text-white  bg-dark  mb-3" style={{ marginLeft: 8.5 + 'rem' }} >
                    <div className="card-header"><h3>View Complain</h3></div>
                    <div className="card-body" >
                    </div >

                    <div className="container">
                            <div className="form-group" >

                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Refference No :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.refNo}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Complain Type : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.complainType}</label><br />
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>First Name : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.fname}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Last Name :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.lname}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>NIC Number :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.nic}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Date Of Birth : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.dateOfBirth}</label>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Relation Type : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.relationType}</label>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Religion : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.religion}</label>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Gender : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.sex}</label>
                            </div>    

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Address :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.address}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Phone : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.phone}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Description : </b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.description}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Used Weapon(s) :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.weapon}</label>    
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Officer Incharge :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.officer_incharge}</label>
                            </div>

                            <div className="form-group">
                                <label style={{ marginLeft: 0.5 + 'rem' }}><b>Status :</b></label>
                                <label style={{ marginLeft: 0.5 + 'rem' }}>{this.state.status}</label>
                            </div>                        
                    </div >
                </div >
            </div >
        )
    }
}
