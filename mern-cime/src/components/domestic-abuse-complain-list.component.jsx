import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faFastBackward, faStepForward, faFastForward, faListAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css';

export default class DomesticAbuseComplainList extends Component {

    constructor(props){
        super(props)
        this.state = {  
            domAbuseComplains : [],
            currentPage : 1,
            recordsPerPage : 10,
            searchResults : []
        }
        this.searchRecords = this.searchRecords.bind(this);
    }

    componentDidMount() {
        this.findAllComplains();
    }

    findAllComplains() {
        axios.get('http://localhost:5000/domestic_abuse_complains/')
            .then(response => response.data)
            .then((data) => {
                this.setState({domAbuseComplains: data});
            });
    };

    changePage = event => {
        this.setState({
            [event.target.name]: parseInt(event.target.value)
        });
    };

    firstPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    };

    prevPage = () => {
        if(this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    };

    lastPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.domAbuseComplains.length / this.state.recordsPerPage)) {
            this.setState({
                currentPage: Math.ceil(this.state.domAbuseComplains.length / this.state.recordsPerPage)
            });
        }
    };

    nextPage = () => {
        if(this.state.currentPage < Math.ceil(this.state.domAbuseComplains.length / this.state.recordsPerPage)) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    };
 
    searchRecords(e) {
        let item = e.target.value;
        var itemArray =[];
        if(item.length >= 0){
            axios.get('http://localhost:5000/domestic_abuse_complains/')
            .then(response => response.data)
            .then((data) => {
                this.setState({searchResults: data});
            });
            if(this.state.searchResults){
                this.state.searchResults.filter(function(row){
                    var startElm, endElm, midElm;
                    let newRow = Object.assign({},row);
                    if(newRow){
                        var index = newRow.refNo.toUpperCase().search(item.toUpperCase())
                        if(index > -1){
                            if(index == 0){
                                startElm = "";
                                midElm = newRow.refNo.slice(index, index+item.length);
                                endElm = newRow.refNo.slice(index+item.length);
                            } else {
                                startElm = newRow.refNo.slice(0, index+item.length);
                                midElm = newRow.refNo.slice(index, index+item.length);
                                endElm = newRow.refNo.slice(index+item.length);
                            }
                            newRow.refNo = <p>{startElm}<span style={{backgroundColor:"#17A2B8"}}>{midElm}</span>{endElm}</p>
                            itemArray.push(newRow);    
                        }
                    }
                });
                this.setState({domAbuseComplains:itemArray})
            }
        }
    }

    deleteComplain = (complainId) => {
        let backupRecords ={};

        if(window.confirm("Do you want to delete this record?")) {
            axios.get('http://localhost:5000/domestic_abuse_complains/edit/'+complainId)
            .then(function(res) {
                backupRecords = res.data;
                axios.post('http://localhost:5000/domestic_abuse_complains_backup/add', backupRecords)
            });
            axios.get('http://localhost:5000/domestic_abuse_complains/delete/'+complainId)
            .then(response => {
                if(response.data != null) {
                    alert("Record deleted successfully.");
                    this.setState({
                    currentPage: 1
                    });
                }
            });
        } else {
            alert("Delete cancelled.");
        }
    };

    render() {

        const {domAbuseComplains, currentPage, recordsPerPage} = this.state;
        const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;
        const currentRecords = domAbuseComplains.slice(firstIndex, lastIndex);
        const totalPages = domAbuseComplains.length / recordsPerPage;
        const totalRecords = domAbuseComplains.length;

        const selectedPageCss = {
            width: "45px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold"
        };

        const pageCountLabelCss = {
            float: "left",
            width: "250px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
            padding: "10px 10px",
            background: "#17A2B8",
            borderRadius: "7px"
        };

        const recordCountLabelCss = {
            margin: "0 auto",
            width: "200px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
            padding: "10px 10px",
            background: "#17A2B8",
            borderRadius: "7px"
        };

        return (
            <div className="complain">
                <div class="card text-white  bg-dark  mb-3" style={{ marginLeft: 8.5 + 'rem' }} >
                    <div class="card-header">
                        <h3><FontAwesomeIcon icon={faListAlt} /> Complains List</h3>
                        <div style={{"float":"right"}}>
                            <input type="search" id="search" style={{"borderRadius": "7px", "borderColor": "#17A2B8", "borderWidth":"medium", "padding":"5px"}} name="" placeholder="Search...." onChange={this.searchRecords}/>
                        </div>
                    </div>
                    <div class="card-body" >
                        <div className="table-wrapper">
                            <Table striped border hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Refference No</th>
                                        <th>Complain Type</th>
                                        <th>Created Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {domAbuseComplains.length === 0 ?
                                        <tr align="center">
                                            <td colSpan="6">No Complains Available</td>
                                        </tr> :
                                        currentRecords.map((complain, index) => (
                                            <tr key={index}>
                                                <td>{complain.refNo}</td>
                                                <td>{complain.complainType}</td>
                                                <td>{complain.date}</td>
                                                <td>{complain.status}</td>
                                                <td>
                                                    <Link className="btn btn-primary" to={`/EditDomesticAbuseComplain/${complain._id}`}>View</Link>
                                                </td>
                                                <td>
                                                    <Link className="btn btn-danger" onClick={this.deleteComplain.bind(this, complain._id)}>Delete</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div style={pageCountLabelCss}>
                            Showing Page {currentPage} of {totalPages}
                        </div>
                        <div style={recordCountLabelCss}>
                            Total Records : {totalRecords}
                        </div>
                        <div style={{"float":"right"}}>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false} onClick={this.firstPage}>
                                        <FontAwesomeIcon icon={faFastBackward} /> First
                                    </Button>
                                    <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false} onClick={this.prevPage}>
                                        <FontAwesomeIcon icon={faStepBackward} /> Prev
                                    </Button>
                                </InputGroup.Prepend>
                                <FormControl style={selectedPageCss} className={"bg-primary"} name="currentPage" value={currentPage} onChange={this.changePage}/>
                                <InputGroup.Append>
                                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false} onClick={this.nextPage}>
                                        <FontAwesomeIcon icon={faStepForward} /> Next
                                    </Button>
                                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false} onClick={this.lastPage}>
                                        <FontAwesomeIcon icon={faFastForward} /> Last
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div >
                </div >
            </div >
        )
    }
}