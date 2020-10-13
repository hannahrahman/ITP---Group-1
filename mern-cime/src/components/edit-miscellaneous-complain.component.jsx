import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


export default class EditMiscellaneousComplain extends Component{

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

    componentDidMount(){
        axios.get('http://localhost:5000/miscellaneous_complains/edit/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                refno: res.data.refNo,
                fullname: res.data.fullname,
                phonenumber: res.data.phonenumber,
                nic: res.data.nic,
                date: Date.parse(res.data.date),
                description: res.data.description,
                dateofincident: Date.parse(res.data.dateofincident),
                personsinvolved: res.data.personsinvolved
              
              });
        })
        .catch((error) => {
            console.log(error);
        })
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
          date: Date(this.state.date),
          description: this.state.description,
          dateofincident:Date(this.state.dateofincident) ,
          personsinvolved: this.state.personsinvolved,
        };
        console.log(complain)
        axios
            .post('http://localhost:5000/miscellaneous_complains/update/'+this.props.match.params.id, complain)
            .then(res => console.log(res.data));
    
        this.props.history.push('/MiscellaneousComplainList')  //redirect to complains list page after submit
    }
    
   


render(){


  const mystyle = {
    color: "black",
    padding: "5px",
    fontFamily: "Arial"
  };

    return(
<div>
          <div className="container" style={{ marginTop: 1.5 + 'rem' }}></div>
        <div style={{ marginLeft: 21 + 'rem' }} >
              <div class="card-header">
                <h3 style={mystyle}>Add a Miscellaneous Complaint</h3>
                <h4>Your Confidentiality will be ensured.</h4>
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
                      onChange={this.onchangedateofincident} />
                    
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