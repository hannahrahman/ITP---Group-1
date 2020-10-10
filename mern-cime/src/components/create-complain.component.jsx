import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { TextField } from '@material-ui/core'
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from 'emailjs-com'
toast.success("Welcome Sir.", {
    position: toast.POSITION.TOP_CENTER,
    draggable: true,
    transition: Flip,
    autoClose: 5000
});
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
            refNoError: '',
            complainType: '',
            complainTypeError: '',
            fname: '',
            fnameError: '',
            lname: '',
            lnameError: '',
            nic: '',
            nicError: '',
            dateOfBirth: new Date(),
            dateOfBirthError: '',
            religion: '',
            religionError: '',
            sex: '',
            sexError: '',
            address: '',
            addressError: '',
            phone: new Number(),
            phoneError: '',
            description: '',
            descriptionError: '',
            weapon: '',
            date: new Date(),
            dateError: '',
            officer_incharge: '',
            officer_inchargeError: '',
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



    validate = () => {
        let isError = false;
        const errors = {
            refNoError: '',
            complainTypeError: '',
            fnameError: '',
            lnameError: '',
            nicError: '',
            dateOfBirthError: new Date(),
            religionError: '',
            sexError: '',
            addressError: '',
            phoneError: new Number(),
            descriptionError: '',
            dateError: new Date(),
            officer_inchargeError: '',
        };
        if (this.state.refNo.length <= 0) {
            isError = true;
            errors.refNoError = "Reference Number can not be blank"
            this.state.error1 = true
            toast.error("Ref No : Methana Error ekakk oiii penadda oiii magula", {
                transition: Flip
            });
        }
        else
            this.state.error1 = false;

        if (!this.state.complainType) {
            isError = true;
            errors.complainTypeError = "Complain type can not be blank"
            this.state.error2 = true
            toast.error("Complain Type Error", {
                transition: Flip
            });;
        } else
            this.state.error2 = false;

        if (!this.state.fname) {
            isError = true;
            errors.fnameError = "First Name can not be blank"
            this.state.error3 = true
            toast.error("First Name is empty", {
                transition: Flip
            });;
        } else
            this.state.error3 = false;

        if (!this.state.lname) {
            isError = true;
            errors.lnameError = "Last Name can not be blank"
            this.state.error4 = true
            toast.error("Last Name is empty", {
                transition: Flip
            });;
        } else
            this.state.error4 = false;

        if (!this.state.nic) {
            this.state.error5 = true
            errors.nicError = "NIC number can not be blank"
            toast.error("NIC is empty", {
                transition: Flip
            });;

        } else
            this.state.error5 = false

        if (!this.state.religion) {
            isError = true;
            errors.religionError = "Religion can not be blank"
            this.state.error6 = true
            toast.error("Religion is empty", {
                transition: Flip
            });;
        } else
            this.state.error6 = false;

        if (!this.state.sex) {
            isError = true;
            errors.sexError = "This Field can not be blank"
            this.state.error7 = true
            toast.error("Sex is not selected lajja nathi wada karanna epa oii", {
                transition: Flip
            });;
        } else
            this.state.error = false;

        if (!this.state.address) {
            isError = true;
            errors.addressError = "Address can not be blank"
            this.state.error8 = true
            toast.error("Address is empty", {
                transition: Flip
            });;
        } else
            this.state.error8 = false;

        if (this.state.phone.length > 10) {
            isError = true;
            errors.phoneError = "Enter your Phone number"
            this.state.error9 = true
            toast.error("Phone is empty", {
                transition: Flip
            });;
        } else
            this.state.error9 = false;

        if (!this.state.description) {
            isError = true;
            errors.descriptionError = "Description can not be blank"
            this.state.error10 = true
            toast.error("Description is empty", {
                transition: Flip
            });;
        } else
            this.state.error10 = false;

        if (!this.state.officer_incharge) {
            isError = true;
            errors.officer_inchargeError = "Please enter the officer name"
            this.state.error11 = true
            toast.error("Officer Incharge is empty", {
                transition: Flip
            });;
        } else
            this.state.error11 = false;

        /* if (!this.state.dateOfBirth.indexOf("mm/dd/yyyy") === -1) {
             isError = true;
             errors.dateOfBirthError = "Select a valid Date Of Birth"
         }*/
        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit(e) {
        e.preventDefault();
        const err = this.validate();
        if (!err) {

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
            window.location = '#';
            axios.post('http://localhost:5000/Addcomplain/add', complain).then(res => console.log(res.data));


            emailjs.sendForm('gmail', 'template_q0v9cyz', e.target, 'user_O5ZPxzWQAB8qNzjLnTeTz')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

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
    }

    render() {
        /*const successToast = () => {
            toast("success custom Toast", {
                className: "custom-toast",
                draggable: true,
                position: toast.POSITION.TOP_CENTER
            })
        }*/

        /* toast.success("success");
         toast.info("you have been dannnnaaaaa");
         toast.warn("you have been warned buhahahaha....");*/

        return (

            <div className="container" style={{ marginTop: 1.2 + 'rem' }}>
                <>

                    <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
                </>
                <div className="card text-white  bg-light mb-3" style={{ marginLeft: 8.5 + 'rem' }} >
                    <div className="card-header bg-dark"><h3>Add Complain</h3></div>
                    <div className="card-body" >

                    </div >

                    <div className="container">
                        <form onSubmit={this.onSubmit} method="POST" action="/Complain" style={{ margin: "auto" }} noValidate='true'>
                            <div className="row">
                                <div className="contact">

                                </div>
                                <div className="col form-group" >
                                    <TextField
                                        label="Refno"
                                        required
                                        color="secondary"
                                        type="number"
                                        variant="outlined"
                                        error={this.state.error1}
                                        value={this.state.refNo}
                                        name="refNo"
                                        onChange={this.onchangeRefno}
                                    />

                                    <br></br>
                                    <span className="text-danger">{this.state.refNoError}</span>
                                </div>


                                <div className="col" >
                                    <div className="form-group">
                                        <TextField
                                            type="text"
                                            label="Complain Type"
                                            variant="outlined"
                                            color="secondary"
                                            required
                                            name="complainType"
                                            error={this.state.error2}
                                            value={this.state.complainType}
                                            onChange={this.onchangecomplainType} />
                                        <br></br>
                                        <span className="text-danger">{this.state.complainTypeError}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row first-Name">
                                <div className="col form-group" >
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="fname"
                                        color="secondary"
                                        label="First Name"
                                        value={this.state.fname}
                                        onChange={this.onchangeFName}
                                        error={this.state.error3} />
                                    <br></br>
                                    <span className="text-danger">{this.state.fnameError}</span>

                                </div>
                                <div className="col form-group">
                                    <TextField
                                        type="text"
                                        required
                                        fullWidth
                                        name="lname"
                                        variant="outlined"
                                        color="secondary"
                                        label="Last Name"
                                        value={this.state.lname}
                                        error={this.state.error4}
                                        onChange={this.onchangeLName} />
                                    <br></br>
                                    <span className="text-danger">{this.state.lnameError}</span>
                                </div>
                            </div>
                            <div className="row first-Name">
                                <div className="col form-group">
                                    <TextField
                                        type="text"
                                        required
                                        fullWidth
                                        name="nic"
                                        variant="outlined"
                                        color="secondary"
                                        label="NIC Number"
                                        value={this.state.nic}
                                        error={this.state.error5}
                                        onChange={this.onchangeNic} />
                                    <br></br>
                                    <span className="text-danger">{this.state.nicError}</span>
                                </div>

                                <div className="col form-group">
                                    <TextField
                                        type="text"
                                        required
                                        fullWidth
                                        name="religion"
                                        variant="outlined"
                                        style={{ margin: 'auto' }}
                                        color="secondary"
                                        label="Religion"
                                        value={this.state.religion}
                                        error={this.state.error6}
                                        onChange={this.onchangeReligion} />
                                    <br></br>
                                    <span className="text-danger">{this.state.religionError}</span>
                                </div>
                                <div className="col form-group">
                                    <TextField
                                        style={{ width: 10 + 'rem' }}
                                        select
                                        name="sex"
                                        value={this.state.sex}
                                        error={this.state.error7}
                                        onChange={this.onchangeSex}
                                        color="secondary"

                                        label="Sex"
                                        id="outlined-select"
                                        variant="outlined">

                                        <option value="Male">Male</option >
                                        <option value="Female">Female</option  >
                                    </TextField>

                                    <br></br>
                                    <span className="text-danger">{this.state.sexError}</span>
                                </div>
                            </div>
                            <div className="row first-Name">
                                <div className="col form-group" >
                                    <label className="text-dark">Date Of Birth: </label>
                                    <div>
                                        <DatePicker
                                            className="form-control"
                                            selected={this.state.dateOfBirth}
                                            onChange={this.onchangeDateOfBirth} />
                                    </div>


                                </div>

                                <div className="col form-group" style={{ marginLeft: -9 + 'rem', marginTop: 2 + 'rem' }}>

                                    <TextField
                                        type="text"
                                        required
                                        fullWidth
                                        label="Address"
                                        variant="outlined"
                                        color="secondary"
                                        name="address"
                                        error={this.state.error8}
                                        value={this.state.address}
                                        onChange={this.onchangeAddress} />
                                    <br></br>
                                    <span className="text-danger">{this.state.addressError}</span>
                                </div>

                                <div className="col form-group" style={{ marginTop: 2 + 'rem' }}>
                                    <TextField
                                        type="number"
                                        required

                                        label="Phone "
                                        variant="outlined"
                                        color="secondary"
                                        name="phone"
                                        error={this.state.error9}
                                        value={this.state.phone}
                                        onChange={this.onchangePhone} />

                                </div>
                            </div>
                            <div className="row first-Name" >
                                <div className="col form-group " style={{ marginTop: 2 + 'rem' }} >
                                    <TextField

                                        id="outlined-textarea"
                                        label="Description"
                                        multiline
                                        name="description"
                                        color="secondary"
                                        value={this.state.description}
                                        onChange={this.onchangeDescription}
                                        error={this.state.error10}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                                    <br></br>
                                    <span className="text-danger">{this.state.descriptionError}</span>
                                </div>

                                <div className="col form-group " style={{ marginTop: 2 + 'rem' }}>
                                    <TextField
                                        required

                                        type="text"
                                        fullWidth
                                        label="Weapon(Optionl)"
                                        variant="outlined"
                                        color="secondary"
                                        name="weapon"
                                        value={this.state.weapon}
                                        onChange={this.onchangeWeapon} />
                                </div>

                                <div className="col form-group " style={{ marginTop: 0.6 + 'rem' }}>
                                    <label className="text-dark">Date:
                                    <DatePicker
                                            className="form-control"
                                            selected={this.state.date}
                                            onChange={this.onchangeDate} />
                                    </label>
                                </div>

                                <div className="col form-group " style={{ marginTop: 2 + 'rem' }}>
                                    <TextField
                                        label="Officer Incharge"

                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        required
                                        color="secondary"
                                        name="officer_incharge"
                                        value={this.state.officer_incharge}
                                        error={this.state.error11}
                                        onChange={this.onchangeOfficerIncharge
                                        } />
                                    <br></br>
                                    <span className="text-danger">{this.state.officer_inchargeError}</span>

                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" style={{ margin: 'auto', marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
                            </div>
                        </form>
                    </div >

                </div >
            </div >

        )
    }
}
