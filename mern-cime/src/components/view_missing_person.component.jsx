import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MissingPersonTableRow from './missingPersonTableRow'; 


export default class VeiwMissingPersonsComplains extends Component {

    constructor(props){
        super(props)
        this.state = {
            
            missingPersonComplains : []

        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/missingPersonAffairs/')
        .then(res => {
            this.setState({
                missingPersonComplains : res.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    DataTable(){
        return this.state.missingPersonComplains.map((res,i) => {
            return <MissingPersonTableRow obj={res} key={i} />
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 2 + 'rem' }}>

                <div className="card text-dark  bg-white  mb-3" style={{ marginLeft: 11 + 'rem' }} >
                    <div className="card-header"><h3>Complain List</h3></div>
                    <div className="card-body" >
                        <div className="table-wrapper">
                            <Table striped border hover>
                                <thead>
                                    <tr>
                                        <th>Missig Person Name:</th>
                                        <th>Missig Person Nickname:</th>
                                        <th>Missig Person Address:</th>
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
