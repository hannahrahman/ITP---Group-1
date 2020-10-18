import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import axios from 'axios'
import { TextField } from '@material-ui/core'
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import emailjs from 'emailjs-com'
import '../App.css';
import PDF from './pdf.component.jsx'
import { storage } from '../firebase';

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
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

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
            image: null,
            url: '',
            progress: 0
        }
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`Complain/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('Complain').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            });
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
            lname: e.target.value
        })
    }

    onchangeNic(e) {
        this.setState({
            nic: e.target.value
        })
    }

    onchangeDateOfBirth(e) {
        this.setState({
            dateOfBirth: e.target.value

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

    onchangeDate(e) {
        this.setState({
            date: e.target.value
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
            dateOfBirthError: '',
            religionError: '',
            sexError: '',
            addressError: '',
            phoneError: '',
            descriptionError: '',
            dateError: '',
            officer_inchargeError: '',
        };

        /*if (!this.state.refNo) {
            isError = true;
            errors.refNoError = "Reference number can not be blank!"
            this.state.error1 = true
        } else if (!this.state.refNo.match("^$|^[a-zA-Z]+")) {
            isError = true;
            errors.refNoError = "Reference must be simple or capitalized!"
            this.state.error1 = true
        } else
            this.state.error1 = false;*/

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
            toast.error("Sex is not selected", {
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
            });
        } else
            this.state.error8 = false;

        /* if (!this.state.phone) {
             isError = true;
             errors.phoneError = "Phone number can not be blank!"
             this.state.error9 = true
             toast.error("Phone number can not be blank!", {
                 transition: Flip
             })
         } else if (!this.state.phone.match("^$|^[0-9]+")) {
             isError = true;
             errors.phoneError = "Invalid phone number!"
             this.state.error9 = true
             toast.error("Invalid phone number!", {
                 transition: Flip
             })
         } else if (this.state.phone.length > 10) {
             isError = true;
             errors.phoneError = "Length can not be greater than 10!"
             this.state.error9 = true
             toast.error("Length can not be greater than 10!", {
                 transition: Flip
             })
         } else
             this.state.error9 = false;*/

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

        if (!this.state.dateOfBirth) {
            isError = true;
            errors.dateOfBirthError = "Date of Birth can not be blank!"
            this.state.error12 = true
        } else if (!this.state.dateOfBirth.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
            isError = true;
            errors.dateOfBirthError = "Date must be YYYY-MM-DD!"
            this.state.error12 = true
        } else
            this.state.error12 = false;

        /* if (!this.state.date) {
             isError = true;
             errors.dateError = "Date of Birth can not be blank!"
             this.state.error13 = true
         } else if (!this.state.date.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
             isError = true;
             errors.dateError = "Date must be YYYY-MM-DD!"
             this.state.error13 = true
         } else
             this.state.error13 = false;*/

        this.setState({
            ...this.state,
            ...errors
        });
        return isError;
    };



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
            date: '',
            officer_incharge: '',
        });
    };

    handleDemo = () => {
        this.setState({
            refNo: '123',
            complainType: 'Crime',
            fname: 'Julien',
            lname: 'Angelo',
            nic: '992413414V',
            dateOfBirth: '1999/05/22',
            religion: 'Christian',
            sex: 'Male',
            address: 'Colombo',
            phone: 778899568,
            description: 'Killing',
            weapon: 'Knife',
            date: '2020-05-22',
            officer_incharge: 'Danannjay',
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            emailjs.sendForm('gmail', 'template_q0v9cyz', e.target, 'user_O5ZPxzWQAB8qNzjLnTeTz')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
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
            toast.success("DB is updated.", {
                position: toast.POSITION.TOP_CENTER,
                draggable: true,
                transition: Flip,
                autoClose: 5000
            });
            // window.location = '/Complain';
            axios.post('http://localhost:5000/Addcomplain/add', complain).then(res => console.log(res.data));

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
                date: '',
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
        }
        
        toast.success("Welcome Sir.", {
            position: toast.POSITION.TOP_CENTER,
            draggable: true,
            transition: Flip,
            autoClose: 5000
        }); 
        */

        /* toast.success("success");
         toast.info("you have been dannnnaaaaa");
         toast.warn("you have been warned buhahahaha....");*/

        return (
            <>
                < div className="complain" >
                    <>

                        <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
                    </>
                    <div className="card text-white  bg-light mb-3 " style={{ marginLeft: 8.5 + 'rem' }} >
                        <div className="card-header bg-dark"><h3>Add Complain</h3></div>
                        <div className="card-body " >

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
                                        <div>
                                            <TextField
                                                variant="outlined"
                                                color="secondary"
                                                name="dateOfBirth"
                                                required
                                                label="Date Of Birth"
                                                placeholder="YYYY-MM-DD"
                                                selected={this.state.dateOfBirth}
                                                error={this.state.error12}
                                                onChange={this.onchangeDateOfBirth} />
                                            <br></br>
                                            <span className="text-danger">{this.state.dateOfBirthError}</span>
                                        </div>


                                    </div>

                                    <div className="col form-group" style={{ marginLeft: -9 + 'rem' }}>

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

                                    <div className="col form-group">
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
                                        <br></br>
                                        <span className="text-danger">{this.state.phoneError}</span>
                                    </div>
                                </div>
                                <div className="row first-Name" >
                                    <div className="col form-group ">
                                        <TextField

                                            id="outlined-textarea"
                                            label="Description"
                                            multiline
                                            required
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

                                    <div className="col form-group " >
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

                                    <div className="col form-group " >

                                        <TextField
                                            variant="outlined"
                                            color="secondary"
                                            name="Date"
                                            required
                                            label="Date"
                                            placeholder="YYYY-MM-DD"
                                            error={this.state.error13}
                                            selected={this.state.date}
                                            onChange={this.onchangeDate} />
                                        <br></br>
                                        <span className="text-danger">{this.state.dateError}</span>
                                    </div>

                                    <div className="col form-group " >
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
                                        <div style={{ marginLeft: -50 + 'rem' }}>
                                            <span className="text-danger">{this.state.officer_inchargeError}</span>

                                            <progress className="progress-bar progress-bar-striped bg-danger" role="progressbar" value={this.state.progress} max="100" />
                                            <br />
                                            <input type="file" variant="outlined" onChange={this.handleChange} />
                                            <br />
                                            <img src={this.state.url || 'http://via.placeholder.com/300x200'} alt="Uploaded images" height="200" width="300" />
                                            <br />
                                            <button onClick={this.handleUpload} className="btn btn-outline-warning btn btn-dark">Upload</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" style={{ margin: 'auto', marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
                                    <input type="reset" style={{ marginLeft: 0.5 + 'rem' }} value="Reset" className="btn btn-outline-warning btn btn-dark" onClick={this.handleReset} />
                                    <button type="reset" style={{ marginLeft: 0.5 + 'rem' }} className="btn btn-outline-success btn btn-dark" onClick={this.handleDemo}>Demo</button>
                                    <button style={{ marginLeft: 0.5 + 'rem' }} className="btn btn-outline-success btn btn-dark" onClick={this.createPDF}>Genertate PDF</button>
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
