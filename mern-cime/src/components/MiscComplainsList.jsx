import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Complain = props => (
  <tr>
    <td>{props.complain.refno}</td>
    <td>{props.complain.fullname}</td>
    <td>{props.complain.phonenumber}</td>
    <td>{props.complain.nic}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>{props.complain.description}</td>
    <td>{props.complain.dateofincident.substring(0,10)}</td>
    <td>{props.complain.personsinvolved}</td>
    <td>
      <Link to={"/edit/"+props.complain._id}>edit</Link> | <a href="#" onClick={() => { props.deleteComplain(props.complain._id) }}>delete</a>
    </td>
  </tr>
)

export default class ComplainsList extends Component {
  constructor(props) {
    super(props);

    this.deleteComplain = this.deleteComplain.bind(this)

    this.state = {complains: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/complains/')
      .then(response => {
        this.setState({ complains: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteComplains(id) {
    axios.delete('http://localhost:5000/complains/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      complains: this.state.complains.filter(el => el._id !== id)
    })
  }

  complainList() {
    return this.state.complains.map(currentcomplain => {
      return <Complain complain={currentcomplain} deleteComplain={this.deleteComplain} key={currentcomplain._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3> All Miscellaneous Complains </h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Ref No</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>NIC</th>
              <th>Date</th>
              <th>Description</th>
              <th>Date of Incident</th>
              <th>Persons Involved</th>
            </tr>
          </thead>
          <tbody>
            { this.complainList() }
          </tbody>
        </table>
      </div>
    )
  }
}