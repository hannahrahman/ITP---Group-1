import React, { Component } from 'react'
import axios from 'axios';
import { TextField, ThemeProvider } from '@material-ui/core'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import '../../App.css';
//import { storage } from '../../firebase';


toast.success("Welcome to Miscellaneous Complaints.", {
  position: toast.POSITION.BOTTOM_CENTER,
  draggable: true,
  transition: Flip,
  autoClose: 5000,
  closeOnClick: true
});

export default class MiscellaneousComplaintForm extends Component {

    constructor(props) {
        super(props);

        this.onchangeRefno = this.onchangeRefno.bind(this);
        this.onchangefullname = this.onchangefullname.bind(this);
        this.onchangephonenumber = this.onchangephonenumber.bind(this);
        this.onchangenic = this.onchangenic.bind(this);
        this.onchangedate = this.onchangedate.bind(this);
        this.onchangedescription = this.onchangedescription.bind(this);
        this.onchangedateofincident = this.onchangedateofincident.bind(this);
        this.onchangepersonsinvolved = this.onchangepersonsinvolved.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
       // this.handleUpload = this.handleUpload.bind(this);

        this.state = {
          refNo: '',
          fullname: '',
          phonenumber: '',
          nic: '',
          date: '',
          description: '',
          dateofincident: '',
          personsinvolved: ''
        }
      }
      
  //     handleChange = e => {
  //       if (e.target.files[0]) {
  //           const image = e.target.files[0];
  //           this.setState(() => ({ image }));
  //       }
  //   }

  //   handleUpload = () => {
  //     const { image } = this.state;
  //     const uploadTask = storage.ref(`Complain/${image.name}`).put(image);
  //     uploadTask.on('state_changed',
  //         (snapshot) => {
  //             // progrss function ....
  //             const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  //             this.setState({ progress });
  //         },
  //         (error) => {
  //             // error function ....
  //             console.log(error);
  //         },
  //         () => {
  //             // complete function ....
  //             storage.ref('Complain').child(image.name).getDownloadURL().then(url => {
  //                 console.log(url);
  //                 this.setState({ url });
  //             })
  //         });
  // }
    
      

      onchangeRefno(e) {
        this.setState({
          refNo: e.target.value,
        });
      }
    
      onchangefullname(e) {
        this.setState({
          fullname: e.target.value,
        });
      }
    
      onchangephonenumber(e) {
        this.setState({
          phonenumber: e.target.value,
        });
      }
    
      onchangenic(e) {
        this.setState({
          nic: e.target.value,
        });
      }
    
    
      onchangedate(e) {
        this.setState({
          date: e.target.value,
        });
      }
    
      onchangedescription(e) {
        this.setState({
          description: e.target.value,
        });
      }
    
      onchangedateofincident(e) {
        this.setState({
          dateofincident: e.target.value,
        });
      }
    
      onchangepersonsinvolved(e) {
        this.setState({
          personsinvolved: e.target.value,
        });
      }

