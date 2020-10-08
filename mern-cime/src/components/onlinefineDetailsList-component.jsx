import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import OnlineFineTableRow from './OnlineFineTableRow';


export default class OnlineFineDetailList extends Component {

    constructor(props) {
        super(props)
        this.state = {

            onlineFineDetails: []

        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/onlinePayment/')
            .then(res => {
                this.setState({
                    onlineFineDetails: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.onlineFineDetails.map((res, i) => {
            return <OnlineFineTableRow obj={res} key={i} />
        });
    }

    render() {
        return (
            <div class="container" style={{ marginTop: 2 + 'rem' }}>

                <div class="card text-dark  bg-white  mb-3" style={{ marginLeft: 11 + 'rem' }} >
                    <div class="card-header"><h3>Online Fine Details List</h3></div>
                    <div class="card-body" >
                        <div className="table-wrapper">
                            <Table striped border hover>
                                <thead>
                                    <tr>
                                        <th>Fine Type</th>
                                        <th>Name</th>
                                        <th>Issued Date</th>
                                        <th>Email</th>
                                        <th>Issue Date</th>
                                        <th>Amount Of Fine</th>
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
