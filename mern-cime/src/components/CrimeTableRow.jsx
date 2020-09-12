import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default class CrimeTableRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.obj.refNo}</td>
                <td>{this.props.obj.complainType}</td>
                <td>{this.props.obj.date}</td>

                <td>
                    <Button size="sm" variant="danger">
                        <Link className="btn-link " to={"/edit" + this.props.obj._id} style={{ color: 'inherit', textDecoration: 'inherit' }}>Edit</Link>
                    </Button>
                </td>
                <td>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }

}