      //validation
      validate = () => {
        let isError = false;
        const errors = {
            refNoError: '',
            fullnameError: '',
            phonenumberError: '',
            nicError: '',
            dateError: '',
            descriptionError: '',
            dateofincidentError: '',
            personsinvolvedError: '',
        };


        if (this.state.refNo.length <= 0) {
            isError = true;
            errors.refNoError = "Reference Number cannot be blank"
            this.state.error1 = true
            toast.error("Reference Number cannot be blank", {
                transition: Flip
            });
        }
        else
            this.state.error1 = false;

        if (!this.state.fullname) {
            isError = true;
            errors.fullnameError = "Full Name invalid"
            this.state.error2 = true
            toast.error("Full Name Error", {
                transition: Flip
            });;
        } else
            this.state.error2 = false;

            if (!this.state.phonenumber) {
              isError = true;
              errors.phonenumberError = "Phone number cannot be blank!"
              this.state.error3 = true
              toast.error("Phone number can not be blank!", {
                  transition: Flip
              })
          } else if (!this.state.phonenumber.match("^$|^[0-9]+")) {
              isError = true;
              errors.phonenumberError = "Invalid phone number!"
              this.state.error3 = true
              toast.error("Invalid phone number!", {
                  transition: Flip
              })
          } else if (this.state.phonenumber.length > 10) {
              isError = true;
              errors.phonenumberError = "Phone Number cannot be greater than 10 digits!"
              this.state.error3 = true
              toast.error("Phone Number cannot be greater than 10 digits!", {
                  transition: Flip
              })
          } else
              this.state.error3 = false;


        if (!this.state.nic) {
            this.state.error4 = true
            errors.nicError = "NIC number cannot be blank"
            toast.error("NIC is empty", {
                transition: Flip
            });;
          } else if (this.state.nic.indexOf("V") === -1 || this.state.nic.length ==12 || this.state.nic.length == 10) {
                this.state.error4 = true;
                errors.nicError = "NIC must be either 12 digits long or contain an ending V."
          } else
            this.state.error4 = false

        if (!this.state.date) {
            isError = true;
            errors.dateError = "Date cannot be blank"
            this.state.error5 = true
            toast.error("Date is empty", {
                transition: Flip
            });;
        } else
            this.state.error5 = false;

        if (!this.state.description) {
            isError = true;
            errors.descriptionError = "Description can not be blank"
            this.state.error6 = true
            toast.error("Description is empty", {
                transition: Flip
            });;
        } else
            this.state.error6 = false;

        if (!this.state.dateofincident) {
            isError = true;
            errors.dateofincidentError = "Date of Incident cannot be blank"
            this.state.error7 = true
            toast.error("Date of Incident is empty", {
                transition: Flip
            });;
        } else
            this.state.error7 = false;

        if (!this.state.personsinvolved) {
            isError = true;
            errors.descriptionError = "Persons Involved can not be blank"
            this.state.error8 = true
            toast.error("Persons Involved is empty", {
                transition: Flip
            });;
        } else
            this.state.error8 = false;


        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    //end of validation

    handleReset = () => {
        Array.from(document.querySelectorAll('input'));
        this.setState({
          refno: '',
          fullname: '',
          phonenumber: '',
          nic: '',
          date: '',
          description: '',
          dateofincident: '',
          personsinvolved: '',
        });
    };
     
    handleDemo = () => {
      Array.from(document.querySelectorAll('input'))
      this.setState({
          refNo: 'MISC123',
          fullname: 'Clay Jensen',
          phonenumber: '0772415266',
          nic: '200092738263',
          date: '2020-03-14',
          description: 'Valuable Belongings from Car Missing.',
          dateofincident: '2020-10-25',
          personsinvolved: 'Mr. Bryce Walker 983781273V',
      });
  };

      onSubmit(e) {
        e.preventDefault();
        const err = this.validate();

        if (!err) {
        const complain = {
          refNo: this.state.refNo,
          fullname: this.state.fullname,
          phonenumber: this.state.phonenumber,
          nic: this.state.nic,
          date: this.state.date,
          description: this.state.description,
          dateofincident: this.state.dateofincident,
          personsinvolved: this.state.personsinvolved,
          
        }

        console.log(complain);
        toast.success("Complaint Successfully Recorded.", {
          position: toast.POSITION.TOP_CENTER,
          draggable: true,
          transition: Flip,
          autoClose: 5000
      });

        axios.post('http://localhost:5000/miscComplains/add', complain).then(res => console.log(res.data));

        this.setState({
          refno: '',
          fullname: '',
          phonenumber: '',
          nic: '',
          date: '',
          description: '',
          dateofincident: '',
          personsinvolved: ''
        
        })  
        //this.props.history.push('/MiscellaneousComplainList')     
      }
    }

     



render(){


  //******************font designs********************
  
  const mystyle = {
    color: "white",
    padding: "5px",
    fontFamily: "Bernard MT Condensed"
    
  };

  const mystyle2 = {
    color: "white",
    padding: "5px",
    fontFamily: "Jam Sessions Personal Use"
  };

// *****************end of font designs *****************

    return(
      
      <>
      < div className="complain" >
          <>

              <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
          </>
          <div className="card text-white  bg-light mb-3 " style={{ marginLeft: 8.5 + 'rem' }} >
              <div style={mystyle} className="card-header bg-dark"><h3>    Add a Miscellaneous Complaint</h3></div>
              <div className="card-body " >
              </div >
              <div className="container">
                  <form onSubmit={this.onSubmit} action="/Complain" noValidate='true'>
                      <div className="row">
                          <div className="col form-group" >

                              <TextField
                                  label="Refno"
                                  required
                                  color="secondary"
                                  type="text"
                                  fullWidth
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
                                      label="Full Name"
                                      variant="outlined"
                                      color="secondary"
                                      required
                                      fullWidth
                                      name="fullname"
                                      error={this.state.error2}
                                      value={this.state.fullname}
                                      onChange={this.onchangefullname} />

                                  <br></br>
                                  <span className="text-danger">{this.state.fullnameError}</span>
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
                                  name="phonenumber"
                                  color="secondary"
                                  label="Phone Number"
                                  value={this.state.phonenumber}
                                  onChange={this.onchangephonenumber}
                                  error={this.state.error3} />
                              <br></br>
                              <span className="text-danger">{this.state.phonenumberError}</span>

                          </div>
                          <div className="col form-group">
                              <TextField
                                  type="text"
                                  required
                                  fullWidth
                                  name="nic"
                                  variant="outlined"
                                  color="secondary"
                                  label="NIC"
                                  value={this.state.nic}
                                  error={this.state.error4}
                                  onChange={this.onchangenic} />
                              <br></br>
                              <span className="text-danger">{this.state.nicError}</span>
                          </div>
                      </div>
                      <div className="row first-Name">
                          <div className="col form-group">
                              <TextField
                                  type="text"
                                  required
                                  fullWidth
                                  name="date"
                                  variant="outlined"
                                  color="secondary"
                                  placeholder="YYYY-MM-DD"
                                  label="Date"
                                  value={this.state.dateofincident}
                                  error={this.state.error5}
                                  onChange={this.onchangedate} />
                              <br></br>
                              <span className="text-danger">{this.state.dateError}</span>
                          </div>

                          <div className="col form-group">
                              <TextField
                                  type="text"
                                  required
                                  fullWidth
                                  name="description"
                                  variant="outlined"
                                  color="secondary"
                                  label="Description"
                                  value={this.state.description}
                                  error={this.state.error6}
                                  onChange={this.onchangedescription} />
                              <br></br>
                              <span className="text-danger">{this.state.descriptionError}</span>
                          </div>
                       
                      </div>
                      <div className="row first-Name">
                          <div className="col form-group" >

                              <TextField
                                  type="text"
                                  fullWidth
                                  variant="outlined"
                                  color="secondary"
                                  name="dateofincident"
                                  required
                                  label="Date Of Incident"
                                  placeholder="YYYY-MM-DD"
                                  value={this.state.dateofincident}
                                  error={this.state.error12}
                                  onChange={this.onchangedateofincident} />
                              <br></br>
                              <span className="text-danger">{this.state.dateofincidentError}</span>
                          </div>

                          <div className="col form-group" >

                              <TextField
                                  type="text"
                                  required
                                  fullWidth
                                  label="Persons Involved"
                                  variant="outlined"
                                  color="secondary"
                                  name="address"
                                  error={this.state.error8}
                                  value={this.state.personsinvolved}
                                  onChange={this.onchangepersonsinvolved} />
                              <br></br>
                              <span className="text-danger">{this.state.personsinvolvedError}</span>
                          </div>

                       
                      </div>
                      <div className="row first-Name" >
                   

                          <div className="col form-group " >
                              
                          <input type="file" onChange={this.handleChange} />
                                                <br />
                                                <img src={this.state.url || 'http://via.placeholder.com/300x200'} alt="Uploaded images" height="200" width="300" />
                                                <br />
                         <input type="button" onClick={this.handleUpload} className="btn btn-outline-warning btn btn-dark" value="Upload" />
                                 
                          </div>
                      </div>
                      <div className="form-group">
                          <input type="submit" name="submit" style={{ margin: 'auto', marginLeft: 0.5 + 'rem' }} value="Submit" className="btn btn-outline-danger btn btn-dark" />
                          <input type="reset" style={{ marginLeft: 0.5 + 'rem' }} value="Reset" className="btn btn-outline-warning btn btn-dark" onClick={this.handleReset} />
                          <input type="button" style={{ marginLeft: 0.5 + 'rem' }} className="btn btn-outline-success btn btn-dark" onClick={this.handleDemo} value="Demo" />
                          <button style={{ marginLeft: 0.5 + 'rem' }} className="btn btn-outline-success btn btn-dark" onClick={this.createPDF}>Generate Report</button>
                      </div>
                  </form>
              </div >

          </div >
      </div >
  </>


              
    )

    
    

}


}
