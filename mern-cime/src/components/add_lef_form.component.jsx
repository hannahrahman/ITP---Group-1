import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css"
import { TextField } from '@material-ui/core'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import '../App.css';
import emailjs from 'emailjs-com'
import { storage } from '../firebase';

export default class CreateLEF extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this);
        this.onchangeDateOfIssue = this.onchangeDateOfIssue.bind(this);
        this.onchangeVictimFullName = this.onchangeVictimFullName.bind(this);
        this.onchangeDateOfBirth = this.onchangeDateOfBirth.bind(this);
        this.onchangeAge = this.onchangeAge.bind(this);
        this.onchangeAdmission = this.onchangeAdmission.bind(this);
        this.onchangeHospital = this.onchangeHospital.bind(this);
        this.onchangeWardNo = this.onchangeWardNo.bind(this);
        this.onchangeDate = this.onchangeDate.bind(this);
        this.onchangeDateOfDischarge = this.onchangeDateOfDischarge.bind(this);
        this.onchangeRegistrationNumber = this.onchangeRegistrationNumber.bind(this);
        this.onchangeNomineeName = this.onchangeNomineeName.bind(this);
        this.onchangeAddress = this.onchangeAddress.bind(this);
        this.onchangeReason = this.onchangeReason.bind(this);
        this.onchangeRank = this.onchangeRank.bind(this);
        this.onchangeNatureOfBodilyHarm = this.onchangeNatureOfBodilyHarm.bind(this);
        this.onchangeWeapon = this.onchangeWeapon.bind(this);
        this.onchangeCategoryOfHurt = this.onchangeCategoryOfHurt.bind(this);
        this.onchangeConsumptionOfAlcohol = this.onchangeConsumptionOfAlcohol.bind(this);
        this.onchangeOther = this.onchangeOther.bind(this);
        this.onchangeRemarks = this.onchangeRemarks.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            refNo: '',
            dateOfIssue: '',
            victimFullName: '',
            dateOfBirth: '',
            age: '',
            admission: '',
            hospital: '',
            wardNo: '',
            date: '',
            dateOfDischarge: '',
            registrationNumber: '',
            nomineeName: '',
            address: '',
            reason: '',
            rank: '',
            natureOfBodilyHarm: '',
            weapon: '',
            categoryOfHurt: '',
            consumptionOfAlcohol: '',
            other: '',
            remarks: '',
        }
    }

    //************************************************* DEMO Button **********************************************************//

    handleDemo = () => {
        Array.from(document.querySelectorAll('input'))
        this.setState({
            refNo: 'L01',
            dateOfIssue: '2005-02-20',
            victimFullName: 'Dhanannjaya',
            dateOfBirth: '1999-02-20',
            age: '21',
            admission: 'A01',
            hospital: 'Ja-ela',
            wardNo: 'W01',
            date: '2005-02-15',
            dateOfDischarge: '2005-03-20',
            registrationNumber: 'REG123',
            nomineeName: 'Angelo',
            address: 'Colombo',
            reason: 'Killing',
            rank: '1',
            natureOfBodilyHarm: 'Cut',
            weapon: 'Sharp',
            categoryOfHurt: 'Grievous',
            consumptionOfAlcohol: 'Negative',
            other: 'Signs Of Anal Penetration',
            remarks: 'Bad condition',
        });
    };

    //************************************************* RESET Button **********************************************************//

    handleReset = () => {
        Array.from(document.querySelectorAll('input'));
        this.setState({
            refNo: '',
            dateOfIssue: '',
            victimFullName: '',
            dateOfBirth: '',
            age: '',
            admission: '',
            hospital: '',
            wardNo: '',
            date: '',
            dateOfDischarge: '',
            registrationNumber: '',
            nomineeName: '',
            address: '',
            reason: '',
            rank: '',
            natureOfBodilyHarm: '',
            weapon: '',
            categoryOfHurt: '',
            consumptionOfAlcohol: '',
            other: '',
            remarks: '',
        });
    };

    //************************************************* TAKING VALUES FROM IMAGE WHEN THE VALUE GETS CHANGED **********************************************************//

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }

    //************************************************* STORING THE IMAGES IN THE FIREBASE **********************************************************//

    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`Legal Examination images/${image.name}`).put(image);
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
                storage.ref('Legal Examination images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            });
    }

    //************************************************* TAKING VALUES FROM INPUT FIELDS WHEN THE VALUE GETS CHANGED AND ASSIGNING IT TO VARIABLES **********************************************************//

    onchangeRefno(e) {
        this.setState({
            refNo: e.target.value
        });
    }

    onchangeDateOfIssue(e) {
        this.setState({
            dateOfIssue: e.target.value
        });
    }

    onchangeVictimFullName(e) {
        this.setState({
            victimFullName: e.target.value
        });
    }

    onchangeDateOfBirth(e) {
        this.setState({
            dateOfBirth: e.target.value
        });
    }

    onchangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onchangeAdmission(e) {
        this.setState({
            admission: e.target.value
        });
    }

    onchangeHospital(e) {
        this.setState({
            hospital: e.target.value
        });
    }

    onchangeWardNo(e) {
        this.setState({
            wardNo: e.target.value
        });
    }

    onchangeDateOfDischarge(e) {
        this.setState({
            dateOfDischarge: e.target.value
        });
    }

    onchangeWeapon(e) {
        this.setState({
            weapon: e.target.value
        });
    }

    onchangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onchangeRegistrationNumber(e) {
        this.setState({
            registrationNumber: e.target.value
        });
    }

    onchangeNomineeName(e) {
        this.setState({
            nomineeName: e.target.value
        });
    }

    onchangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onchangeReason(e) {
        this.setState({
            reason: e.target.value
        });
    }

    onchangeRank(e) {
        this.setState({
            rank: e.target.value
        });
    }

    onchangeNatureOfBodilyHarm(e) {
        this.setState({
            natureOfBodilyHarm: e.target.value
        })
    }

    onchangeCategoryOfHurt(e) {
        this.setState({
            categoryOfHurt: e.target.value
        })
    }

    onchangeConsumptionOfAlcohol(e) {
        this.setState({
            consumptionOfAlcohol: e.target.value
        })
    }

    onchangeOther(e) {
        this.setState({
            other: e.target.value
        })
    }

    onchangeRemarks(e) {
        this.setState({
            remarks: e.target.value
        })
    }

    //************************************************* VALIDATIONS **********************************************************//

    validate = () => {
        let isError = false;
        const errors = {
            refNoError: '',
            dateOfIssueError: '',
            victimFullNameError: '',
            dateOfBirthError: '',
            ageError: '',
            admissionError: '',
            hospitalError: '',
            wardNoError: '',
            dateError: '',
            dateOfDischargeError: '',
            registrationNumberError: '',
            nomineeNameError: '',
            addressError: '',
            reasonError: '',
            rankError: '',
            natureOfBodilyHarmError: '',
            weaponError: '',
            categoryOfHurtError: '',
            consumptionOfAlcoholError: '',
            otherError: '',
            remarksError: '',
        };

        //************************************************* REFERENCE NUMBER VALIDATION **********************************************************//

        if (!this.state.refNo) {
            isError = true;
            errors.refNoError = "Reference number can not be blank!"
            this.state.error1 = true
            toast.error("Reference number Field is empty");
        } else if (!this.state.refNo.match("^$|^[a-zA-Z]+")) {
            isError = true;
            errors.refNoError = "Reference must be simple or capitalized!"
            this.state.error1 = true
            toast.error("Reference must be simple or capitalized!");
        } else
            this.state.error1 = false;

        //************************************************* DATE OF ISSUE VALIDATION **********************************************************//

        if (!this.state.dateOfIssue) {
            isError = true;
            errors.dateOfIssueError = "Date of Issue can not be blank!"
            this.state.error2 = true
        } else if (!this.state.dateOfIssue.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
            isError = true;
            errors.dateOfIssueError = "Date must be YYYY-MM-DD!"
            this.state.error2 = true
        } else
            this.state.error2 = false;

        //************************************************* VICTIM FULL NAME VALIDATION **********************************************************//

        if (!this.state.victimFullName) {
            isError = true;
            errors.victimFullNameError = "Victim Full Name can not be blank"
            this.state.error3 = true
            toast.error("Victim Full Name Field is empty", {
                transition: Flip
            });;
        } else
            this.state.error3 = false;

        //************************************************* DATE OF BIRTH VALIDATION **********************************************************//

        if (!this.state.dateOfBirth) {
            isError = true;
            errors.dateOfBirthError = "Date of Birth can not be blank!"
            this.state.error4 = true
        } else if (!this.state.dateOfBirth.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
            isError = true;
            errors.dateOfBirthError = "Date must be YYYY-MM-DD!"
            this.state.error4 = true
        } else
            this.state.error4 = false;

        //************************************************* AGE VALIDATION **********************************************************//

        if (!this.state.age) {
            this.state.error5 = true
            errors.ageError = "Age can not be blank"
            toast.error("Age Field is empty", {
                transition: Flip
            })
        }
        else if (this.state.age.length > 3) {
            isError = true;
            errors.ageError = "Length can not be greater than 3!"
            this.state.error5 = true
            toast.error("Length can not be greater than 3!", {
                transition: Flip
            })
        }
        else
            this.state.error5 = false

        //************************************************* ADMISSION VALIDATION **********************************************************//

        if (!this.state.admission) {
            isError = true;
            errors.admissionError = "Admission can not be blank"
            this.state.error6 = true
            toast.error("Admission Number Field is empty", {
                transition: Flip
            });
        } else
            this.state.error6 = false;

        //************************************************* HOSPITAL VALIDATION **********************************************************//

        if (!this.state.hospital) {
            isError = true;
            errors.hospitalError = "Hospital field can not be blank"
            this.state.error7 = true
            toast.error("Hospital field is empty", {
                transition: Flip
            });;
        } else
            this.state.error7 = false;

        //************************************************* WARD NUMBER VALIDATION **********************************************************//

        if (!this.state.wardNo) {
            isError = true;
            errors.wardNoError = "Ward Number can not be blank"
            this.state.error8 = true
            toast.error("Ward Number Field is empty", {
                transition: Flip
            });
        } else
            this.state.error8 = false;

        //************************************************* DATE VALIDATION **********************************************************//

        if (!this.state.date) {
            isError = true;
            errors.dateError = "Date can not be blank!"
            this.state.error9 = true
        } else if (!this.state.date.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
            isError = true;
            errors.dateError = "Date must be YYYY-MM-DD!"
            this.state.error9 = true
        } else
            this.state.error9 = false;

        //************************************************* DATE OF DISCHARGE VALIDATION **********************************************************//

        if (!this.state.dateOfDischarge) {
            isError = true;
            errors.dateOfDischargeError = "Date Of Discharge can not be blank!"
            this.state.error10 = true
        } else if (!this.state.dateOfDischarge.match("([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))")) {
            isError = true;
            errors.dateOfDischargeError = "Date must be YYYY-MM-DD!"
            this.state.error10 = true
        } else
            this.state.error10 = false;

        //************************************************* REGISTRATION NUMBER VALIDATION **********************************************************//

        if (!this.state.registrationNumber) {
            isError = true;
            errors.registrationNumberError = "Registration Number can not be blank"
            this.state.error11 = true
            toast.error("Registration Number Field is empty", {
                transition: Flip
            });
        } else
            this.state.error11 = false;

        //************************************************* NOMINEE NAME VALIDATION **********************************************************//

        if (!this.state.nomineeName) {
            isError = true;
            errors.nomineeNameError = "Nominee Name can not be blank"
            this.state.error12 = true
            toast.error("Nominee Name Field is empty", {
                transition: Flip
            });
        } else
            this.state.error12 = false;

        //************************************************* ADDRESS VALIDATION **********************************************************//

        if (!this.state.address) {
            isError = true;
            errors.addressError = "Address can not be blank"
            this.state.error13 = true
            toast.error("Address Field is empty", {
                transition: Flip
            });
        } else
            this.state.error13 = false;

        //************************************************* REASON VALIDATION **********************************************************//

        if (!this.state.reason) {
            isError = true;
            errors.reasonError = "Reason can not be blank"
            this.state.error14 = true
            toast.error("Reason Field is empty", {
                transition: Flip
            });
        } else
            this.state.error14 = false;

        //************************************************* RANK VALIDATION **********************************************************//

        if (!this.state.rank) {
            isError = true;
            errors.rankError = "Rank can not be blank"
            this.state.error15 = true
            toast.error("Rank Field is empty", {
                transition: Flip
            });
        } else
            this.state.error15 = false;

        //************************************************* NATURE OF BODILY HARM VALIDATION **********************************************************//

        if (!this.state.natureOfBodilyHarm) {
            isError = true;
            errors.natureOfBodilyHarmError = "This fild is not selected can not be blank"
            this.state.error16 = true
            toast.error("Nature Of Bodily Harm Field is not selectd", {
                transition: Flip
            });
        } else
            this.state.error16 = false;

        //************************************************* WEAPON VALIDATION **********************************************************//

        if (!this.state.weapon) {
            isError = true;
            errors.weaponError = "This fild is not selected can not be blank"
            this.state.error17 = true
            toast.error("Weapon Field is not selectd", {
                transition: Flip
            });
        } else
            this.state.error17 = false;

        //************************************************* CATEGORY OF HURT VALIDATION **********************************************************//

        if (!this.state.categoryOfHurt) {
            isError = true;
            errors.categoryOfHurtError = "This fild is not selected can not be blank"
            this.state.error18 = true
            toast.error("Category of hurt Field is not selectd", {
                transition: Flip
            });
        } else
            this.state.error18 = false;

        //************************************************* CONSUMPTION OF ALCOHOL VALIDATION **********************************************************//

        if (!this.state.consumptionOfAlcohol) {
            isError = true;
            errors.consumptionOfAlcoholError = "This fild is not selected can not be blank"
            this.state.error19 = true
            toast.error("Consumption of alcohol Field is not selectd", {
                transition: Flip
            });
        } else
            this.state.error19 = false;

        //************************************************* OTHER VALIDATION **********************************************************//

        if (!this.state.other) {
            isError = true;
            errors.otherError = "This fild is not selected can not be blank"
            this.state.error20 = true
            toast.error("Other Field is not selectd", {
                transition: Flip
            });
        } else
            this.state.error20 = false;

        //************************************************* REMARKS VALIDATION **********************************************************//

        if (!this.state.remarks) {
            isError = true;
            errors.remarksError = "Remark can not be blank"
            this.state.error21 = true
            toast.error("Remark Field is empty", {
                transition: Flip
            });
        } else
            this.state.error21 = false;

        this.setState({
            ...this.state,
            ...errors
        });
        return isError;
    };

    //************************************************* SENDING FORM VALUES TO DB **********************************************************//

    onSubmit(e) {
        e.preventDefault();

        //************************************************* SENDING SUBMITTED VALUES BY VIA EMAIL **********************************************************//

        emailjs.sendForm('gmail', 'template_36hh0c9', e.target, 'user_O5ZPxzWQAB8qNzjLnTeTz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        //************************************************* ASSIGNING THE VALUES TO VARIABES **********************************************************//

        const obj = {
            refNo: this.state.refNo,
            dateOfIssue: this.state.dateOfIssue,
            victimFullName: this.state.victimFullName,
            dateOfBirth: this.state.dateOfBirth,
            age: this.state.age,
            admission: this.state.admission,
            hospital: this.state.hospital,
            wardNo: this.state.wardNo,
            date: this.state.date,
            dateOfDischarge: this.state.dateOfDischarge,
            registrationNumber: this.state.registrationNumber,
            nomineeName: this.state.nomineeName,
            address: this.state.address,
            rank: this.state.rank,
            natureOfBodilyHarm: this.state.natureOfBodilyHarm,
            weapon: this.state.weapon,
            categoryOfHurt: this.state.categoryOfHurt,
            consumptionOfAlcohol: this.state.consumptionOfAlcohol,
            other: this.state.other,
            remarks: this.state.remarks,
        };
        //window.location("/")
        console.log(obj)

        //************************************************* SENDING VALUES TO DB **********************************************************//

        axios.post('http://localhost:5000/lef/add', obj).then(res => console.log(res.data));

        //************************************************* PUTTING DEFAULT VLAUES AFTER SUBMIT **********************************************************//

        this.setState({
            refNo: '',
            dateOfIssue: '',
            victimFullName: '',
            dateOfBirth: '',
            age: '',
            admission: '',
            hospital: '',
            wardNo: '',
            date: '',
            dateOfDischarge: '',
            registrationNumber: '',
            nomineeName: '',
            address: '',
            reason: '',
            rank: '',
            natureOfBodilyHarm: '',
            weapon: '',
            categoryOfHurt: '',
            consumptionOfAlcohol: '',
            other: '',
            remarks: ''
        })

    }

    //************************************************* LEGAL EXAMINATION FORM **********************************************************//

    render() {
        return (

            <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
                <TabList >
                    <div className="tab text-danger">
                        <Tab style={{ marginLeft: 20 + 'rem' }}><b>Police Station Details</b></Tab>
                        <Tab ><b>Medical Officer Details</b></Tab>
                        <Tab ><b>Examinee Details</b></Tab>
                        <Tab ><b>Examinee Details part 2</b></Tab>
                    </div>
                </TabList>

                <div className="container lef" style={{ marginTop: 1 + 'rem' }}>

                    <div className="card text-white  bg-light lef"  >

                        <form onSubmit={this.onSubmit} style={{ margin: "auto" }} className="needs-validation" noValidate={true}>
                            <TabPanel>
                                <div className="card-header bg-dark lef_header"><h3>Police Station Details</h3></div>
                                <br />
                                <div className="row">
                                    <div className="col form-group txt" >

                                        <TextField
                                            type="text"
                                            fullWidth
                                            name="refNo"
                                            variant="outlined"
                                            color="secondary"
                                            label="Reference Number"
                                            error={this.state.error1}
                                            value={this.state.refNo}
                                            onChange={this.onchangeRefno}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.refNoError}</span>
                                    </div>
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            fullWidth
                                            required
                                            variant="outlined"
                                            color="secondary"
                                            label="Date Of Issue"
                                            error={this.state.error2}
                                            name="dateOfIssue"
                                            value={this.state.dateOfIssue}
                                            onChange={this.onchangeDateOfIssue}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.dateOfIssueError}</span>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            error={this.state.error3}
                                            label="Victim Full Name"
                                            name="victimFullName"
                                            value={this.state.victimFullName}
                                            onChange={this.onchangeVictimFullName}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.victimFullNameError}</span>

                                    </div>

                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            error={this.state.error4}
                                            label="Date Of Birth"
                                            name="dateOfBirth"
                                            value={this.state.dateOfBirth}
                                            onChange={this.onchangeDateOfBirth}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.dateOfBirthError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Age"
                                            name="age"
                                            error={this.state.error5}
                                            value={this.state.age}
                                            onChange={this.onchangeAge}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.ageError}</span>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>

                                <div className="card-header bg-dark lef_header"><h3>Medical Officer Details</h3></div>
                                <br />
                                <div className="row">
                                    <div className="col form-group txt" >

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Admission"
                                            name="admission"
                                            error={this.state.error6}
                                            value={this.state.admission}
                                            onChange={this.onchangeAdmission}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.admissionError}</span>
                                    </div>

                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Hospital"
                                            name="hospital"
                                            error={this.state.error7}
                                            value={this.state.hospital}
                                            onChange={this.onchangeHospital}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.hospitalError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Ward No"
                                            name="wardNo"
                                            error={this.state.error8}
                                            value={this.state.wardNo}
                                            onChange={this.onchangeWardNo}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.wardNoError}</span>
                                    </div>

                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Date"
                                            name="date"
                                            error={this.state.error9}
                                            value={this.state.date}
                                            onChange={this.onchangeDate}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.dateError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Date of Discharge"
                                            name="dateOfDischarge"
                                            error={this.state.error10}
                                            value={this.state.dateOfDischarge}
                                            onChange={this.onchangeDateOfDischarge}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.dateOfDischargeError}</span>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="card-header bg-dark lef_header"><h3>Examinee Details</h3></div>
                                <br />
                                <div className="row">
                                    <div className="col form-group txt" >

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Registration Number"
                                            name="registrationNumber"
                                            error={this.state.error11}
                                            value={this.state.registrationNumber}
                                            onChange={this.onchangeRegistrationNumber}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.registrationNumberError}</span>
                                    </div>

                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Nominee’s Name"
                                            name="nomineeName"
                                            error={this.state.error12}
                                            value={this.state.nomineeName}
                                            onChange={this.onchangeNomineeName}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.nomineeNameError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Address"
                                            name="address"
                                            error={this.state.error13}
                                            value={this.state.address}
                                            onChange={this.onchangeAddress}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.addressError}</span>
                                    </div>

                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Reason"
                                            name="reason"
                                            error={this.state.error14}
                                            value={this.state.reason}
                                            onChange={this.onchangeReason}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.reasonError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Rank"
                                            name="rank"
                                            error={this.state.error15}
                                            value={this.state.rank}
                                            onChange={this.onchangeRank}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.rankError}</span>
                                    </div>

                                    <div className="col form-group txt">
                                        <label style={{ marginTop: -5 + 'rem' }} className="text-dark">Nature Of Bodily Harm</label>

                                        <select
                                            id="dropdown-item-button"
                                            className="btn btn-outline-dark btn btn-secondary text-light"
                                            name="natureOfBodilyHarm"
                                            style={{ marginTop: -0.5 + 'rem' }}
                                            error={this.state.error16}
                                            value={this.state.natureOfBodilyHarm}
                                            onChange={this.onchangeNatureOfBodilyHarm}
                                        >
                                            <option >Select a Category</option >
                                            <option value="Abrasion">Abrasion</option >
                                            <option value="Cut">Cut</option  >
                                            <option value="Bite">Bite</option  >
                                            <option value="Contusion">Contusion</option  >
                                            <option value="Fractured">Fractured</option  >
                                            <option value="Dislocation">Dislocation</option  >
                                            <option value="Laceration">Laceration</option >
                                            <option value="Firearm Injury">Firearm Injury</option  >
                                            <option value="Explosive Injury">Explosive Injury</option  >
                                            <option value="Stab">Stab</option  >
                                            <option value="Burns">Burns</option  >
                                            <option value="Other">Other</option  >
                                            <option value="None">None</option  >
                                        </select>

                                        <br></br>
                                        <span className="text-danger">{this.state.natureOfBodilyHarmError}</span>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="card-header bg-dark lef_header" ><h3>Examinee Details part 2</h3></div>
                                <br />

                                <div className="row">
                                    <div className="col form-group txt">
                                        <label style={{ marginLeft: 0.5 + 'rem' }} className="text-dark">Weapon :</label><br />

                                        <select
                                            style={{ marginLeft: 0.5 + 'rem' }}
                                            id="dropdown-item-button"
                                            className="btn btn-outline-dark btn btn-secondary text-light"
                                            name="weapon"
                                            error={this.state.error17}
                                            value={this.state.weapon}
                                            onChange={this.onchangeWeapon}
                                        >
                                            <option >Select a field</option >
                                            <option value="Blunt">Blunt</option >
                                            <option value="Sharp">Sharp</option  >
                                            <option value="Firearm">Firearm</option  >
                                            <option value="Explosive device">Explosive device</option  >
                                            <option value="Others">Others</option  >
                                        </select>

                                        <br></br>
                                        <span className="text-danger">{this.state.weaponError}</span>
                                    </div>

                                    <div className="col form-group txt">
                                        <label style={{ marginLeft: 0.5 + 'rem' }} className="text-dark">Category Of Hurt :</label><br />

                                        <select
                                            style={{ marginLeft: 0.5 + 'rem' }}
                                            id="dropdown-item-button"
                                            className="btn btn-outline-dark btn btn-secondary text-light"
                                            name="categoryOfHurt"
                                            error={this.state.error18}
                                            value={this.state.categoryOfHurt}
                                            onChange={this.onchangeCategoryOfHurt}
                                        >
                                            <option >Select a field</option >
                                            <option value="Non Grievous">Non Grievous</option >
                                            <option value="Grievous">Grievous</option  >
                                            <option value="Fatal">Fatal</option  >
                                            <option value="Does It Endanger life?">Does It Endanger life?</option  >
                                        </select>

                                        <br></br>
                                        <span className="text-danger">{this.state.categoryOfHurtError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">
                                        <label style={{ marginLeft: 0.5 + 'rem' }} className="text-dark">Consumption Of Alcohol:</label><br />

                                        <select
                                            style={{ marginLeft: 0.5 + 'rem' }}
                                            id="dropdown-item-button"
                                            className="btn btn-outline-dark btn btn-secondary text-light"
                                            name="consumptionOfAlcohol"
                                            error={this.state.error19}
                                            value={this.state.consumptionOfAlcohol}
                                            onChange={this.onchangeConsumptionOfAlcohol}
                                        >
                                            <option >Select a field</option >
                                            <option value="Breathing / Smelling">Breathing / Smelling</option >
                                            <option value="Under Influence">Under Influence</option  >
                                            <option value="Negative">Negative</option  >
                                        </select>

                                        <br></br>
                                        <span className="text-danger">{this.state.consumptionOfAlcoholError}</span>
                                    </div>

                                    <div className="col form-group txt">
                                        <label style={{ marginLeft: 0.5 + 'rem' }} className="text-dark">Other:</label><br />

                                        <select
                                            style={{ marginLeft: 0.5 + 'rem' }}
                                            id="dropdown-item-button"
                                            className="btn btn-outline-dark btn btn-secondary text-light"
                                            name="other"
                                            error={this.state.error20}
                                            value={this.state.other}
                                            onChange={this.onchangeOther}
                                        >
                                            <option className="container">Select a field</option >
                                            <option value="Signs Of Vaginal/Hymen Penetration Present">Signs Of Vaginal/Hymen Penetration Present</option >
                                            <option value="Signs Of Anal Penetration">Signs Of Anal Penetration</option  >
                                            <option value="Signs Consistent With Inter Labial Penetration Present">Signs Consistent With InterLabial Penetration Present</option  >
                                            <option value="Investigations">Investigations</option >
                                            <option value="Other">Other</option >
                                        </select>

                                        <br></br>
                                        <span className="text-danger">{this.state.otherError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">

                                        <TextField
                                            type="text"
                                            required
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            label="Remarks"
                                            name="remarks"
                                            error={this.state.error21}
                                            value={this.state.remarks}
                                            onChange={this.onchangeRemarks}
                                        />

                                        <br></br>
                                        <span className="text-danger">{this.state.remarksError}</span>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col form-group txt">
                                        <progress className="progress-bar progress-bar-striped bg-danger" role="progressbar" value={this.state.progress} max="100" />
                                        <input type="file" onChange={this.handleChange} />
                                        <br />
                                        <img src={this.state.url || 'http://via.placeholder.com/300x200'} alt="Uploaded images" height="200" width="300" />
                                        <br />
                                        <input type="button" onClick={this.handleUpload} className="btn btn-outline-warning btn btn-dark" value="upload" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="submit" style={{ marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
                                    <input type="reset" style={{ marginLeft: 0.5 + 'rem' }} value="Reset" className="btn btn-outline-warning btn btn-dark" onClick={this.handleReset} />
                                    <input type="button" style={{ marginLeft: 0.5 + 'rem' }} className="btn btn-outline-success btn btn-dark" onClick={this.handleDemo} value="Demo" />
                                </div>

                            </TabPanel>
                        </form>
                    </div >
                </div >
            </Tabs>
        )
    }
}



