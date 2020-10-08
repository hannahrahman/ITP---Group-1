import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import axios from 'axios';



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
          personsinvolved: '',
        
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

      onSubmit(e) {
        e.preventDefault();
    
        const complain = {
          refNo: Number(this.state.refNo),
          fullname: this.state.fullname,
          phonenumber: Number(this.state.phonenumber),
          nic: this.state.nic,
          date: this.state.date,
          description: this.state.description,
          dateofincident: this.state.dateofincident,
          personsinvolved: this.state.personsinvolved,
          
        }
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

     



render(){

  
  
    return(
        <div>
        <div style={{ marginLeft: 21 + 'rem' }} >
              <div class="card-header">
                <h3>Add a Miscellaneous Complaint</h3>
                <h4>Your Confidentiality will be ensured.</h4>
              </div>
        </div>

              <div class="container">
                <form
                  onSubmit={this.onSubmit}
                  style={{ margin: "auto" }}
                  class=" needs-validation"
                  noValidate={true}>

                <div style={{ marginLeft: 21 + 'rem' }} >
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Reference Number:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control is-invalid"
                      value={this.state.refNo}
                      onChange={this.onchangeRefno}
                      
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Full Name: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.fullname}
                      onChange={this.onchangefullname}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Phone Number: </b>
                    </label>
                    <input
                      type="number"
                      required
                      numberformat = "true"
                      format="### ###-####"
                      mask="_"
                      className="form-control"
                      value={this.state.phonenumber}
                      onChange={this.onchangephonenumber}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>National Identity Card Number: </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.nic}
                      onChange={this.onchangenic}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date:  </b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.onchangedate}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Please describe nature of incident/complaint:</b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onchangedescription}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Date of incident:  </b>
                    </label>
                    <div>
                      <DatePicker
                        className="form-control"
                        selected={this.state.dateofincident}
                        onChange={this.onchangedateofincident}
                      />
                    </div>
                  </div>
                           
                  <div className="form-group">
                    <label style={{ marginLeft: 0.5 + "rem" }}>
                      <b>Person/s Involved in the incident (Include Name and NIC): </b>
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={this.state.personsinvolved}
                      onChange={this.onchangepersonsinvolved}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      id="submit"
                      style={{ marginLeft: 0.5 + "rem" }}
                      value="Submit"
                      class="needs-validationbtn"
                      class="btndisabled"
                    />
                  </div>
                  </div>
                </form>
              </div>
              </div>


              
    )

}
}
            