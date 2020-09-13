import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import DomAbuseTableRow from './DomAbuseTableRow';


export default class DomesticAbuseComplainList extends Component {

    constructor(props){
        super(props)
        this.state = {
            
            domAbuseComplains : []

        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/domestic_abuse_complains/')
        .then(res => {
            this.setState({
                domAbuseComplains : res.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    DataTable(){
        return this.state.domAbuseComplains.map((res,i) => {
            return <DomAbuseTableRow obj={res} key={i} />
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
                                        <th>Refference No</th>
                                        <th>Complain Type</th>
                                        <th>Created Date</th>
                                        <th>Status</th>
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
