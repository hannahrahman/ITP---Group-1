import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CrimeTableRow from './CrimeTableRow';

export default class CrimeComplainList extends Component {

    constructor(props) {
        super(props)
        this.state = {

            crimeComplains: []

        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Addcomplain/')
            .then(res => {
                this.setState({
                    crimeComplains: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.crimeComplains.map((res, i) => {
            return <CrimeTableRow obj={res} key={i} />
        });
    }

    render() {
        return (
            <div class="container" style={{ marginTop: 1.2 + 'rem' }}>

                <div class="card text-light  bg-dark  mb-3" style={{ marginLeft: 8.5 + 'rem' }} >
                    <div class="card-header"><h3>Complains List</h3></div>
                    <div class="card-body" >
                        <div className="table-wrapper ">
                            <Table striped border hover>
                                <thead className="text-light">
                                    <tr>
                                        <th>Ref No</th>
                                        <th>Complain Type</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody className="text-light">
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
