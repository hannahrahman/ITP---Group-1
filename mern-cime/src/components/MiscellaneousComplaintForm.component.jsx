import React, { Component } from 'react'
import axios from 'axios';
import { responsiveFontSizes, TextField } from '@material-ui/core'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { ToastContainer, toast, Zoom, Bounce, Flip } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


toast.success("Welcome, Sheikha Hannah Rahman", {
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
    
        this.state = {
          refNo: new Number(),
          fullname: '',
          phonenumber: new Number(),
          nic: '',
          date: new Date(),
          description: '',
          dateofincident: new Date(),
          personsinvolved: ''
        }
      

      }
      

    
      

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
    
    
      onchangedate(date) {
        this.setState({
          date: date,
        });
      }
    
      onchangedescription(e) {
        this.setState({
          description: e.target.value,
        });
      }
    
      onchangedateofincident(date) {
        this.setState({
          dateofincident: date,
        });
      }
    
      onchangepersonsinvolved(e) {
        this.setState({
          personsinvolved: e.target.value,
        });
      }

      validate = () => {
        let isError = false;
        const errors = {
            refNoError: new Number(),
            fullnameError: '',
            phonenumberError: new Number(),
            nicError: '',
            dateError: new Date(),
            descriptionError: '',
            dateofincidentError: new Date(),
            personsinvolvedError: '',
        };


        if (this.state.refNo.length <= 0) {
            isError = true;
            errors.refNoError = "Reference Number cannot be blank"
            this.state.error1 = true
            toast.error("Reference Number cannot be blankk", {
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

        if (this.state.phonenumber.length > 10) {
            isError = true;
            errors.phonenumberError = "Enter your Phone number"
            this.state.error3 = true
            toast.error("Phone is empty", {
                 transition: Flip
              });;
        } else
            this.state.error3 = false;


        if (!this.state.nic) {
            this.state.error4 = true
            errors.nicError = "NIC number cannot be blank"
            toast.error("NIC is empty", {
                transition: Flip
            });;

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


     
      onSubmit(e) {
        e.preventDefault();
        const err = this.validate();

        if (!err) {
        const complain = {
          refNo: Number(this.state.refNo),
          fullname: this.state.fullname,
          phonenumber: Number(this.state.phonenumber),
          nic: this.state.nic,
          date: this.state.date,
          description: this.state.description,
          dateofincident: this.state.dateofincident,
          personsinvolved: this.state.personsinvolved,
          
        };

        console.log(complain);
        axios.post('http://localhost:5000/complains/add', complain).then(res => console.log(res.data));

        this.setState({
          refno: new Number(),
          fullname: '',
          phonenumber: new Number(),
          nic: '',
          date: new Date(),
          description: '',
          dateofincident: new Date(),
          personsinvolved: ''
        
        })

        this.props.history.push('/MiscellaneousComplainList')
    
        
      }
    }

     



render(){

  const mystyle = {
    color: "black",
    padding: "5px",
    fontFamily: "Bernard MT Condensed"
    
  };


  const mystyle2 = {
    color: "black",
    padding: "5px",
    fontFamily: "Jam Sessions Personal Use"
  };

    return(
        <div>
          <div className="container" style={{ marginTop: 0.1 + 'rem' }}></div>
          <ToastContainer draggable={false} transition={Zoom} autoClose={8000} newestOnTop />
              
        <div style={{ marginLeft: 21 + 'rem' }} >
              <div class="card-header">
                <h3 style={mystyle}>Add a Miscellaneous Complaint</h3>
                <h4 style={mystyle2}>Your Confidentiality will be ensured.</h4>
              </div>
        </div>

              <div class="container">
                <form
                  onSubmit={this.onSubmit}
                  style={{ margin: "auto" }}
                  class=" needs-validation"
                  noValidate={true}
                  >
              
                <div style={{ marginLeft: 10 + 'rem' }} >
                  <div className="form-group">
                    <label style={{ marginLeft: 1.5 + "rem" }}></label>
                    <br></br>

                    <TextField
                      type="number"
                      required
                      //className="form-control is-invalid"
                      label="Reference Number"
                      variant="outlined"
                      color="secondary"
                      value={this.state.refNo}
                      onChange={this.onchangeRefno}
                      error={this.state.error1}
                    />
                  </div>
                      
                  <div className="form-group">
                  
                    <TextField
                      type="text"
                      required
                      className="form-control"
                      label="Full Name of Complainee"
                      variant="outlined"
                      color="secondary"
                      value={this.state.fullname}
                      onChange={this.onchangefullname}
                      error={this.state.error2}
                    />
                   
                  </div>
                      <br></br>
                  <div className="form-group">
                    
                    <TextField
                      type="number"
                      required
                      numberformat="true"
                      format="### ###-####"
                      mask="_"
                      label="Phone Number"
                      variant="outlined"
                      color="secondary"
                      value={this.state.phonenumber}
                      onChange={this.onchangephonenumber}
                      error={this.state.error3}
                    />
                  </div>
                      
                  <div className="form-group">
                    <TextField
                      type="text"
                      required
                      className="form-control"
                      label="National Identity Card Number"
                      variant="outlined"
                      color="secondary"
                      value={this.state.nic}
                      onChange={this.onchangenic}
                      error={this.state.error4}
                    />
                  </div>

                  <div className="form-group">
                    <br></br>
                    <div>
                      <DatePicker
                        type="date"
                        required
                        variant="outlined"
                        color="secondary"
                        selected={this.state.date}
                        onChange={this.onchangedate}
                        error={this.state.error5}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <TextField
                      type="text"
                      required
                      className="form-control"
                      label="Description of Incident"
                      variant="outlined"
                      color="secondary"
                      value={this.state.description}
                      onChange={this.onchangedescription}
                      error={this.state.error6}
                    />
                  </div>

                  <div className="form-group">
                   
                    <div>
                   <br></br>
                  <label className="text-dark">Date of Incident:</label>
                  <br></br>
                    <DatePicker
                      required
                      fullWidth
                      variant="outlined"
                      type="date"
                      color="secondary"
                      selected={this.state.dateofincident}
                      onChange={this.onchangedateofincident} 
                      error={this.state.error7}/>
                    
                    </div>
                  </div>
                           
                  <div className="form-group">
                    
                    <TextField
                      type="text"
                      required
                      className="form-control"
                      label="Persons Involved"
                      variant="outlined"
                      color="secondary"
                      value={this.state.personsinvolved}
                      onChange={this.onchangepersonsinvolved}
                      error={this.state.error8}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      style={{ marginLeft: 0.5 + "rem" }}
                      value="Submit"
                      class="needs-validation btn"
                      className="btn btn-outline-warning btn btn-dark" 
                    />


                    </div>
                  </div>
                </form>
              </div>
            </div>


              
    )

    
    

}


}
