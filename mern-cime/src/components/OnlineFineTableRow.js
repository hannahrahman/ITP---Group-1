import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class OnlineFineTableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.obj.fineType}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.issueDate}</td>
                <td>{this.props.obj.emailId}</td>
                <td>{this.props.obj.amountOFfine}</td>

                <td>
                    <Button size="sm" variant="danger">
                        <Link className="edit-link" to={"/edit" + this.props.obj._id}>Edit</Link>
                    </Button>
                </td>
                <td>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }

}