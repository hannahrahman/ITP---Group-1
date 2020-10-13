import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import OnlineDrivingNICRenewalNavbar from "../../NavBars/OnlineDrivingNICRenewalNavbar.component";
import { Button } from 'semantic-ui-react';

const License = props => (
    <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.nic}</td>
    <td>
        <Link to={"/editlostLicense/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => props.delete(props.exercise._id) }>delete</a> | 
    </td>
    <td><Link to={"/viewlostLicense/"+props.exercise._id}>View PDF</Link></td>
    </tr>
  )

export default class viewLostLicense extends Component {

    constructor(props) {

        super(props);

        this.deleteExercise = this.deleteExercise.bind(this)
        
        this.state = {licenses: []};

    }

    componentDidMount() {
        axios.get('http://localhost:5000/license/')
          .then(response => {
            this.setState({ licenses: response.data })
            console.log(this.state.licenses)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise = (id) => {
        axios.delete('http://localhost:5000/license/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          licenses: this.state.licenses.filter(el => el._id !== id)
        })

    }

    exerciseList() {
        return this.state.licenses.map(currentexercise => {
          return <License exercise={currentexercise} key={currentexercise._id} delete={this.deleteExercise}/>;
        })
    }

    render() {

        return (
  
        <div>

        <OnlineDrivingNICRenewalNavbar />

            <h3>License Lost</h3>
                
            <Button className="primary" href="/Online Driving/NIC Renewal">Add New Complaint</Button>
            
            <table className="table">
                    
                <thead className="thead-light">
                        
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Nic</th>
                        <th>Actions</th>
                        <th>View PDF</th>
                    </tr>
                        
                </thead>
                    
                <tbody>
                    { this.exerciseList() }
                </tbody>
                    
            </table>
                
        </div>

        )
    }
}

