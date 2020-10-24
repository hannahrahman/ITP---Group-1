import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { TextField } from '@material-ui/core'
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import '../../App.css';

export default class ViewCompletedComplaint extends Component {

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
            date: '',
            officer_incharge: '',
        }

    }

    componentDidMount() {
        toast.success("Welcome TO VIEW DETAILS.", {
            position: toast.POSITION.TOP_CENTER,
            draggable: true,
            transition: Flip,
            autoClose: 5000
        });
        axios.get('http://localhost:5000/Completecomplain/edit/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    refNo: res.data.refNo,
                    complainType: res.data.complainType,
                    fname: res.data.fname,
                    lname: res.data.lname,
                    nic: res.data.nic,
                    dateOfBirth: res.data.dateOfBirth,
                    date: res.data.date,
                    religion: res.data.religion,
                    sex: res.data.sex,
                    address: res.data.address,
                    phone: res.data.phone,
                    description: res.data.description,
                    weapon: res.data.weapon,
                    officer_incharge: res.data.officer_incharge,
                    relationType: res.data.relationType
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <>
                < div className="complain" >
                    <>

                        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
                    </>
                    <div className="card text-white  bg-light mb-3 " style={{ marginLeft: 8.5 + 'rem' }} >
                        <div className="card-header bg-dark"><h3>Completed Complain Detail</h3></div>
                        <div className="card-body " >
                        </div >

                        <div className="container">
                            <form style={{ margin: "auto" }} noValidate='true'>
                                <div className="row">
                                    <div className="col form-group" >
                                        <TextField
                                            className="text_edit"
                                            label="Refno"
                                            disabled
                                            variant="outlined"
                                            value={this.state.refNo}
                                            name="refNo"
                                        />
                                    </div>

                                    <div className="col" >
                                        <div className="form-group">
                                            <TextField
                                                label="Complain Type"
                                                variant="outlined"
                                                disabled
                                                name="complainType"
                                                value={this.state.complainType} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row first-Name">
                                    <div className="col form-group" >
                                        <TextField
                                            variant="outlined"
                                            disabled
                                            fullWidth
                                            name="fname"
                                            label="First Name"
                                            value={this.state.fname} />
                                    </div>

                                    <div className="col form-group">
                                        <TextField
                                            disabled
                                            fullWidth
                                            name="lname"
                                            variant="outlined"
                                            label="Last Name"
                                            value={this.state.lname} />
                                    </div>
                                </div>

                                <div className="row first-Name">
                                    <div className="col form-group">
                                        <TextField
                                            disabled
                                            fullWidth
                                            name="nic"
                                            variant="outlined"
                                            label="NIC Number"
                                            value={this.state.nic} />
                                    </div>

                                    <div className="col form-group">
                                        <TextField
                                            disabled
                                            fullWidth
                                            name="religion"
                                            variant="outlined"
                                            label="Religion"
                                            value={this.state.religion} />
                                    </div>

                                    <div className="col form-group">
                                        <TextField
                                            name="sex"
                                            value={this.state.sex}
                                            disabled
                                            label="Sex"
                                            id="outlined-select"
                                            variant="outlined">
                                        </TextField>
                                    </div>
                                </div>
                                <div className="row first-Name">
                                    <div className="col form-group" >
                                        <div>
                                            <TextField
                                                variant="outlined"
                                                name="dateOfBirth"
                                                disabled
                                                label="Date Of Birth"
                                                value={this.state.dateOfBirth} />
                                        </div>
                                    </div>

                                    <div className="col form-group">
                                        <TextField
                                            disabled
                                            fullWidth
                                            label="Address"
                                            variant="outlined"
                                            name="address"
                                            value={this.state.address} />
                                    </div>

                                    <div className="col form-group">
                                        <TextField
                                            disabled
                                            label="Phone "
                                            variant="outlined"
                                            name="phone"
                                            value={this.state.phone} />
                                    </div>
                                </div>

                                <div className="row first-Name" >
                                    <div className="col form-group ">
                                        <TextField
                                            id="outlined-textarea"
                                            label="Description"
                                            disabled
                                            multiline
                                            name="description"
                                            value={this.state.description}
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </div>

                                    <div className="col form-group " >
                                        <TextField
                                            disabled
                                            fullWidth
                                            label="Weapon(Optionl)"
                                            variant="outlined"
                                            name="weapon"
                                            value={this.state.weapon} />
                                    </div>

                                    <div className="col form-group " >

                                        <TextField
                                            variant="outlined"
                                            name="Date"
                                            label="Date"
                                            disabled
                                            value={this.state.date} />
                                    </div>

                                    <div className="col form-group " >
                                        <TextField
                                            label="Officer Incharge"
                                            fullWidth
                                            disabled
                                            variant="outlined"
                                            name="officer_incharge"
                                            value={this.state.officer_incharge} />
                                    </div>
                                </div>
                            </form>
                        </div >
                        <br></br>
                    </div >
                </div >


            </>
        )
    }
}
