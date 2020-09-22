import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MiscellaneousComplaintRow from './MiscellaneousComplaintRow';


export default class MiscellaneousComplainList extends Component {

    constructor(props){
        super(props)
        this.state = {
            
            MiscellaneousComplains : []

        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/complains/')
        .then(res => {
            this.setState({
                MiscellaneousComplains : res.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    DataTable(){
        return this.state.MiscellaneousComplains.map((res,i) => {
            return <MiscellaneousComplaintRow obj={res} key={i} />
        });
    }

    render() {
        return (
            <div class="container" style={{ marginTop: 2 + 'rem' }}>

                <div class="card text-dark  bg-white  mb-3" style={{ marginLeft: 11 + 'rem' }} >
                    <div class="card-header"><h3>Complains List</h3></div>
                    <div class="card-body" >
                        <div className="table-wrapper">
                            <Table striped border hover>
                                <thead>
                                    <tr>
                                        <th>Ref No</th>
                                        <th>Full Name</th>
                                        <th>NIC:</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.DataTable()}
                                </tbody>
                            </Table>
                        </div>
                    </div >
                </div >
            </div >


        )

    }

}