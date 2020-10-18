import React, { Component } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

export default class PDF extends Component {
    constructor(props) {
        super(props);



        return (
            <>
                <div className="Post" ref={ref}>
                    <h1> {this.props.description}</h1>
                    {<table >
                        <tr>

                            <td>Reference Number</td>
                            <td>Complaint Type</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>NIC</td>
                            <td>Date Of Birth</td>
                            <td>Religion</td>
                            <td>Sex</td>
                            <td>Address</td>
                            <td>Phone</td>
                            <td>Description</td>
                            <td>Weapon(Optional)</td>
                            <td>Date</td>
                            <td>Officer Incharge</td>

                        </tr>
                        <tr>
                            <td>{this.props.refNo}</td>
                            <td>{this.props.complainType}</td>
                            <td>{this.props.fname}</td>
                            <td>{this.props.lname}</td>
                            <td>{this.props.nic}</td>
                            <td>{this.props.dateOfBirth}</td>
                            <td>{this.props.religion}</td>
                            <td>{this.props.sex}</td>
                            <td>{this.props.address}</td>
                            <td>{this.props.description}</td>
                            <td>{this.props.weapon}</td>
                            <td>{this.props.date}</td>
                            <td>{this.props.officer_incharge}</td>
                        </tr>
                    </table>}
                </div>
                <Pdf targetRef={ref} filename="Post.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
                </Pdf>

            </>

        )
    }

}